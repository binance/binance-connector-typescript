import {
    OrderType,
    IsIsolatedMargin,
    Side,
    TransFrom,
    TransTo
} from '../../enum';

import {
    crossMarginAccountTransferOptions,
    crossMarginAccountTransferResponse,
    getCrossMarginTransferHistoryOptions,
    getCrossMarginTransferHistoryResponse,
    marginAccountBorrowOptions,
    marginAccountBorrowResponse,
    getLoanRecordOptions,
    getLoanRecordResponse,
    marginAccountRepayOptions,
    marginAccountRepayResponse,
    getRepayRecordOptions,
    getRepayRecordResponse,
    getMarginAssetResponse,
    getCrossMarginPairResponse,
    getAllMarginAssetsResponse,
    getAllCrossMarginPairsResponse,
    getMarginPriceIndexResponse,
    adjustCrossMarginMaxLeverageResponse,
    getMarginAccountOrderOptions,
    getMarginAccountOrderResponse,
    marginAccountNewOrderOptions,
    marginAccountNewOrderResponse,
    marginAccountCancelOrderOptions,
    marginAccountCancelOrderResponse,
    getInterestHistoryOptions,
    getInterestHistoryResponse,
    getForceLiquidationRecordOptions,
    getForceLiquidationRecordResponse,
    getCrossMarginAccountDetailsOptions,
    getCrossMarginAccountDetailsResponse,
    getMarginAccountOpenOrdersOptions,
    getMarginAccountOpenOrdersResponse,
    marginAccountCancelAllOpenOrdersOnASymbolOptions,
    marginAccountCancelAllOpenOrdersOnASymbolResponse,
    getMarginAccountAllOrdersOptions,
    getMarginAccountAllOrdersResponse,
    marginAccountNewOcoOptions,
    marginAccountNewOcoResponse,
    getMarginAccountOcoOptions,
    getMarginAccountOcoResponse,
    marginAccountCancelOcoOptions,
    marginAccountCancelOcoResponse,
    getMarginAccountAllOcoOptions,
    getMarginAccountAllOcoResponse,
    getMarginAccountOpenOcoOptions,
    getMarginAccountOpenOcoResponse,
    getMarginAccountTradeListOptions,
    getMarginAccountTradeListResponse,
    getMaxBorrowOptions,
    getMaxBorrowResponse,
    getMaxTransferoutAmountOptions,
    getMaxTransferoutAmountResponse,
    getSummaryOfMarginAccountOptions,
    getSummaryOfMarginAccountResponse,
    getIsolatedMarginTransferHistoryOptions,
    getIsolatedMarginTransferHistoryResponse,
    isolatedMarginAccountTransferOptions,
    isolatedMarginAccountTransferResponse,
    getIsolatedMarginAccountInfoOptions,
    getIsolatedMarginAccountInfoResponse,
    disableIsolatedMarginAccountOptions,
    disableIsolatedMarginAccountResponse,
    enableIsolatedMarginAccountOptions,
    enableIsolatedMarginAccountResponse,
    getEnabledIsolatedMarginAccountLimitOptions,
    getEnabledIsolatedMarginAccountLimitResponse,
    getIsolatedMarginSymbolOptions,
    getIsolatedMarginSymbolResponse,
    getAllIsolatedMarginSymbolOptions,
    getAllIsolatedMarginSymbolResponse,
    toggleBnbBurnOnSpotTradeAndMarginInterestOptions,
    toggleBnbBurnOnSpotTradeAndMarginInterestResponse,
    getBnbBurnStatusOptions,
    getBnbBurnStatusResponse,
    marginInterestRateHistoryOptions,
    marginInterestRateHistoryResponse,
    getCrossMarginFeeDataOptions,
    getCrossMarginFeeDataResponse,
    getIsolatedMarginFeeDataOptions,
    getIsolatedMarginFeeDataResponse,
    getIsolatedMarginTierDataOptions,
    getIsolatedMarginTierDataResponse,
    getCurrentMarginOrderCountUsageOptions,
    getCurrentMarginOrderCountUsageResponse,
    marginDustlogOptions,
    marginDustlogResponse,
    getAssetsThatCanBeConvertedIntoBNBOptions,
    getAssetsThatCanBeConvertedIntoBNBResponse,
    dustTransferOptions,
    dustTransferResponse,
    crossMarginCollateralRatioResponse,
    getSmallLiabilityExchangeCoinListOptions,
    getSmallLiabilityExchangeCoinListResponse,
    smallLiabilityExchangeOptions,
    smallLiabilityExchangeResponse,
    getSmallLiabilityExchangeHistoryOptions,
    getSmallLiabilityExchangeHistoryResponse,
    getFutureHoulyInterestRateResponse,
    getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginOptions,
    getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginResponse
} from './types';

export interface MarginMethods {
    crossMarginAccountTransfer(asset: string, amount: number, type: number, options?: crossMarginAccountTransferOptions): Promise<crossMarginAccountTransferResponse>;
    marginAccountBorrow(asset: string, amount: number, options?: marginAccountBorrowOptions): Promise<marginAccountBorrowResponse>;
    marginAccountRepay(asset: string, amount: number, options?: marginAccountRepayOptions): Promise<marginAccountRepayResponse>;
    getMarginAsset(asset: string): Promise<getMarginAssetResponse>;
    getCrossMarginPair(symbol: string): Promise<getCrossMarginPairResponse>;
    getAllMarginAssets(): Promise<getAllMarginAssetsResponse[]>;
    getAllCrossMarginPairs(): Promise<getAllCrossMarginPairsResponse[]>;
    getMarginPriceIndex(symbol: string): Promise<getMarginPriceIndexResponse>;
    marginAccountNewOrder(symbol: string, side: Side, type: OrderType, options?: marginAccountNewOrderOptions): Promise<marginAccountNewOrderResponse>;
    marginAccountCancelOrder(symbol: string, options?: marginAccountCancelOrderOptions): Promise<marginAccountCancelOrderResponse>;
    marginAccountCancelAllOpenOrdersOnASymbol(symbol: string, options?: marginAccountCancelAllOpenOrdersOnASymbolOptions): Promise<marginAccountCancelAllOpenOrdersOnASymbolResponse[]>;
    adjustCrossMarginMaxLeverage(maxLeverage: number): Promise<adjustCrossMarginMaxLeverageResponse>;
    getCrossMarginTransferHistory(options?: getCrossMarginTransferHistoryOptions): Promise<getCrossMarginTransferHistoryResponse>;
    getLoanRecord(asset: string, options?: getLoanRecordOptions): Promise<getLoanRecordResponse>;
    getRepayRecord(asset: string, options?: getRepayRecordOptions): Promise<getRepayRecordResponse>;
    getInterestHistory(options?: getInterestHistoryOptions): Promise<getInterestHistoryResponse>;
    getForceLiquidationRecord(options?: getForceLiquidationRecordOptions): Promise<getForceLiquidationRecordResponse>;
    getCrossMarginAccountDetails(options?: getCrossMarginAccountDetailsOptions): Promise<getCrossMarginAccountDetailsResponse>;
    getMarginAccountOrder(symbol: string, options?: getMarginAccountOrderOptions): Promise<getMarginAccountOrderResponse>;
    getMarginAccountOpenOrders(options?: getMarginAccountOpenOrdersOptions): Promise<getMarginAccountOpenOrdersResponse[]>;
    getMarginAccountAllOrders(symbol: string, options?: getMarginAccountAllOrdersOptions): Promise<getMarginAccountAllOrdersResponse[]>;
    marginAccountNewOco(symbol: string, side: Side, quantity: number, price: number, stopPrice: number, options?: marginAccountNewOcoOptions): Promise<marginAccountNewOcoResponse>;
    marginAccountCancelOco(symbol: string, options?: marginAccountCancelOcoOptions): Promise<marginAccountCancelOcoResponse>;
    getMarginAccountOco(options?: getMarginAccountOcoOptions): Promise<getMarginAccountOcoResponse>;
    getMarginAccountAllOco(options?: getMarginAccountAllOcoOptions): Promise<getMarginAccountAllOcoResponse[]>;
    getMarginAccountOpenOco(options?: getMarginAccountOpenOcoOptions): Promise<getMarginAccountOpenOcoResponse[]>;
    getMarginAccountTradeList(symbol: string, options?: getMarginAccountTradeListOptions): Promise<getMarginAccountTradeListResponse[]>;
    getMaxBorrow(asset: string, options?: getMaxBorrowOptions): Promise<getMaxBorrowResponse>;
    getMaxTransferoutAmount(asset: string, options?: getMaxTransferoutAmountOptions): Promise<getMaxTransferoutAmountResponse>;
    getSummaryOfMarginAccount(options?: getSummaryOfMarginAccountOptions): Promise<getSummaryOfMarginAccountResponse>;
    isolatedMarginAccountTransfer(asset: string, symbol: string, transFrom: TransFrom, transTo: TransTo, amount: number, options?: isolatedMarginAccountTransferOptions): Promise<isolatedMarginAccountTransferResponse>;
    getIsolatedMarginTransferHistory(symbol: string, options?: getIsolatedMarginTransferHistoryOptions): Promise<getIsolatedMarginTransferHistoryResponse>;
    getIsolatedMarginAccountInfo(options?: getIsolatedMarginAccountInfoOptions): Promise<getIsolatedMarginAccountInfoResponse>;
    disableIsolatedMarginAccount(symbol: string, options?: disableIsolatedMarginAccountOptions): Promise<disableIsolatedMarginAccountResponse>;
    enableIsolatedMarginAccount(symbol: string, options?: enableIsolatedMarginAccountOptions): Promise<enableIsolatedMarginAccountResponse>;
    getEnabledIsolatedMarginAccountLimit(options?: getEnabledIsolatedMarginAccountLimitOptions): Promise<getEnabledIsolatedMarginAccountLimitResponse>;
    getIsolatedMarginSymbol(symbol: string, options?: getIsolatedMarginSymbolOptions): Promise<getIsolatedMarginSymbolResponse>;
    getAllIsolatedMarginSymbol(options?: getAllIsolatedMarginSymbolOptions): Promise<getAllIsolatedMarginSymbolResponse[]>;
    toggleBnbBurnOnSpotTradeAndMarginInterest(options?: toggleBnbBurnOnSpotTradeAndMarginInterestOptions): Promise<toggleBnbBurnOnSpotTradeAndMarginInterestResponse>;
    getBnbBurnStatus(options?: getBnbBurnStatusOptions): Promise<getBnbBurnStatusResponse>;
    marginInterestRateHistory(asset: string, options?: marginInterestRateHistoryOptions): Promise<marginInterestRateHistoryResponse[]>;
    getCrossMarginFeeData(options?: getCrossMarginFeeDataOptions): Promise<getCrossMarginFeeDataResponse[]>;
    getIsolatedMarginFeeData(options?: getIsolatedMarginFeeDataOptions): Promise<getIsolatedMarginFeeDataResponse[]>;
    getIsolatedMarginTierData(symbol: string, options?: getIsolatedMarginTierDataOptions): Promise<getIsolatedMarginTierDataResponse[]>;
    getCurrentMarginOrderCountUsage(options?: getCurrentMarginOrderCountUsageOptions): Promise<getCurrentMarginOrderCountUsageResponse[]>;
    marginDustlog(options?: marginDustlogOptions): Promise<marginDustlogResponse>;
    getAssetsThatCanBeConvertedIntoBNB(options?: getAssetsThatCanBeConvertedIntoBNBOptions): Promise<getAssetsThatCanBeConvertedIntoBNBResponse[]>;
    dustTransfer(asset: string[], options?: dustTransferOptions): Promise<dustTransferResponse>;
    crossMarginCollateralRatio(): Promise<crossMarginCollateralRatioResponse>;
    getSmallLiabilityExchangeCoinList(options?: getSmallLiabilityExchangeCoinListOptions): Promise<getSmallLiabilityExchangeCoinListResponse[]>;
    smallLiabilityExchange(assetNames: string[], options?: smallLiabilityExchangeOptions): Promise<smallLiabilityExchangeResponse>;
    getSmallLiabilityExchangeHistory(current: number, size: number, options?: getSmallLiabilityExchangeHistoryOptions): Promise<getSmallLiabilityExchangeHistoryResponse>;
    getFutureHoulyInterestRate(assets: string, isIsolated: IsIsolatedMargin): Promise<getFutureHoulyInterestRateResponse>;
    getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMargin(options?: getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginOptions): Promise<getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginResponse[]>;
}