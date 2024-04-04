import {
    OrderType,
    OrderStatus,
    OCOOrderStatus,
    MarginArchive,
    OCOStatusType,
    IsIsolatedMargin,
    Side,
    NewOrderRespType,
    SideEffectType,
    TimeInForce,
    StopLimitTimeInForce,
    SpotBNBBurn,
    InterestBNBBurn,
    GetCrossMargingTransferHistoryType,
    SelfTradePreventionMode,
    MarginStatus,
    MarginInterestHistory,
    MarginLevelStatus,
    CrossMarginAccountType,
    CrossMarginTrans
} from '../../enum';

export interface getAllMarginAssetsOptions {
    asset?: string;
}

export interface getAllMarginAssetsResponse {
    assetFullName: string;
    assetName: string;
    isBorrowable: boolean;
    isMortgageable: boolean;
    userMinBorrow: string;
    userMinRepay: string;
    delistTime: number;
}

export interface getAllCrossMarginPairsOptions {
    symbol?: string;
}

export interface getAllCrossMarginPairsResponse {
    base: string;
    id: bigint;
    isBuyAllowed: boolean;
    isMarginTrade: boolean;
    isSellAllowed: boolean;
    quote: string;
    symbol: string;
    delistTime?: number;
}

export interface getMarginPriceIndexResponse {
    calcTime: number;
    price: string;
    symbol: string;
}

export interface marginAccountNewOrderOptions {
    isIsolated?: IsIsolatedMargin;
    quantity?: number;
    quoteOrderQty?: number;
    price?: number;
    stopPrice?: number;
    newClientOrderId?: string;
    icebergQty?: number;
    newOrderRespType?: NewOrderRespType;
    sideEffectType?: SideEffectType;
    timeInForce?: TimeInForce;
    selfTradePreventionMode?: SelfTradePreventionMode;
    autoRepayAtCancel?: boolean;
    recvWindow?: number;
}

export interface marginAccountNewOrderResponse {
    symbol: string;
    orderId: number;
    clientOrderId: string;
    isIsolated: boolean;
    transactTime: number;
    price?: string;
    origQty?: string;
    executedQty?: string;
    cummulativeQuoteQty?: string;
    status?: OrderStatus;
    timeInForce?: TimeInForce;
    type?: OrderType;
    side?: Side;
    selfTradePreventionMode?: SelfTradePreventionMode;
    fills?: marginAccountNewOrderFills[];
}

export interface marginAccountNewOrderFills {
    price: string;
    qty: string;
    commission: string;
    commissionAsset: string;
}

export interface marginAccountCancelOrderOptions {
    isIsolated?: IsIsolatedMargin;
    orderId?: number;
    origClientOrderId?: string;
    newClientOrderId?: string;
    recvWindow?: number;
}

export interface marginAccountCancelOrderResponse {
    symbol: string;
    isIsolated: boolean;
    orderId: number;
    origClientOrderId: string;
    clientOrderId: string;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: Side;
}

export interface marginAccountCancelAllOpenOrdersOnASymbolOptions {
    isIsolated?: IsIsolatedMargin;
    recvWindow?: number;
}

export interface marginAccountCancelAllOpenOrdersOnASymbolResponse {
    symbol: string;
    isIsolated: boolean;
    origClientOrderId: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: Side;
    selfTradePreventionMode: SelfTradePreventionMode;
}

export interface adjustCrossMarginMaxLeverageResponse {
    success: boolean;
}

export interface getCrossMarginTransferHistoryOptions {
    asset?: string;
    type?: GetCrossMargingTransferHistoryType;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    isolatedSymbol?: string;
    archived?: MarginArchive;
    recvWindow?: number;
}

export interface getCrossMarginTransferHistoryResponse {
    rows: getCrossMarginTransferHistoryRows[];
    total: number;
}

export interface getCrossMarginTransferHistoryRows {
    amount: string;
    asset: string;
    status: MarginStatus;
    timestamp: number;
    txId: number;
    type: GetCrossMargingTransferHistoryType;
    transFrom?: CrossMarginTrans;
    transTo?: CrossMarginTrans;
    fromSymbol?: string;
    toSymbol?: string;
}


export interface getInterestHistoryOptions {
    asset?: string;
    isolatedSymbol?: string;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    archived?: MarginArchive;
    recvWindow?: number;
}

export interface getInterestHistoryResponse {
    rows: getInterestHistoryRows[];
    total: number;
}

export interface getInterestHistoryRows {
    txId: bigint;
    interestAccuredTime: number;
    asset: string;
    rawAsset: string;
    principal: string;
    interest: string;
    interestRate: string;
    type: MarginInterestHistory,
    isolatedSymbol: string;
}

export interface getForceLiquidationRecordOptions {
    startTime?: number;
    endTime?: number;
    isolatedSymbol?: string;
    current?: number;
    size?: number;
    recvWindow?: number;
}

export interface getForceLiquidationRecordResponse {
    rows: getForceLiquidationRecordRows[];
    total: number;
}

export interface getForceLiquidationRecordRows {
    avgPrice: string;
    executedQty: string;
    orderId: number;
    price: string;
    qty: string;
    side: Side;
    symbol: string;
    timeInForce: TimeInForce;
    isIsolated: boolean;
    updatedTime: number;
}

export interface getCrossMarginAccountDetailsOptions {
    recvWindow?: number;
}

export interface getCrossMarginAccountDetailsResponse {
    borrowEnabled: boolean;
    marginLevel: string;
    totalAssetOfBtc: string;
    totalLiabilityOfBtc: string;
    totalNetAssetOfBtc: string;
    tradeEnabled: boolean;
    transferEnabled: boolean;
    accountType: CrossMarginAccountType;
    userAssets: getCrossMarginAccountDetailsUserassets[];
}

export interface getCrossMarginAccountDetailsUserassets {
    asset: string;
    borrowed: string;
    free: string;
    interest: string;
    locked: string;
    netAsset: string;
}

export interface getMarginAccountOrderOptions {
    isIsolated?: IsIsolatedMargin;
    orderId?: number;
    origClientOrderId?: string;
    recvWindow?: number;
}

export interface getMarginAccountOrderResponse {
    clientOrderId: string;
    cummulativeQuoteQty: string;
    executedQty: string;
    icebergQty: string;
    isWorking: boolean;
    orderId: number;
    origQty: string;
    price: string;
    side: Side;
    status: OrderStatus;
    stopPrice: string;
    symbol: string;
    isIsolated: boolean;
    time: number;
    timeInForce: TimeInForce;
    type: OrderType;
    selfTradePreventionMode: SelfTradePreventionMode;
    updateTime: number;
}

export interface getMarginAccountOpenOrdersOptions {
    symbol?: string;
    isIsolated?: IsIsolatedMargin;
    recvWindow?: number;
}

export interface getMarginAccountOpenOrdersResponse {
    clientOrderId: string;
    cummulativeQuoteQty: string;
    executedQty: string;
    icebergQty: string;
    isWorking: boolean;
    orderId: number;
    origQty: string;
    price: string;
    side: Side;
    status: OrderStatus;
    stopPrice: string;
    symbol: string;
    isIsolated: boolean;
    time: number;
    timeInForce: TimeInForce;
    type: OrderType;
    selfTradePreventionMode: SelfTradePreventionMode;
    updateTime: number;
}

export interface getMarginAccountAllOrdersOptions {
    isIsolated?: IsIsolatedMargin;
    orderId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface getMarginAccountAllOrdersResponse {
    clientOrderId: string;
    cummulativeQuoteQty: string;
    executedQty: string;
    icebergQty: string;
    isWorking: boolean;
    orderId: number;
    origQty: string;
    price: string;
    side: Side;
    status: OrderStatus;
    stopPrice: string;
    symbol: string;
    isIsolated: boolean;
    time: number;
    timeInForce: TimeInForce;
    type: OrderType;
    selfTradePreventionMode: SelfTradePreventionMode;
    updateTime: number;
}

export interface marginAccountNewOcoOptions {
    isIsolated?: IsIsolatedMargin;
    listClientOrderId?: string;
    limitClientOrderId?: string;
    limitIcebergQty?: number;
    stopClientOrderId?: string;
    stopLimitPrice?: number;
    stopIcebergQty?: number;
    stopLimitTimeInForce?: StopLimitTimeInForce;
    newOrderRespType?: NewOrderRespType;
    sideEffectType?: SideEffectType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    autoRepayAtCancel?: boolean;
    recvWindow?: number;
}

export interface marginAccountNewOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: string;
    listOrderStatus: string;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    marginBuyBorrowAmount: string;
    marginBuyBorrowAsset: string;
    isIsolated: boolean;
    orders: marginAccountNewOcoOrders[];
    orderReports: marginAccountNewOcoOrderreports[];
}

export interface marginAccountNewOcoOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}

export interface marginAccountNewOcoOrderreports {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: Side;
    stopPrice: string;
    selfTradePreventionMode: SelfTradePreventionMode;
}

export interface marginAccountCancelOcoOptions {
    isIsolated?: IsIsolatedMargin;
    orderListId?: number;
    listClientOrderId?: string;
    newClientOrderId?: string;
    recvWindow?: number;
}

export interface marginAccountCancelOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OCOStatusType;
    listOrderStatus: OCOOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    isIsolated: boolean;
    orders: marginAccountCancelOcoOrders[];
    orderReports: marginAccountCancelOcoOrderReports[];
}

export interface marginAccountCancelOcoOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}

export interface marginAccountCancelOcoOrderReports {
    symbol: string;
    origClientOrderId: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: Side;
    stopPrice: string;
    selfTradePreventionMode: SelfTradePreventionMode;
}

export interface getMarginAccountOcoOptions {
    isIsolated?: IsIsolatedMargin;
    symbol?: string;
    orderListId?: number;
    origClientOrderId?: string;
    recvWindow?: number;
}

export interface getMarginAccountOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OCOStatusType;
    listOrderStatus: OCOOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    isIsolated: boolean;
    orders: getMarginAccountOcoOrders[];
}

export interface getMarginAccountOcoOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}

export interface getMarginAccountAllOcoOptions {
    isIsolated?: IsIsolatedMargin;
    symbol?: string;
    fromId?: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface getMarginAccountAllOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OCOStatusType;
    listOrderStatus: OCOOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    isIsolated: boolean;
    orders: getMarginAccountAllOcoOrders[];
}

export interface getMarginAccountAllOcoOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}

export interface getMarginAccountOpenOcoOptions {
    isIsolated?: IsIsolatedMargin;
    symbol?: string;
    recvWindow?: number;
}

export interface getMarginAccountOpenOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OCOStatusType;
    listOrderStatus: OCOOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    isIsolated: boolean;
    orders: getMarginAccountOpenOcoOrders[];
}


export interface getMarginAccountOpenOcoOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}

export interface getMarginAccountTradeListOptions {
    isIsolated?: IsIsolatedMargin;
    orderId?: number;
    startTime?: number;
    endTime?: number;
    fromId?: number;
    limit?: number;
    recvWindow?: number;
}

export interface getMarginAccountTradeListResponse {
    commission: string;
    commissionAsset: string;
    id: number;
    isBestMatch: boolean;
    isBuyer: boolean;
    isMaker: boolean;
    orderId: number;
    price: string;
    qty: string;
    symbol: string;
    isIsolated: boolean;
    time: number;
}

export interface getMaxBorrowOptions {
    isolatedSymbol?: string;
    recvWindow?: number;
}

export interface getMaxBorrowResponse {
    amount: string;
    borrowLimit: string;
}

export interface getMaxTransferoutAmountOptions {
    isolatedSymbol?: string;
    recvWindow?: number;
}

export interface getMaxTransferoutAmountResponse {
    amount: string;
}

export interface getSummaryOfMarginAccountOptions {
    recvWindow?: number;
}

export interface getSummaryOfMarginAccountResponse {
    normalBar: string;
    marginCallBar: string;
    forceLiquidationBar: string;
}

export interface getIsolatedMarginAccountInfoOptions {
    symbols?: string;
    recvWindow?: number;
}

export interface getIsolatedMarginAccountInfoResponse {
    assets: getIsolatedMarginAccountInfoAssets[];
    totalAssetOfBtc?: string;
    totalLiabilityOfBtc?: string;
    totalNetAssetOfBtc?: string;
}

export interface getIsolatedMarginAccountInfoBaseasset {
    asset: string
    borrowEnabled: boolean
    borrowed: string
    free: string
    interest: string
    locked: string
    netAsset: string
    netAssetOfBtc: string
    repayEnabled: boolean
    totalAsset: string
}

export interface getIsolatedMarginAccountInfoQuoteasset {
    asset: string
    borrowEnabled: boolean
    borrowed: string
    free: string
    interest: string
    locked: string
    netAsset: string
    netAssetOfBtc: string
    repayEnabled: boolean
    totalAsset: string
}

export interface getIsolatedMarginAccountInfoAssets {
    baseAsset: getIsolatedMarginAccountInfoBaseasset;
    quoteAsset: getIsolatedMarginAccountInfoQuoteasset;
    symbol: string;
    isolatedCreated: boolean;
    enabled: boolean;
    marginLevel: string;
    marginLevelStatus: MarginLevelStatus;
    marginRatio: string;
    indexPrice: string;
    liquidatePrice: string;
    liquidateRate: string;
    tradeEnabled: boolean;
}

export interface disableIsolatedMarginAccountOptions {
    recvWindow?: number;
}

export interface disableIsolatedMarginAccountResponse {
    success: boolean;
    symbol: string;
}

export interface enableIsolatedMarginAccountOptions {
    recvWindow?: number;
}

export interface enableIsolatedMarginAccountResponse {
    success: boolean;
    symbol: string;
}

export interface getEnabledIsolatedMarginAccountLimitOptions {
    recvWindow?: number;
}

export interface getEnabledIsolatedMarginAccountLimitResponse {
    enabledAccount: number;
    maxAccount: number;
}

export interface getAllIsolatedMarginSymbolOptions {
    symbol?: string;
    recvWindow?: number;
}

export interface getAllIsolatedMarginSymbolResponse {
    symbol: string;
    base: string;
    quote: string;
    isMarginTrade: boolean;
    isBuyAllowed: boolean;
    isSellAllowed: boolean;
}

export interface toggleBnbBurnOnSpotTradeAndMarginInterestOptions {
    spotBNBBurn?: SpotBNBBurn;
    interestBNBBurn?: InterestBNBBurn;
    recvWindow?: number;
}

export interface toggleBnbBurnOnSpotTradeAndMarginInterestResponse {
    spotBNBBurn: boolean;
    interestBNBBurn: boolean;
}

export interface getBnbBurnStatusOptions {
    recvWindow?: number;
}

export interface getBnbBurnStatusResponse {
    spotBNBBurn: boolean;
    interestBNBBurn: boolean;
}

export interface marginInterestRateHistoryOptions {
    vipLevel?: number;
    startTime?: number;
    endTime?: number;
    recvWindow?: number;
}

export interface marginInterestRateHistoryResponse {
    asset: string;
    dailyInterestRate: string;
    timestamp: number;
    vipLevel: number;
}

export interface getCrossMarginFeeDataOptions {
    vipLevel?: number;
    coin?: string;
    recvWindow?: number;
}

export interface getCrossMarginFeeDataResponse {
    vipLevel: number;
    coin: string;
    transferIn: boolean;
    borrowable: boolean;
    dailyInterest: string;
    yearlyInterest: string;
    borrowLimit: string;
    marginablePairs: string[];
}

export interface getIsolatedMarginFeeDataOptions {
    vipLevel?: number;
    symbol?: string;
    recvWindow?: number;
}

export interface getIsolatedMarginFeeDataResponse {
    vipLevel: number;
    symbol: string;
    leverage: string;
    data: getIsolatedMarginFeeDataData[];
}

export interface getIsolatedMarginFeeDataData {
    coin: string;
    dailyInterest: string;
    borrowLimit: string;
}

export interface getIsolatedMarginTierDataOptions {
    tier?: number;
    recvWindow?: number;
}

export interface getIsolatedMarginTierDataResponse {
    symbol: string;
    tier: number;
    effectiveMultiple: string;
    initialRiskRatio: string;
    liquidationRiskRatio: string;
    baseAssetMaxBorrowable: string;
    quoteAssetMaxBorrowable: string;
}

export interface getCurrentMarginOrderCountUsageOptions {
    isIsolated?: IsIsolatedMargin;
    symbol?: string;
    recvWindow?: number;
}

export interface getCurrentMarginOrderCountUsageResponse {
    rateLimitType: string;
    interval: string;
    intervalNum: number;
    limit: number;
    count: number;
}

export interface crossMarginCollateralRatioResponse {
    collaterals: crossMarginCollateralRatioCollaterals[];
    assetNames: string[];
}

export interface crossMarginCollateralRatioCollaterals {
    minUsdValue: string;
    maxUsdValue?: string;
    discountRate: string;
}

export interface getSmallLiabilityExchangeCoinListOptions {
    recvWindow?: number;
}

export interface getSmallLiabilityExchangeCoinListResponse {
    asset: string;
    interest: string;
    principal: string;
    liabilityAsset: string;
    liabilityQty: string;
}

export interface smallLiabilityExchangeOptions {
    assetNames?: string;
}

export interface smallLiabilityExchangeResponse {
    asset: string;
    interest: string;
    principal: string;
    liabilityAsset: string;
    liabilityQty: string;
}


export interface getSmallLiabilityExchangeHistoryOptions {
    startTime?: number;
    endTime?: number;
    recvWindow?: number;
}

export interface getSmallLiabilityExchangeHistoryResponse {
    total: number;
    rows: getSmallLiabilityExchangeHistoryRows[];
}

export interface getSmallLiabilityExchangeHistoryRows {
    asset: string;
    amount: string;
    targetAsset: string;
    targetAmount: string;
    bizType: string;
    timestamp: number;
}

export interface getFutureHoulyInterestRateResponse {
    asset: string;
    nextHourlyInterestRate: string;
}

export interface getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginOptions {
    recvWindow?: number;
}

export interface getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginResponse {
    delistTime: number;
    crossMarginAssets: string[];
    isolatedMarginSymbols: string[];
}

export interface getMarginAvailableInventoryOptions {
    recvWindow?: number;
}

export interface getMarginAvailableInventoryResponse {
    assets: { [key: string]: string };
    updateTime: number;
}

export interface marginManualLiquidationOptions {
    symbol?: string;
    recvWindow?: number;
}

export interface marginManualLiquidationResponse {
    asset: string;
    interest: string;
    principal: string;
    liabilityAsset: string;
    liabilityQty: number;
}

export interface getLeverageBracketResponse {
    assetNames: string[];
    rank: number;
    brackets: leverageBracket[];
}

export interface leverageBracket {
    leverage: number;
    maxDebt: number;
    maintenanceMarginRate: number;
    initialMarginRate: number;
    fastNum: number;
}

export interface marginAccountBorrowRepayOptions {
    recvWindow?: number;
}

export interface marginAccountBorrowRepayResponse {
    tranId: number;
}

export interface getBorrowRepayRecordsOptions {
    asset?: string;
    isolatedSymbol?: string;
    txId?: number;
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    recvWindow?: number;
}

export interface getBorrowRepayRecordsResponse {
    rows: BorrowRepayRecordsRow[];
    total: number;
}

export interface BorrowRepayRecordsRow {
    isolatedSymbol: string;
    amount: string;
    asset: string;
    interest: string;
    principal: string;
    status: MarginStatus;
    timestamp: number;
    txId: number;
}