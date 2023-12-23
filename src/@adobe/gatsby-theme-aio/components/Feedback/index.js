/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React, { useEffect, useState, useRef } from "react";
import loadable from "@loadable/component";
import { Tooltip } from "Components/Tooltip";

const AlertDialog = loadable(() =>
  import("@adobe/gatsby-theme-aio/src/components/AlertDialog")
);

// Provides a single place to add/remove feedback options
const emojiMap = {
  Yes: '🙂',
  Maybe: '😐',
  No: '🙁'
};

const FeedbackButton = ({ variant, setIsOpen }) => (
  <Tooltip text={variant}>
    <div 
      style={{
        display: 'inline-block',
        borderRadius: '999px',
        cursor: 'pointer',
        fontSize: '2.5rem',
      }}
      onClick={() => setIsOpen(true)}
      daa-ll={`Feedback-${variant}`}
      role="button"
      onKeyDown={e => { }}
      tabIndex="0"
    >
      {emojiMap[variant]}
    </div>
  </Tooltip>
);

export const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const feedbackRef = useRef(null);

  useEffect(() => {
    if (isOpen && !isLoaded) {
      AlertDialog.load().then(() => {
        setIsOpen(false);
        setIsLoaded(true);
        setTimeout(() => setIsOpen(true), 100);
      });
    }
  }, [isOpen, isLoaded]);

  useEffect(() => {
    const feedback = feedbackRef.current;
    if (feedback) {
      Object.assign(feedback.style, {
        alignItems: "center",
        backgroundColor: "#e6f0fa",
        border: "1px solid #4d94db",
        borderRadius: "9999px",
        bottom: "1rem",
        display: "flex",
        fontSize: "1.125rem",
        gap: "12px",
        fontWeight: "600",
        justifyContent: "center",
        marginBottom: "1rem",
        marginTop: "1.5rem",
        padding: "0.25rem",
        position: "sticky",
      });
    }
  }, []);

  return (
    <aside ref={feedbackRef}>
      Was this page helpful?
      {Object.keys(emojiMap).map(variant => (
        <FeedbackButton key={variant} variant={variant} setIsOpen={setIsOpen} />
      ))}
      {isLoaded && (
        <AlertDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title="Thanks for your feedback!"
          variant="success">
          Thank you for helping Adobe update its documentation.
        </AlertDialog>
      )}
    </aside>
  );
};
