"use strict";

module.exports = {
  Augur: require("./Augur.abi"),
  LegacyRepContract: require("./LegacyRepContract.abi"),
  MarketCreation: require("./extensions/MarketCreation.abi"),
  MarketFeeCalculator: require("./extensions/MarketFeeCalculator.abi"),
  MarketFetcher: require("./extensions/MarketFetcher.abi"),
  OrderBook: require("./extensions/OrderBook.abi"),
  Register: require("./extensions/Register.abi"),
  Market: require("./reporting/Market.abi"),
  RegistrationToken: require("./reporting/RegistrationToken.abi"),
  RepEscapeHatch: require("./reporting/RepEscapeHatch.abi"),
  ReportingToken: require("./reporting/ReportingToken.abi"),
  ReportingWindow: require("./reporting/ReportingWindow.abi"),
  ReputationToken: require("./reporting/ReputationToken.abi"),
  CancelOrder: require("./trading/CancelOrder.abi"),
  ClaimProceeds: require("./trading/ClaimProceeds.abi"),
  CompleteSets: require("./trading/CompleteSets.abi"),
  CreateOrder: require("./trading/CreateOrder.abi"),
  FillOrder: require("./trading/FillOrder.abi"),
  Orders: require("./trading/Orders.abi"),
  OrdersFetcher: require("./trading/OrdersFetcher.abi"),
  ShareToken: require("./trading/ShareToken.abi"),
  Trade: require("./trading/Trade.abi"),
  TradingEscapeHatch: require("./trading/TradingEscapeHatch.abi"),
  Universe: require("./reporting/Universe.abi")
};
