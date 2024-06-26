var nav = require('../out/gatsbyConfig.js');
const path = require('path');
const fs = require('node:fs');

try {
    const topNav = nav.gatsbyConfig.siteMetadata;
    let topNavHtml = `<html>\n`;

    // TODO: prob need url fixer from gatsby theme
    if (topNav?.home) {
        topNavHtml += `<li> <a href="${topNav.home.path}"> ${topNav.home.title} </a> </li>\n`;
    }

    topNav.pages?.forEach((navItem) => {
        topNavHtml += `<li> <a href="${navItem.path}"> ${navItem.title} </a> </li>\n`;
    });

    topNavHtml += `</html>`
    fs.writeFileSync(path.resolve(__dirname + '/../out/topNav.html'), topNavHtml);

    const sideNav = nav.gatsbyConfig.siteMetadata.subPages;
    let sideNavHtml = `<html>`;
    sideNavHtml += buildSideNavRecursively(sideNav);
    sideNavHtml += `</html>`;
    fs.writeFileSync(path.resolve(__dirname + '/../out/sideNav.html'), sideNavHtml);
} catch (err) {
    console.error(err);
}

function buildSideNavRecursively(sideNav) {
    let sideNavHtml = '<ul>\n';
    for (var k in sideNav) {
        if (sideNav[k].pages) {
            sideNavHtml += buildSideNavRecursively(sideNav[k].pages);
        } else {
            sideNavHtml += `<li> <a href="${sideNav[k].path}"> ${sideNav[k].title} </a> </li>\n`;
        } 
    }
    sideNavHtml += '</ul>\n'
    return sideNavHtml;
}