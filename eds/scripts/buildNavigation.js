var nav = require('../out/gatsbyConfig.js');
const path = require('path');
const fs = require('node:fs');

try {
    const topNav = nav.gatsbyConfig.siteMetadata;
    const pathPrefix = nav.gatsbyConfig.pathPrefix;
    console.log(nav.gatsbyConfig)
    console.log('pathPrefix',pathPrefix)
    let topNavMarkdown = ``;

    // TODO: prob need url fixer from gatsby theme
    if (topNav?.home) {
        
        //topNavMarkdown += `<li> <a href="${topNav.home.path}"> ${topNav.home.title} </a> </li>\n`;
        topNavMarkdown += `- [${topNav.home.title}](${topNav.home.path})\n`;
    }

    topNav.pages?.forEach((navItem) => {
        //topNavMarkdown += `<li> <a href="${navItem.path}"> ${navItem.title} </a> </li>\n`;
        topNavMarkdown += `- [${navItem.title}](${navItem.path})\n`;
    });

    fs.writeFileSync(path.resolve(__dirname + '/../out/topNav.md'), topNavMarkdown);

    const sideNav = nav.gatsbyConfig.siteMetadata.subPages;
    console.dir(sideNav)
    let sideNavMarkdown = ``;
    let depth = 0;
    sideNavMarkdown += buildSideNavRecursively(sideNav, depth);
    fs.writeFileSync(path.resolve(__dirname + '/../out/sideNav.md'), sideNavMarkdown);
} catch (err) {
    console.error(err);
}
// subpages menu should only appear on the subpages path
// need to check paths to
function buildSideNavRecursively(sideNav, depth) {
    let sideNavMarkdown = '';

    for (var k in sideNav) {
        if (sideNav[k].pages) {
            sideNavMarkdown += buildSideNavRecursively(sideNav[k].pages, depth+1);
        } else {
            //sideNavMarkdown += `<li> <a href="${sideNav[k].path}"> ${sideNav[k].title} </a> </li>`;
            sideNavMarkdown += `${insertSpace(depth)}- [${sideNav[k].title}](${sideNav[k].path})\n`;
        } 
    }
    return sideNavMarkdown;
}

function insertSpace(indentLevel) {
    let spaces = ``;
    for(var i=0; i<indentLevel; i++){
        spaces += `  `
    }
    return spaces;
}

// src/pages/topNav.md
// src/pages/sideNav.md 
// src/pages/get-started/sideNav.md

// go through each subPages and find each path that relates to a subfolder 


// title with path only
// header setting
