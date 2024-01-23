import {
    OrderType,
    IsIsolatedMargin,
    MarginBorrowRepayType,
    Side,
} from '../../enum';

import {
    getCrossMarginTransferHistoryOptions,
    getCrossMarginTransferHistoryResponse,
    getAllMarginAssetsOptions,
    getAllMarginAssetsResponse,
    getAllCrossMarginPairsOptions,
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
    getIsolatedMarginAccountInfoOptions,
    getIsolatedMarginAccountInfoResponse,
    disableIsolatedMarginAccountOptions,
    disableIsolatedMarginAccountResponse,
    enableIsolatedMarginAccountOptions,
    enableIsolatedMarginAccountResponse,
    getEnabledIsolatedMarginAccountLimitOptions,
    getEnabledIsolatedMarginAccountLimitResponse,
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
    crossMarginCollateralRatioResponse,
    getSmallLiabilityExchangeCoinListOptions,
    getSmallLiabilityExchangeCoinListResponse,
    smallLiabilityExchangeOptions,
    smallLiabilityExchangeResponse,
    getSmallLiabilityExchangeHistoryOptions,
    getSmallLiabilityExchangeHistoryResponse,
    getFutureHoulyInterestRateResponse,
    getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginOptions,
    getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginResponse,
    getMarginAvailableInventoryOptions,
    getMarginAvailableInventoryResponse,
    marginManualLiquidationOptions,
    marginManualLiquidationResponse,
    getLeverageBracketResponse,
    marginAccountBorrowRepayOptions,
    marginAccountBorrowRepayResponse,
    getBorrowRepayRecordsOptions,
    getBorrowRepayRecordsResponse
} from './types';

export interface MarginMethods {
    getAllMarginAssets(options?: getAllMarginAssetsOptions): Promise<getAllMarginAssetsResponse[]>
    getAllCrossMarginPairs(options?: getAllCrossMarginPairsOptions): Promise<getAllCrossMarginPairsResponse[]>;
    getMarginPriceIndex(symbol: string): Promise<getMarginPriceIndexResponse>;
    marginAccountNewOrder(symbol: string, side: Side, type: OrderType, options?: marginAccountNewOrderOptions): Promise<marginAccountNewOrderResponse>;
    marginAccountCancelOrder(symbol: string, options?: marginAccountCancelOrderOptions): Promise<marginAccountCancelOrderResponse>;
    marginAccountCancelAllOpenOrdersOnASymbol(symbol: string, options?: marginAccountCancelAllOpenOrdersOnASymbolOptions): Promise<marginAccountCancelAllOpenOrdersOnASymbolResponse[]>;
    adjustCrossMarginMaxLeverage(maxLeverage: number): Promise<adjustCrossMarginMaxLeverageResponse>;
    getCrossMarginTransferHistory(options?: getCrossMarginTransferHistoryOptions): Promise<getCrossMarginTransferHistoryResponse>;
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
    getIsolatedMarginAccountInfo(options?: getIsolatedMarginAccountInfoOptions): Promise<getIsolatedMarginAccountInfoResponse>;
    disableIsolatedMarginAccount(symbol: string, options?: disableIsolatedMarginAccountOptions): Promise<disableIsolatedMarginAccountResponse>;
    enableIsolatedMarginAccount(symbol: string, options?: enableIsolatedMarginAccountOptions): Promise<enableIsolatedMarginAccountResponse>;
    getEnabledIsolatedMarginAccountLimit(options?: getEnabledIsolatedMarginAccountLimitOptions): Promise<getEnabledIsolatedMarginAccountLimitResponse>;
    getAllIsolatedMarginSymbol(options?: getAllIsolatedMarginSymbolOptions): Promise<getAllIsolatedMarginSymbolResponse[]>;
    toggleBnbBurnOnSpotTradeAndMarginInterest(options?: toggleBnbBurnOnSpotTradeAndMarginInterestOptions): Promise<toggleBnbBurnOnSpotTradeAndMarginInterestResponse>;
    getBnbBurnStatus(options?: getBnbBurnStatusOptions): Promise<getBnbBurnStatusResponse>;
    marginInterestRateHistory(asset: string, options?: marginInterestRateHistoryOptions): Promise<marginInterestRateHistoryResponse[]>;
    getCrossMarginFeeData(options?: getCrossMarginFeeDataOptions): Promise<getCrossMarginFeeDataResponse[]>;
    getIsolatedMarginFeeData(options?: getIsolatedMarginFeeDataOptions): Promise<getIsolatedMarginFeeDataResponse[]>;
    getIsolatedMarginTierData(symbol: string, options?: getIsolatedMarginTierDataOptions): Promise<getIsolatedMarginTierDataResponse[]>;
    getCurrentMarginOrderCountUsage(options?: getCurrentMarginOrderCountUsageOptions): Promise<getCurrentMarginOrderCountUsageResponse[]>;
    crossMarginCollateralRatio(): Promise<crossMarginCollateralRatioResponse>;
    getSmallLiabilityExchangeCoinList(options?: getSmallLiabilityExchangeCoinListOptions): Promise<getSmallLiabilityExchangeCoinListResponse[]>;
    smallLiabilityExchange(assetNames: string[], options?: smallLiabilityExchangeOptions): Promise<smallLiabilityExchangeResponse>;
    getSmallLiabilityExchangeHistory(current: number, size: number, options?: getSmallLiabilityExchangeHistoryOptions): Promise<getSmallLiabilityExchangeHistoryResponse>;
    getFutureHoulyInterestRate(assets: string, isIsolated: IsIsolatedMargin): Promise<getFutureHoulyInterestRateResponse>;
    getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMargin(options?: getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginOptions): Promise<getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginResponse[]>;
    getMarginAvailableInventory(type: string, options?: getMarginAvailableInventoryOptions): Promise<getMarginAvailableInventoryResponse>;
    marginManualLiquidation(type: string, options?: marginManualLiquidationOptions): Promise<marginManualLiquidationResponse[]>;
    getLeverageBracket(): Promise<getLeverageBracketResponse[]>;
    marginAccountBorrowRepay(asset: string, isIsolated: string, symbol: string, amount: string, type: MarginBorrowRepayType, options?: marginAccountBorrowRepayOptions): Promise<marginAccountBorrowRepayResponse>;
    getBorrowRepayRecords(type: MarginBorrowRepayType, options?: getBorrowRepayRecordsOptions): Promise<getBorrowRepayRecordsResponse>;
}