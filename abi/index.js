"use strict";

var contracts = require("./Augur.abi");

module.exports = {
  Augur: contracts["Augur.sol"].Augur,
  MarketCreation: contracts["extensions/MarketCreation.sol"].MarketCreation,
  MarketFeeCalculator: contracts["extensions/MarketFeeCalculator.sol"].MarketFeeCalculator,
  MarketFetcher: contracts["extensions/MarketFetcher.sol"].MarketFetcher,
  OrderBook: contracts["extensions/OrderBook.sol"].OrderBook,
  Register: contracts["extensions/Register.sol"].Register,
  Market: contracts["reporting/Market.sol"].Market,
  RegistrationToken: contracts["reporting/RegistrationToken.sol"].RegistrationToken,
  RepEscapeHatch: contracts["reporting/RepEscapeHatch.sol"].RepEscapeHatch,
  ReportingToken: contracts["reporting/ReportingToken.sol"].ReportingToken,
  ReportingWindow: contracts["reporting/ReportingWindow.sol"].ReportingWindow,
  ReputationToken: contracts["reporting/ReputationToken.sol"].ReputationToken,
  CancelOrder: contracts["trading/CancelOrder.sol"].CancelOrder,
  ClaimProceeds: contracts["trading/ClaimProceeds.sol"].ClaimProceeds,
  CompleteSets: contracts["trading/CompleteSets.sol"].CompleteSets,
  CreateOrder: contracts["trading/CreateOrder.sol"].CreateOrder,
  FillOrder: contracts["trading/FillOrder.sol"].FillOrder,
  Orders: contracts["trading/Orders.sol"].Orders,
  OrdersFetcher: contracts["trading/OrdersFetcher.sol"].OrdersFetcher,
  ShareToken: contracts["trading/ShareToken.sol"].ShareToken,
  Trade: contracts["trading/Trade.sol"].Trade,
  TradingEscapeHatch: contracts["trading/TradingEscapeHatch.sol"].TradingEscapeHatch,
  Universe: contracts["reporting/Universe.sol"].Universe,
  LegacyRepContract: require("./LegacyRepContract.abi")
};
