/**
 * Augur transactions
 */

"use strict";

module.exports = function (network) {

    var contracts = require("./contracts")[network];

    return {

        // metadata.se
        setMetadata: {
            to: contracts.metadata,
            method: "setMetadata",
            signature: "iiiiss",
            returns: "number",
            send: true
        },
        getMetadata: {
            to: contracts.metadata,
            method: "getMetadata",
            signature: "i",
            returns: "hash[]"
        },

        // faucets.se
        reputationFaucet: {
            to: contracts.faucets,
            method: "reputationFaucet",
            signature: "i",
            returns: "number",
            send: true
        },
        cashFaucet: {
            to: contracts.faucets,
            method: "cashFaucet",
            returns: "number",
            send: true
        },
        fundNewAccount: {
            to: contracts.faucets,
            method: "fundNewAccount",
            signature: "i",
            returns: "number",
            send: true
        },

        // createSingleEventMarket.se
        createSingleEventMarket: {
            to: contracts.createSingleEventMarket,
            method: "createSingleEventMarket",
            signature: "isiiiiiiii",
            returns: "hash",
            send: true
        },

        // cash.se
        addCash: {
            to: contracts.cash,
            method: "addCash",
            signature: "ii",
            send: true,
            returns: "number"
        },
        setCash: {
            to: contracts.cash,
            method: "setCash",
            signature: "ii",
            send: true,
            returns: "number"
        },
        initiateOwner: {
            to: contracts.cash,
            method: "initiateOwner",
            signature: "i",
            send: true,
            returns: "number"
        },
        getCashBalance: {
            to: contracts.cash,
            method: "balance",
            signature: "i",
            returns: "unfix"
        },
        balance: {
            to: contracts.cash,
            method: "balance",
            signature: "i",
            returns: "unfix"
        },
        sendCash: {
            to: contracts.cash,
            method: "send",
            send: true,
            signature: "ii",
            returns: "unfix"
        },
        sendCashFrom: {
            to: contracts.cash,
            method: "sendFrom",
            send: true,
            signature: "iii",
            returns: "unfix"
        },
        depositEther: {
            to: contracts.cash,
            method: "depositEther",
            send: true,
            returns: "number"
        },
        withdrawEther: {
            to: contracts.cash,
            method: "withdrawEther",
            signature: "ii",
            send: true,
            returns: "number"
        },

        // info.se
        getCreator: {
            to: contracts.info,
            method: "getCreator",
            signature: "i",
            returns: "address"
        },
        getCreationFee: {
            to: contracts.info,
            method: "getCreationFee",
            signature: "i",
            returns: "unfix"
        },
        getDescription: {
            to: contracts.info,
            method: "getDescription",
            signature: "i",
            returns: "string"
        },
        setInfo: {
            to: contracts.info,
            method: "setInfo",
            signature: "isii",
            returns: "number",
            send: true
        },

        // branches.se
        initDefaultBranch: {
            to: contracts.branches,
            method: "initDefaultBranch",
            returns: "number",
            send: true
        },
        getBranches: {
            to: contracts.branches,
            method: "getBranches",
            returns: "hash[]"
        },
        getMarketsInBranch: {
            to: contracts.branches,
            method: "getMarketsInBranch",
            signature: "i",
            returns: "hash[]"
        },
        getPeriodLength: {
            to: contracts.branches,
            method: "getPeriodLength",
            signature: "i",
            returns: "number"
        },
        getVotePeriod: {
            to: contracts.branches,
            method: "getVotePeriod",
            signature: "i",
            returns: "number"
        },
        getNumMarketsBranch: {
            to: contracts.branches,
            method: "getNumMarketsBranch",
            signature: "i",
            returns: "number"
        },
        getMinTradingFee: {
            to: contracts.branches,
            method: "getMinTradingFee",
            signature: "i",
            returns: "unfix"
        },
        getNumBranches: {
            to: contracts.branches,
            method: "getNumBranches",
            returns: "number"
        },
        getBranch: {
            to: contracts.branches,
            method: "getBranch",
            signature: "i",
            returns: "hash"
        },
        incrementPeriod: {
            to: contracts.branches,
            method: "incrementPeriod",
            signature: "i",
            send: true,
            returns: "number"
        },
        addMarket: {
            to: contracts.branches,
            method: "addMarket",
            signature: "ii",
            returns: "number",
            send: true
        },

        // consensus.se
        proportionCorrect: {
            to: contracts.consensus,
            method: "proportionCorrect",
            signature: "iii",
            returns: "unfix"
        },
        incrementPeriodAfterReporting: {
            to: contracts.consensus,
            method: "incrementPeriodAfterReporting",
            signature: "i",
            returns: "number",
            send: true
        },
        penalizeNotEnoughReports: {
            to: contracts.consensus,
            method: "penalizeNotEnoughReports",
            signature: "i",
            returns: "number",
            send: true
        },
        collectFees: {
            to: contracts.consensus,
            method: "collectFees",
            signature: "i",
            returns: "number",
            send: true
        },
        penalizeWrong: {
            to: contracts.consensus,
            method: "penalizeWrong",
            signature: "ii",
            returns: "number",
            send: true
        },
        penalizationCatchup: {
            to: contracts.consensus,
            method: "penalizationCatchup",
            signature: "i",
            returns: "number",
            send: true
        },
        slashRep: {
            to: contracts.consensus,
            method: "slashRep",
            signature: "iiiii",
            returns: "number",
            send: true
        },

        // events.se
        getmode: {
            to: contracts.events,
            method: "getmode",
            signature: "i",
            returns: "unfix"
        },
        getUncaughtOutcome: {
            to: contracts.events,
            method: "getUncaughtOutcome",
            signature: "i",
            returns: "unfix"
        },
        getMarkets: {
            to: contracts.events,
            method: "getMarkets",
            signature: "i",
            returns: "hash[]"
        },
        getReportingThreshold: {
            to: contracts.events,
            method: "getReportingThreshold",
            signature: "i",
            returns: "unfix"
        },
        getEventInfo: {
            to: contracts.events,
            method: "getEventInfo",
            signature: "i",
            returns: "hash[]"
        },
        getEventBranch: {
            to: contracts.events,
            method: "getEventBranch",
            signature: "i",
            returns: "hash"
        },
        getExpiration: {
            to: contracts.events,
            method: "getExpiration",
            signature: "i",
            returns: "number"
        },
        getOutcome: {
            to: contracts.events,
            method: "getOutcome",
            signature: "i",
            returns: "unfix"
        },
        getMinValue: {
            to: contracts.events,
            method: "getMinValue",
            signature: "i",
            returns: "number"
        },
        getMaxValue: {
            to: contracts.events,
            method: "getMaxValue",
            signature: "i",
            returns: "number"
        },
        getNumOutcomes: {
            to: contracts.events,
            method: "getNumOutcomes",
            signature: "i",
            returns: "number"
        },
        setOutcome: {
            to: contracts.events,
            method: "setOutcome",
            signature: "ii",
            returns: "number",
            send: true
        },

        // expiringEvents.se
        getEventIndex: {
            to: contracts.expiringEvents,
            method: "getEventIndex",
            signature: "ii",
            returns: "number"
        },
        getEvents: {
            to: contracts.expiringEvents,
            method: "getEvents",
            signature: "ii",
            returns: "hash[]"
        },
        getNumberEvents: {
            to: contracts.expiringEvents,
            method: "getNumberEvents",
            signature: "ii",
            returns: "number"
        },
        getEvent: {
            to: contracts.expiringEvents,
            method: "getEvent",
            signature: "iii",
            returns: "hash"
        },
        getTotalRepReported: {
            to: contracts.expiringEvents,
            method: "getTotalRepReported",
            signature: "ii",
            returns: "number"
        },
        getReportHash: {
            to: contracts.expiringEvents,
            method: "getReportHash",
            signature: "iiii",
            returns: "hash"
        },
        moveEventsToCurrentPeriod: {
            to: contracts.expiringEvents,
            method: "moveEventsToCurrentPeriod",
            signature: "iii",
            send: true
        },
        addEvent: {
            to: contracts.expiringEvents,
            method: "addEvent",
            signature: "iii",
            send: true
        },
        setTotalRepReported: {
            to: contracts.expiringEvents,
            method: "setTotalRepReported",
            signature: "iii",
            send: true
        },
        setReporterBallot: {
            to: contracts.expiringEvents,
            method: "setReporterBallot",
            signature: "iiiai",
            send: true,
            returns: "number"
        },
        getTotalReputation: {
            to: contracts.expiringEvents,
            method: "getTotalReputation",
            signature: "ii",
            returns: "unfix"
        },
        setTotalReputation: {
            to: contracts.expiringEvents,
            method: "setTotalReputation",
            signature: "iii",
            returns: "number"
        },

        // markets.se
        price: {
            to: contracts.markets,
            method: "price",
            signature: "ii",
            returns: "unfix"
        },
        lsLmsr: {
            to: contracts.markets,
            method: "lsLmsr",
            signature: "i",
            returns: "unfix"
        },
        getMarketInfo: {
            to: contracts.markets,
            method: "getMarketInfo",
            signature: "i",
            returns: "hash[]",
            gas: "0x9184e729fff"
        },
        getMarketsInfo: {
            to: contracts.markets,
            method: "getMarketsInfo",
            signature: "iii",
            returns: "hash[]",
            gas: "0x9184e729fff"
        },
        getMarketEvents: {
            to: contracts.markets,
            method: "getMarketEvents",
            signature: "i",
            returns: "hash[]"
        },
        getNumEvents: {
            to: contracts.markets,
            method: "getNumEvents",
            signature: "i",
            returns: "number"
        },
        getBranchID: {
            to: contracts.markets,
            method: "getBranchID",
            signature: "i",
            returns: "hash"
        },
        getCurrentParticipantNumber: {
            to: contracts.markets,
            method: "getCurrentParticipantNumber",
            signature: "i",
            returns: "number"
        },
        getMarketNumOutcomes: {
            to: contracts.markets,
            method: "getMarketNumOutcomes",
            signature: "i",
            returns: "number"
        },
        getParticipantSharesPurchased: {
            to: contracts.markets,
            method: "getParticipantSharesPurchased",
            signature: "iii",
            returns: "unfix"
        },
        getSharesPurchased: {
            to: contracts.markets,
            method: "getSharesPurchased",
            signature: "ii",
            returns: "unfix"
        },
        getForkSelection: {
            to: contracts.markets,
            method: "getForkSelection",
            signature: "i",
            returns: "hash"
        },
        getVolume: {
            to: contracts.markets,
            method: "getVolume",
            signature: "i",
            returns: "unfix"
        },
        getWinningOutcomes: {
            to: contracts.markets,
            method: "getWinningOutcomes",
            signature: "i",
            returns: "number[]"
        },
        getParticipantNumber: {
            to: contracts.markets,
            method: "getParticipantNumber",
            signature: "ii",
            returns: "number"
        },
        getParticipantID: {
            to: contracts.markets,
            method: "getParticipantID",
            signature: "ii",
            returns: "address"
        },
        getAlpha: {
            to: contracts.markets,
            method: "getAlpha",
            signature: "i",
            returns: "unfix"
        },
        getCumScale: {
            to: contracts.markets,
            method: "getCumScale",
            signature: "i",
            returns: "unfix"
        },
        getTradingPeriod: {
            to: contracts.markets,
            method: "getTradingPeriod",
            signature: "i",
            returns: "number"
        },
        getTradingFee: {
            to: contracts.markets,
            method: "getTradingFee",
            signature: "i",
            returns: "unfix"
        },
        initialLiquidityAmount: {
            to: contracts.markets,
            method: "initialLiquidityAmount",
            signature: "ii",
            returns: "unfix"
        },
        initialLiquiditySetup: {
            to: contracts.markets,
            method: "initialLiquiditySetup",
            signature: "iiii",
            returns: "number",
            send: true
        },
        modifyShares: {
            to: contracts.markets,
            method: "modifyShares",
            signature: "iii",
            returns: "number",
            send: true
        },
        initializeMarket: {
            to: contracts.markets,
            method: "initializeMarket",
            signature: "iaiii",
            returns: "number",
            send: true
        },

        // reporting.se
        getRepBalance: {
            to: contracts.reporting,
            method: "getRepBalance",
            signature: "ii",
            returns: "unfix"
        },
        getRepByIndex: {
            to: contracts.reporting,
            method: "getRepByIndex",
            signature: "ii",
            returns: "unfix"
        },
        getReporterID: {
            to: contracts.reporting,
            method: "getReporterID",
            signature: "ii",
            returns: "address"
        },
        getReputation: {
            to: contracts.reporting,
            method: "getReputation",
            signature: "i",
            returns: "number[]"
        },
        getNumberReporters: {
            to: contracts.reporting,
            method: "getNumberReporters",
            signature: "i",
            returns: "number"
        },
        repIDToIndex: {
            to: contracts.reporting,
            method: "repIDToIndex",
            signature: "ii",
            returns: "number"
        },
        getTotalRep: {
            to: contracts.reporting,
            method: "getTotalRep",
            signature: "i",
            returns: "unfix"
        },

        // buy&sellShares.se
        commitTrade: {
            to: contracts.buyAndSellShares,
            method: "commitTrade",
            signature: "ii",
            returns: "number",
            send: true
        },
        buyShares: {
            to: contracts.buyAndSellShares,
            method: "buyShares",
            signature: "iiiii",
            returns: "number",
            send: true
        },
        sellShares: {
            to: contracts.buyAndSellShares,
            method: "sellShares",
            signature: "iiiii",
            returns: "number",
            send: true
        },

        // createBranch.se
        createSubbranch: {
            to: contracts.createBranch,
            method: "createSubbranch",
            signature: "siiii",
            returns: "hash",
            send: true
        },

        // sendReputation.se
        sendReputation: {
            to: contracts.sendReputation,
            method: "sendReputation",
            signature: "iii",
            send: true,
            returns: "unfix"
        },

        // makeReports.se
        getNumEventsToReport: {
            to: contracts.makeReports,
            method: "getNumEventsToReport",
            signature: "ii",
            returns: "number"
        },
        getReportedPeriod: {
            to: contracts.makeReports,
            method: "getReportedPeriod",
            signature: "iii",
            returns: "number"
        },
        getReportable: {
            to: contracts.makeReports,
            method: "getReportable",
            signature: "ii",
            returns: "number"
        },
        getNumReportsActual: {
            to: contracts.makeReports,
            method: "getNumReportsActual",
            signature: "ii",
            returns: "number"
        },
        getSubmittedHash: {
            to: contracts.makeReports,
            method: "getSubmittedHash",
            signature: "iii",
            returns: "hash"
        },
        getBeforeRep: {
            to: contracts.makeReports,
            method: "getBeforeRep",
            signature: "ii",
            returns: "unfix"
        },
        getAfterRep: {
            to: contracts.makeReports,
            method: "getAfterRep",
            signature: "ii",
            returns: "unfix"
        },
        getReport: {
            to: contracts.makeReports,
            method: "getReport",
            signature: "iii",
            returns: "unfix"
        },
        getRRUpToDate: {
            to: contracts.makeReports,
            method: "getRRUpToDate",
            returns: "number"
        },
        getNumReportsExpectedEvent: {
            to: contracts.makeReports,
            method: "getNumReportsExpectedEvent",
            signature: "iii",
            returns: "hash"
        },
        getNumReportsEvent: {
            to: contracts.makeReports,
            method: "getNumReportsEvent",
            signature: "iii",
            returns: "hash"
        },
        makeHash: {
            to: contracts.makeReports,
            method: "makeHash",
            signature: "iii",
            returns: "hash"
        },
        calculateReportingThreshold: {
            to: contracts.makeReports,
            method: "calculateReportingThreshold",
            signature: "iii",
            returns: "hash"
        },
        submitReportHash: {
            to: contracts.makeReports,
            method: "submitReportHash",
            signature: "iiiii",
            returns: "number",
            send: true
        },
        submitReport: {
            to: contracts.makeReports,
            method: "submitReport",
            signature: "iiiiiii",
            returns: "number",
            send: true
        },
        checkReportValidity: {
            to: contracts.makeReports,
            method: "checkReportValidity",
            signature: "iii",
            returns: "number"
        },

        // createEvent.se
        createEvent: {
            to: contracts.createEvent,
            method: "createEvent",
            signature: "isiiii",
            send: true
        },

        // createMarket.se
        createMarket: {
            to: contracts.createMarket,
            method: "createMarket",
            signature: "isiiiai",
            send: true
        },

        // closeMarket.se
        closeMarket: {
            to: contracts.closeMarket,
            method: "closeMarket",
            signature: "ii",
            returns: "number",
            send: true
        },
        claimProceeds: {
            to: contracts.closeMarket,
            method: "claimProceeds",
            signature: "ii",
            returns: "number",
            send: true
        },

        // dispatch.se
        dispatch: {
            to: contracts.dispatch,
            method: "dispatch",
            signature: "i",
            returns: "number"
        }
    };

};
