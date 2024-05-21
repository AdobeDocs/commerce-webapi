var nav = require('../out/gatsbyConfig.js');
const path = require('path');
const fs = require('node:fs');


console.dir(nav, { depth: null, colors: true, maxArrayLength: null });


try {
  const topNav = JSON.stringify(nav.gatsbyConfig.siteMetadata.pages);
  fs.writeFileSync(path.resolve(__dirname + '/../out/topNav.html'), topNav);

  const sideNav = JSON.stringify(nav.gatsbyConfig.siteMetadata.subPages);
  fs.writeFileSync(path.resolve(__dirname + '/../out/sideNav.html'), sideNav);
} catch (err) {
  console.error(err);
}
