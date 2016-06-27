/**
 * Augur contract method info.
 */

"use strict";

var methods = require("./methods");

module.exports = function (network, contracts) {

    contracts = contracts || require("./contracts")[network || "2"];

    for (var contract in methods) {
        if (!methods.hasOwnProperty(contract)) continue;
        for (var method in methods[contract]) {
            if (!methods[contract].hasOwnProperty(method)) continue;
            methods[contract][method].to = contracts[contract];
        }
    }

    return methods;
};
