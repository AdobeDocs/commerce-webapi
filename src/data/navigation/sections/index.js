const get_started = require("./get_started");
const rest = require("./rest");
const graphql= require("./graphql");

module.exports = [...get_started, ...rest, ...graphql];
