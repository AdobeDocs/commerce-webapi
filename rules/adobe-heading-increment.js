"use strict";

// Replacement for MD001 that is aware of Adobe DevSite component blocks.
//
// Headings that serve as slot content for <CodeBlock> and <Details> components
// are excluded from the increment check because the framework prescribes ####
// for those slots regardless of the surrounding section depth. All other
// headings must still increment by no more than one level at a time.
//
// Usage: disable MD001 in .markdownlint.yml and register this file under
// customRules in .markdownlint-cli2.jsonc.

/** Returns the fence-marker string if `line` opens a fenced code block. */
function openFence(line) {
  const m = line.match(/^\s{0,3}(```+|~~~+)/);
  return m ? m[1] : null;
}

/**
 * Returns true when `line` is a valid closing fence for a block opened with
 * `opening`. Rules: same fence character, at least as many chars, no trailing
 * content except spaces. Leading whitespace is unrestricted because fences
 * inside list items inherit the list's indentation, which can exceed the
 * top-level CommonMark maximum of 3 spaces.
 */
function isClosingFence(line, opening) {
  const ch = opening[0] === "`" ? "`" : "~";
  const re = new RegExp(`^\\s*${ch}{${opening.length},}\\s*$`);
  return re.test(line);
}

module.exports = {
  names: ["CM001", "comdox-heading-increment"],
  description:
    "Heading levels should only increment by one level at a time " +
    "(component-slot headings are excluded from this check)",
  tags: ["headings"],
  function: function rule(params, onError) {
    const lines = params.lines;

    // ── Pass 1: identify component-owned heading lines ─────────────────────
    // A component tag of the form
    //   <CodeBlock slots="heading, ..." repeat="N" ... />
    //   <Details slots="heading, ..." />
    // "owns" the next N (default 1) headings that follow it.

    const componentOwnedLines = new Set(); // 1-indexed line numbers

    let inFence = false;
    let openingFence = "";

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trimEnd();

      if (inFence) {
        if (isClosingFence(line, openingFence)) inFence = false;
        continue;
      }

      const fence = openFence(line);
      if (fence) {
        inFence = true;
        openingFence = fence;
        continue;
      }

      // Match component tags whose slots include "heading"
      const tagMatch = line.match(/<(CodeBlock|Details)\b([^>]*?)(?:\/>|>)/i);
      if (!tagMatch) continue;
      const attrs = tagMatch[2];
      if (!/slots="[^"]*\bheading\b/.test(attrs)) continue;

      const repeatMatch = attrs.match(/\brepeat="(\d+)"/i);
      let remaining = repeatMatch ? parseInt(repeatMatch[1], 10) : 1;

      // Scan forward to claim the next `remaining` headings
      let innerFence = false;
      let innerOpening = "";
      for (let j = i + 1; j < lines.length && remaining > 0; j++) {
        const jLine = lines[j].trimEnd();

        if (innerFence) {
          if (isClosingFence(jLine, innerOpening)) innerFence = false;
          continue;
        }

        const jFence = openFence(jLine);
        if (jFence) {
          innerFence = true;
          innerOpening = jFence;
          continue;
        }

        if (/^#{1,6} /.test(jLine)) {
          componentOwnedLines.add(j + 1); // 1-indexed
          remaining--;
        }
      }
    }

    // ── Pass 2: enforce heading increment, skipping component-owned lines ──

    let prevLevel = 0;
    inFence = false;
    openingFence = "";

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trimEnd();

      if (inFence) {
        if (isClosingFence(line, openingFence)) inFence = false;
        continue;
      }

      const fence = openFence(line);
      if (fence) {
        inFence = true;
        openingFence = fence;
        continue;
      }

      const hMatch = line.match(/^(#{1,6}) /);
      if (!hMatch) continue;

      const level = hMatch[1].length;
      const lineNumber = i + 1;

      if (componentOwnedLines.has(lineNumber)) {
        // Transparent to the structural heading flow
        continue;
      }

      if (prevLevel > 0 && level > prevLevel + 1) {
        onError({
          lineNumber,
          detail: `Expected: h${prevLevel + 1}; Actual: h${level}`,
        });
      }

      prevLevel = level;
    }
  },
};
