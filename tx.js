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
    for (var contract in api.events) {
        if (!api.events.hasOwnProperty(contract)) continue;
        for (var method in api.events[contract]) {
            if (!api.events[contract].hasOwnProperty(method)) continue;
            api.events[contract][method].address = contracts[contract];
        }
    }

    return api;
};
