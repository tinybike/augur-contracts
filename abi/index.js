"use strict";

var contracts = require("./Contracts.abi").contracts;

Object.keys(contracts).forEach(function(path) {
  var contractName = path.replace(/(\w+\/)?(\w+)\.sol/, "$2");
  module.exports[contractName] = contracts[path][contractName].abi;
});

