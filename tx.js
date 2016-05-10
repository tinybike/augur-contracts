/**
 * Augur transactions
 */

"use strict";

module.exports = function (network) {

    var contracts = require("./contracts")[network || "2"];

    return {

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
        getReportPeriod: {
            to: contracts.branches,
            method: "getVotePeriod",
            signature: "i",
            returns: "number"
        },
        getNumMarkets: {
            to: contracts.branches,
            method: "getNumMarketsBranch",
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
        // def getFeesCollected(branch, address, period):
        getFeesCollected: {
            to: contracts.consensus,
            method: "getFeesCollected",
            signature: "iii",
            returns: "number"
        },
        // def setFeesCollected(branch, address, period):
        setFeesCollected: {
            to: contracts.consensus,
            method: "setFeesCollected",
            signature: "iii",
            returns: "number",
            send: true
        },
        // def setNotEnoughPenalized(branch, address, period):
        setNotEnoughPenalized: {
            to: contracts.consensus,
            method: "setNotEnoughPenalized",
            signature: "iii",
            returns: "number",
            send: true
        },            
        // def getNotEnoughPenalized(branch, address, period):
        getNotEnoughPenalized: {
            to: contracts.consensus,
            method: "getNotEnoughPenalized",
            signature: "iii",
            returns: "number"
        },
        // def getBaseReportersLastPeriod(branch):
        getBaseReportersLastPeriod: {
            to: contracts.consensus,
            method: "getBaseReportersLastPeriod",
            signature: "i",
            returns: "number"
        },
        // def initialPenalizedSetting(branch, reporter, upto):
        initialPenalizedSetting: {
            to: contracts.consensus,
            method: "initialPenalizedSetting",
            signature: "iii",
            returns: "number",
            send: true
        },
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
        penalizationCatchup: {
            to: contracts.consensus,
            method: "penalizationCatchup",
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

        // penalizeNotEnoughReports.se
        penalizeNotEnoughReports: {
            to: contracts.penalizeNotEnoughReports,
            method: "penalizeNotEnoughReports",
            signature: "i",
            returns: "number",
            send: true
        },

        // collectFees.se
        collectFees: {
            to: contracts.collectFees,
            method: "collectFees",
            signature: "i",
            returns: "number",
            send: true
        },

        // slashRep.se
        // def slashRep(branch, salt, report, reporter, eventID):
        slashRep: {
            to: contracts.slashRep,
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
        getReportedPeriod: {
            to: contracts.expiringEvents,
            method: "getReportedPeriod",
            signature: "iii",
            returns: "number"
        },
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
        getCreationBlock: {
            to: contracts.markets,
            method: "getCreationBlock",
            signature: "i",
            returns: "number"
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
        // def checkWhitelist(address):
        checkWhitelist: {
            to: contracts.reporting,
            method: "checkWhitelist",
            signature: "i"
        },
        // def getActiveRep(branch):
        getActiveRep: {
            to: contracts.reporting,
            method: "getActiveRep",
            signature: "i",
            returns: "unfix"
        },
        // def adjustActiveRep(branch, amount):
        adjustActiveRep: {
            to: contracts.reporting,
            method: "adjustActiveRep",
            signature: "ii",
            returns: "number",
            send: true
        },
        // def setFork(branch):
        setFork: {
            to: contracts.reporting,
            method: "setFork",
            signature: "i",
            returns: "number",
            send: true
        },
        // def getFork(branch):
        getFork: {
            to: contracts.reporting,
            method: "getFork",
            signature: "i",
            returns: "number"
        },
        // def checkContractWhitelist(contract, address):
        checkContractWhitelist: {
            to: contracts.reporting,
            method: "checkContractWhitelist",
            signature: "ii"
        },
        // def setWhitelist(contract, addresses:arr):
        setWhitelist: {
            to: contracts.reporting,
            method: "setWhitelist",
            signature: "ia",
            returns: "string",
            send: true
        },
        // def getRepByIndex(branch, repIndex):
        getRepByIndex: {
            to: contracts.reporting,
            method: "getRepByIndex",
            signature: "ii",
            returns: "unfix"
        },
        // def getRepBalance(branch, address):
        getRepBalance: {
            to: contracts.reporting,
            method: "getRepBalance",
            signature: "ii",
            returns: "unfix"
        },
        // def getDormantRepByIndex(branch, repIndex):
        getDormantRepByIndex: {
            to: contracts.reporting,
            method: "getDormantRepByIndex",
            signature: "ii",
            returns: "unfix"
        },
        // def balanceOf(branch, address):
        balanceOf: {
            to: contracts.reporting,
            method: "balanceOf",
            signature: "ii",
            returns: "unfix"
        },
        // def totalSupply(branch):
        totalSupply: {
            to: contracts.reporting,
            method: "totalSupply",
            signature: "i",
            returns: "unfix"
        },
        // def getReporterID(branch, index):
        getReporterID: {
            to: contracts.reporting,
            method: "getReporterID",
            signature: "ii",
            returns: "address"
        },
        // def getTotalRep(branch):
        getTotalRep: {
            to: contracts.reporting,
            method: "getTotalRep",
            signature: "i",
            returns: "unfix"
        },
        // def getReputation(address):
        getReputation: {
            to: contracts.reporting,
            method: "getReputation",
            signature: "i",
            returns: "hash[]"
        },
        // def getNumberReporters(branch):
        getNumberReporters: {
            to: contracts.reporting,
            method: "getNumberReporters",
            signature: "i",
            returns: "number"
        },
        // def repIDToIndex(branch, repID):
        repIDToIndex: {
            to: contracts.reporting,
            method: "repIDToIndex",
            signature: "ii",
            returns: "number"
        },
        // def hashReport(report: arr, salt):
        hashReport: {
            to: contracts.reporting,
            method: "hashReport",
            signature: "ai"
        },
        // def setInitialReporters(parent, branchID):
        setInitialReporters: {
            to: contracts.reporting,
            method: "setInitialReporters",
            signature: "ii",
            returns: "number",
            send: true
        },
        // def addReporter(branch, sender):
        addReporter: {
            to: contracts.reporting,
            method: "addReporter",
            signature: "ii",
            returns: "number",
            send: true
        },
        // def addRep(branch, index, value):
        addRep: {
            to: contracts.reporting,
            method: "addRep",
            signature: "iii",
            returns: "number",
            send: true
        },
        // def subtractRep(branch, index, value):
        subtractRep: {
            to: contracts.reporting,
            method: "subtractRep",
            signature: "iii",
            returns: "number",
            send: true
        },
        // def setRep(branch, index, newRep):
        setRep: {
            to: contracts.reporting,
            method: "setRep",
            signature: "iii",
            returns: "number",
            send: true
        },
        // def addDormantRep(branch, index, value):
        addDormantRep: {
            to: contracts.reporting,
            method: "addDormantRep",
            signature: "iii",
            returns: "number",
            send: true
        },
        // def subtractDormantRep(branch, index, value):
        subtractDormantRep: {
            to: contracts.reporting,
            method: "subtractDormantRep",
            signature: "iii",
            returns: "number",
            send: true
        },
        // def setSaleDistribution(addresses: arr, balances: arr, branchID):
        setSaleDistribution: {
            to: contracts.reporting,
            method: "setSaleDistribution",
            signature: "aai",
            returns: "number",
            send: true
        },

        // trades.se
        makeTradeHash: {
            to: contracts.trades,
            method: "makeTradeHash",
            signature: "iia",
            returns: "hash"
        },
        commitTrade: {
            to: contracts.trades,
            method: "commitTrade",
            signature: "i",
            returns: "number",
            send: true
        },
        setInitialTrade: {
            to: contracts.trades,
            method: "setInitialTrade",
            signature: "i",
            returns: "number",
            send: true
        },  
        getInitialTrade: {
            to: contracts.trades,
            method: "getInitialTrade",
            signature: "i",
            returns: "hash"
        },            
        zeroHash: {
            to: contracts.trades,
            method: "zeroHash",
            returns: "number",
            send: true
        },
        checkHash: {
            to: contracts.trades,
            method: "checkHash",
            signature: "i",
            returns: "number"
        },
        getID: {
            to: contracts.trades,
            method: "getID",
            signature: "i",
            returns: "hash"
        },            
        saveTrade: {
            to: contracts.trades,
            method: "saveTrade",
            signature: "iiiiiii",
            returns: "number",
            send: true
        },
        get_trade: {
            to: contracts.trades,
            method: "get_trade",
            signature: "i",
            returns: "hash[]"
        },
        get_amount: {
            to: contracts.trades,
            method: "get_amount",
            signature: "i",
            returns: "unfix"
        },
        get_price: {
            to: contracts.trades,
            method: "get_price",
            signature: "i",
            returns: "unfix"
        },
        update_trade: {
            to: contracts.trades,
            method: "update_trade",
            signature: "ii",
            send: true
        },
        remove_trade: {
            to: contracts.trades,
            method: "remove_trade",
            signature: "i",
            returns: "number",
            send: true
        },
        fill_trade: {
            to: contracts.trades,
            method: "fill_trade",
            signature: "ii",
            returns: "number",
            send: true
        },

        // buy&sellShares.se
        cancel: {
            to: contracts.buyAndSellShares,
            method: "cancel",
            signature: "i",
            returns: "number",
            send: true
        },
        buy: {
            to: contracts.buyAndSellShares,
            method: "buy",
            signature: "iiii",
            returns: "number",
            send: true
        },
        sell: {
            to: contracts.buyAndSellShares,
            method: "sell",
            signature: "iiii",
            returns: "number",
            send: true
        },
        short_sell: {
            to: contracts.buyAndSellShares,
            method: "short_sell",
            signature: "ii",
            returns: "number",
            send: true
        },
        trade: {
            to: contracts.buyAndSellShares,
            method: "trade",
            signature: "iia",
            returns: "number",
            send: true
        },

        // completeSets.se
        buyCompleteSets: {
            to: contracts.completeSets,
            method: "buyCompleteSets",
            signature: "ii",
            returns: "number",
            send: true
        },
        sellCompleteSets: {
            to: contracts.completeSets,
            method: "sellCompleteSets",
            signature: "ii",
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

        // createMarket.se
        createEvent: {
            to: contracts.createMarket,
            method: "createEvent",
            signature: "isiiiis",
            send: true
        },
        createMarket: {
            to: contracts.createMarket,
            method: "createMarket",
            signature: "isiaiiiis",
            send: true
        },
        createSingleEventMarket: {
            to: contracts.createMarket,
            method: "createSingleEventMarket",
            signature: "isiiiisiiiiis",
            returns: "hash",
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

        // roundTwo.se
        // def roundTwoPostBond(branch, event, eventIndex, votePeriod):
        roundTwoPostBond: {
            to: contracts.roundTwo,
            method: "roundTwoPostBond",
            signature: "iiii",
            returns: "number",
            send: true
        },
        // def roundTwoResolve(branch, event, eventIndex, votePeriod):
        roundTwoResolve: {
            to: contracts.roundTwo,
            method: "roundTwoResolve",
            signature: "iiii",
            returns: "number",
            send: true
        },
        // def resolve(branch, event, sender):
        resolve: {
            to: contracts.roundTwo,
            method: "resolve",
            signature: "iii",
            returns: "number",
            send: true
        },

        // backstops.se
        // def getRoundTwo(event):
        getRoundTwo: {
            to: contracts.backstops,
            method: "getRoundTwo",
            signature: "i"
        },
        // def setRoundTwo(event, roundTwo):
        setRoundTwo: {
            to: contracts.backstops,
            method: "setRoundTwo",
            signature: "ii",
            returns: "number",
            send: true
        },
        // def getBondPoster(event):
        getBondPoster: {
            to: contracts.backstops,
            method: "getBondPoster",
            signature: "i",
            returns: "address"
        },  
        // def setBondPoster(event, bondPoster):
        setBondPoster: {
            to: contracts.backstops,
            method: "setBondPoster",
            signature: "ii",
            returns: "number",
            send: true
        },
        // def getFinal(event):
        getFinal: {
            to: contracts.backstops,
            method: "getFinal",
            signature: "i"
        },
        // def setFinal(event):
        setFinal: {
            to: contracts.backstops,
            method: "setFinal",
            signature: "i",
            returns: "number",
            send: true
        },
        // def getOriginalOutcome(event):
        getOriginalOutcome: {
            to: contracts.backstops,
            method: "getOriginalOutcome",
            signature: "i"
        },
        // def setOriginalOutcome(event, originalOutcome):
        setOriginalOutcome: {
            to: contracts.backstops,
            method: "setOriginalOutcome",
            signature: "ii",
            returns: "number",
            send: true
        },
        // def getOriginalEthicality(event):
        getOriginalEthicality: {
            to: contracts.backstops,
            method: "getOriginalEthicality",
            signature: "i"
        },
        // def setOriginalEthicality(event, ethicality):
        setOriginalEthicality: {
            to: contracts.backstops,
            method: "setOriginalEthicality",
            signature: "ii",
            returns: "number",
            send: true
        },
        // def getOriginalVotePeriod(event):
        getOriginalVotePeriod: {
            to: contracts.backstops,
            method: "getOriginalVotePeriod",
            signature: "i",
            returns: "number"
        },
        // def setOriginalVotePeriod(event, period):
        setOriginalVotePeriod: {
            to: contracts.backstops,
            method: "setOriginalVotePeriod",
            signature: "ii",
            returns: "number",
            send: true
        }

    };

};
