import {
    AccountSnapshotType,
    CancelResult,
    NewOrderRespType,
    NewOrderResult,
    OrderListStatusType,
    OrderListOrderStatus,
    OrderListAboveBelowType,
    OrderStatus,
    OrderType,
    Permissions,
    SelfTradePreventionMode,
    Side,
    StopLimitTimeInForce,
    TimeInForce,
    WorkingFloor
} from '../../enum';

export interface testNewOrderOptions {
    timeInForce?: TimeInForce;
    quantity?: number;
    quoteOrderQty?: number;
    price?: number;
    newClientOrderId?: string;
    strategyId?: number;
    strategyType?: number;
    stopPrice?: number;
    trailingDelta?: number;
    icebergQty?: number;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
    computeCommissionRates?: boolean;
}

export interface testNewOrderResponse {
    standardCommissionForOrder: commissionParams;
    taxCommissionForOrder: commissionParams;
    discount: discount;
}

export interface commissionParams {
    maker: string;
    taker: string;
}

export interface discount {
    enabledForAccount: boolean;
    enabledForSymbol: boolean;
    discountAsset: string;
    discount: string;
}

export interface getOrderOptions {
    orderId?: number;
    origClientOrderId?: string;
    recvWindow?: number;
}

export interface getOrderResponse {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus | '';
    timeInForce: TimeInForce | '';
    type: OrderType | '';
    side: Side | '';
    stopPrice: string;
    icebergQty: string;
    time: number;
    updateTime: number;
    isWorking: boolean;
    workingTime: number;
    origQuoteOrderQty: string;
    selfTradePreventionMode: SelfTradePreventionMode | '';
}

export interface newOrderOptions {
    timeInForce?: TimeInForce;
    quantity?: number;
    quoteOrderQty?: number;
    price?: number;
    newClientOrderId?: string;
    strategyId?: number;
    strategyType?: number;
    stopPrice?: number;
    trailingDelta?: number;
    icebergQty?: number;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
}

export interface newOrderResponse {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price?: string;
    origQty?: string;
    executedQty?: string;
    cummulativeQuoteQty?: string;
    status?: OrderStatus;
    timeInForce?: TimeInForce;
    type?: OrderType;
    side?: Side;
    workingTime?: number;
    selfTradePreventionMode?: SelfTradePreventionMode;
    fills?: fill[] | [];
}

export interface fill {
    price: string;
    qty: string;
    commission: string;
    commissionAsset: string;
    tradeId: number;
}

export interface cancelOrderOptions {
    orderId?: number;
    origClientOrderId?: string;
    newClientOrderId?: string;
    cancelRestrictions?: 'ONLY_NEW' | 'ONLY_PARTIALLY_FILLED';
    recvWindow?: number;
}

export interface cancelOrderResponse {
    symbol: string;
    origClientOrderId: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus | '';
    timeInForce: TimeInForce | '';
    type: OrderType | '';
    side: Side | '';
    selfTradePreventionMode: SelfTradePreventionMode | '';
}

export interface cancelAnExistingOrderAndSendANewOrderOptions {
    timeInForce?: TimeInForce;
    quantity?: number;
    quoteOrderQty?: number;
    price?: number;
    cancelNewClientOrderId?: string;
    cancelOrigClientOrderId?: string;
    cancelOrderId?: number;
    newClientOrderId?: string;
    strategyId?: number;
    strategyType?: number;
    stopPrice?: number;
    trailingDelta?: number;
    icebergQty?: number;
    newOrderRespType?: NewOrderRespType;
    recvWindow?: number;
}

export interface cancelAnExistingOrderAndSendANewOrderResponse {
    cancelResult: CancelResult;
    newOrderResult: NewOrderResult;
    cancelResponse: cancelAnExistingOrderAndSendANewOrderCancelresponse;
    newOrderResponse: newOrderResponse;
}

export interface cancelAnExistingOrderAndSendANewOrderCancelresponse {
    symbol: string;
    origClientOrderId: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus | '';
    timeInForce: TimeInForce | '';
    type: OrderType | '';
    side: Side | '';
    selfTradePreventionMode: SelfTradePreventionMode | '';
}

export interface currentOpenOrdersOptions {
    symbol?: string;
    recvWindow?: number;
}

export interface currentOpenOrdersResponse {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus | '';
    timeInForce: TimeInForce | '';
    type: OrderType | '';
    side: Side | '';
    stopPrice: string;
    icebergQty: string;
    time: number;
    updateTime: number;
    isWorking: boolean;
    workingTime: number;
    origQuoteOrderQty: string;
    selfTradePreventionMode: SelfTradePreventionMode | '';
}

export interface cancelAllOpenOrdersOnASymbolOptions {
    recvWindow?: number;
}

export interface cancelAllOpenOrdersOnASymbolResponse {
    symbol: string;
    origClientOrderId: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus | '';
    timeInForce: TimeInForce | '';
    type: OrderType | '';
    side: Side | '';
    selfTradePreventionMode: SelfTradePreventionMode | '';
}

export interface allOrdersOptions {
    orderId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface allOrdersResponse {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus | '';
    timeInForce: TimeInForce | '';
    type: OrderType | '';
    side: Side | '';
    stopPrice: string;
    icebergQty: string;
    time: number;
    updateTime: number;
    isWorking: boolean;
    workingTime: number;
    origQuoteOrderQty: string;
    selfTradePreventionMode: SelfTradePreventionMode | '';
}

export interface newOcoOptions {
    listClientOrderId?: string;
    aboveClientOrderId?: string;
    aboveIcebergQty?: number;
    abovePrice?: number;
    aboveStopPrice?: number;
    aboveTrailingDelta?: number;
    aboveTimeInForce?: StopLimitTimeInForce;
    aboveStrategyId?: number;
    aboveStrategyType?: number;
    belowClientOrderId?: string;
    belowIcebergQty?: number;
    belowPrice?: number;
    belowStopPrice?: number;
    belowTrailingDelta?: number;
    belowTimeInForce?: StopLimitTimeInForce;
    belowStrategyId?: number;
    belowStrategyType?: number;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
}

export interface newOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OrderListStatusType;
    listOrderStatus: OrderListOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    orders: newOrderListOrders[];
    orderReports: newOrderListOrderReports[];
}

export interface newOrderListOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}

export interface newOrderListOrderReports {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus | '';
    timeInForce: TimeInForce | '';
    type: OrderType | '';
    side: Side | '';
    stopPrice?: string;
    workingTime: string | number;
    icebergQty?: string;
    selfTradePreventionMode: SelfTradePreventionMode | '';
}

export interface newOtoOptions {
    listClientOrderId?: string;
    workingIcebergQty?: number;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: string;
    workingClientOrderId?: string;
    workingTimeInForce?: TimeInForce;
    workingStrategyId?: number;
    workingStrategyType?: number;
    pendingClientOrderId?: string;
    pendingPrice?: number;
    pendingStopPrice?: number;
    pendingTrailingDelta?: number;
    pendingIcebergQty?: number;
    pendingTimeInForce?: TimeInForce;
    pendingStrategyId?: number;
    pendingStrategyType?: number;
    recvWindow?: number;
}

export interface newOtoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OrderListStatusType;
    listOrderStatus: OrderListOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    orders: newOrderListOrders[];
    orderReports: newOrderListOrderReports[];
}

export interface newOtocoOptions {
    listClientOrderId?: string;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: string;
    workingClientOrderId?: string;
    workingIcebergQty?: number;
    workingTimeInForce?: TimeInForce;
    workingStrategyId?: number;
    workingStrategyType?: number;
    pendingAboveClientOrderId?: string;
    pendingAbovePrice?: number;
    pendingAboveStopPrice?: number;
    pendingAboveTrailingDelta?: number;
    pendingAboveIcebergQty?: number;
    pendingAboveTimeInForce?: TimeInForce;
    pendingAboveStrategyId?: number;
    pendingAboveStrategyType?: number;
    pendingBelowType?: OrderListAboveBelowType;
    pendingBelowClientOrderId?: string;
    pendingBelowPrice?: number;
    pendingBelowStopPrice?: number;
    pendingBelowTrailingDelta?: number;
    pendingBelowIcebergQty?: number;
    pendingBelowTimeInForce?: TimeInForce;
    pendingBelowStrategyId?: number;
    pendingBelowStrategyType?: number;
    recvWindow?: number;
}

export interface newOtocoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OrderListStatusType;
    listOrderStatus: OrderListOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    orders: newOrderListOrders[];
    orderReports: newOrderListOrderReports[];
}

export interface getOcoOptions {
    orderListId?: number;
    origClientOrderId?: string;
    recvWindow?: number;
}

export interface getOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OrderListStatusType;
    listOrderStatus: OrderListOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    orders: getOcoOrders[];
}

export interface getOcoOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}

export interface cancelOcoOptions {
    orderListId?: number;
    listClientOrderId?: string;
    newClientOrderId?: string;
    recvWindow?: number;
}

export interface cancelOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OrderListStatusType;
    listOrderStatus: OrderListOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    orders: cancelOcoOrders[];
    orderReports: cancelOcoOrderReports[];
}

export interface cancelOcoOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}

export interface cancelOcoOrderReports {
    symbol: string;
    origClientOrderId: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus | '';
    timeInForce: TimeInForce | '';
    type: OrderType | '';
    side: Side | '';
    stopPrice: string;
    selfTradePreventionMode: SelfTradePreventionMode | '';
}

export interface getAllOcoOptions {
    fromId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface getAllOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OrderListStatusType;
    listOrderStatus: OrderListOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    isIsolated: boolean;
    orders: getAllOcoOrders[];
}


export interface getAllOcoOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}


export interface getOpenOcoOptions {
    recvWindow?: number;
}

export interface getOpenOcoResponse {
    orderListId: number;
    contingencyType: string;
    listStatusType: OrderListStatusType;
    listOrderStatus: OrderListOrderStatus;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    orders: getOpenOcoOrders[];
}

export interface getOpenOcoOrders {
    symbol: string;
    orderId: number;
    clientOrderId: string;
}

export interface accountInformationOptions {
    recvWindow?: number;
}

export interface accountInformationResponse {
    makerCommission: number;
    takerCommission: number;
    buyerCommission: number;
    sellerCommission: number;
    commissionRates: accountInformationCommissionrates;
    canTrade: boolean;
    canWithdraw: boolean;
    canDeposit: boolean;
    brokered: boolean;
    requireSelfTradePrevention: boolean;
    preventSor: boolean;
    updateTime: number;
    accountType: AccountSnapshotType;
    balances: accountInformationBalances[];
    permissions: Permissions[];
    uid: number;
}

export interface accountInformationCommissionrates {
    maker: string;
    taker: string;
    buyer: string;
    seller: string;
}

export interface accountInformationBalances {
    asset: string;
    free: string;
    locked: string;
}

export interface accountTradeListOptions extends getAllOcoOptions {
    orderId?: number;
}

export interface accountTradeListResponse {
    symbol: string;
    id: number;
    orderId: number;
    orderListId: number;
    price: string;
    qty: string;
    quoteQty: string;
    commission: string;
    commissionAsset: string;
    time: number;
    isBuyer: boolean;
    isMaker: boolean;
    isBestMatch: boolean;
}

export interface getCurrentOrderCountUsageOptions {
    recvWindow?: number;
}

export interface getCurrentOrderCountUsageResponse {
    rateLimitType: string;
    interval: string;
    intervalNum: number;
    limit: number;
    count: number;
}

export interface testNewOrderSOROptions {
    timeInForce?: TimeInForce;
    price?: number;
    newClientOrderId?: string;
    strategyId?: number;
    strategyType?: number;
    icebergQty?: number;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
    computeCommissionRates?: boolean;
}

export interface newOrderSOROptions {
    timeInForce?: TimeInForce;
    price?: number;
    newClientOrderId?: string;
    strategyId?: number;
    strategyType?: number;
    icebergQty?: number;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
}

export interface newOrderSORResponse {
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
    workingTime: number;
    fills: fill[] | [];
    workingFloor: WorkingFloor;
    selfTradePreventionMode: SelfTradePreventionMode;
    usedSor: boolean;
}

export interface getPreventedMatchesOptions {
    preventedMatchId?: number;
    orderId?: number;
    fromPreventedMatchId?: number;
    limit?: number;
    recvWindow?: number;
}

export interface getPreventedMatchesResponse {
    symbol: string;
    preventedMatchId: number;
    takerOrderId: number;
    makerOrderId: number;
    tradeGroupId: number;
    selfTradePreventionMode: SelfTradePreventionMode;
    price: string;
    makerPreventedQuantity: string;
    transactTime: number;
}

export interface getAllocationsOptions {
    startTime?: number;
    endTime?: number;
    fromAllocationId?: number;
    limit?: number;
    orderId?: number;
    recvWindow?: number;
}

export interface getAllocationsResponse {
    symbol: string;
    allocationId: number;
    allocationType: string;
    orderId: number;
    orderListId: number;
    price: string;
    qty: string;
    quoteQty: string;
    commission: string;
    commissionAsset: string;
    time: number;
    isBuyer: boolean;
    isMaker: boolean;
    isAllocator: boolean;
}

export interface getCommissionRatesResponse {
    symbol: string;
    standardCommission: accountInformationCommissionrates;
    taxCommission: accountInformationCommissionrates;
    discount: discount;
}