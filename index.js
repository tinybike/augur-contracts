var contracts = require("./contracts");
contracts.api = {
  events: require("./events"),
  functions: require("./functions")
};
contracts.Tx = require("./setup-api");

module.exports = contracts;
