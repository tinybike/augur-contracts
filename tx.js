/**
 * Augur contract method info.
 */

"use strict";

var clone = require("clone");

module.exports = function (network, contracts) {

    contracts = contracts || require("./contracts")[network || "2"];
    var api = clone(require("./api"));

    for (var contract in api) {
        if (!api.hasOwnProperty(contract)) continue;
        for (var method in api[contract]) {
            if (!api[contract].hasOwnProperty(method)) continue;
            api[contract][method].to = contracts[contract];
        }
    }

    return api;
};
