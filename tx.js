/**
 * Augur contract method info.
 */

"use strict";

var clone = require("clone");

module.exports = function (network, contracts) {

  contracts = contracts || require("./contracts")[network || "2"];
  var api = clone(require("./api"));

  for (var contract in api.functions) {
    if (!api.functions.hasOwnProperty(contract)) continue;
    for (var method in api.functions[contract]) {
      if (!api.functions[contract].hasOwnProperty(method)) continue;
      api.functions[contract][method].to = contracts[contract];
    }
  }
  for (var event in api.events) {
    if (!api.events.hasOwnProperty(event)) continue;
    api.events[event].address = contracts[api.events[event].contract];
  }

  return api;
};
