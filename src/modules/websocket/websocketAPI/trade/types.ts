import { sendMessageOptions } from '../../../../setters/types';
import { CancelRestrictions, NewOrderRespType, SelfTradePreventionMode, StopLimitTimeInForce, TimeInForce } from '../../../enum';
import {
    cancelOcoResponse,
    cancelOcoOrderReports,
    cancelOrderResponse,
    cancelAnExistingOrderAndSendANewOrderResponse,
    cancelAnExistingOrderAndSendANewOrderCancelresponse,
    newOcoResponse,
    newOcoOrderReports
} from '../../../restful/trade/types';

export interface newOrderOptions extends sendMessageOptions {
    timeInForce?: TimeInForce | '';
    price?: number;
    quantity?: number;
    quoteOrderQty?: number;
    newClientOrderId?: string;
    newOrderRespType?: NewOrderRespType;
    stopPrice?: number;
    trailingDelta?: number;
    icebergQty?: number;
    strategyId?: number;
    strategyType?: number;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
}

export interface testNewOrderOptions extends sendMessageOptions{
    timeInForce?: TimeInForce | '';
    price?: number;
    quantity?: number;
    quoteOrderQty?: number;
    newClientOrderId?: string;
    newOrderRespType?: NewOrderRespType;
    stopPrice?: number;
    trailingDelta?: number;
    icebergQty?: number;
    strategyId?: number;
    strategyType?: number;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
}

export interface getOrderOptions extends sendMessageOptions {
    origClientOrderId?: string;
    recvWindow?: number;
}

export interface cancelOrderOptions extends sendMessageOptions {
    origClientOrderId?: string;
    newClientOrderId?: string;
    cancelRestrictions?: CancelRestrictions;
    recvWindow?: number;
}

export interface cancelReplaceOrderOptions extends sendMessageOptions {
    cancelOrigClientOrderId?: string;
    cancelNewClientOrderId?: string;
    timeInForce?: TimeInForce | '';
    price?: number;
    quantity?: number;
    quoteOrderQty?: number;
    newClientOrderId?: string;
    newOrderRespType?: NewOrderRespType;
    stopPrice?: number;
    trailingDelta?: number;
    icebergQty?: number;
    strategyId?: number;
    strategyType?: number;
    selfTradePreventionMode?: SelfTradePreventionMode;
    cancelRestrictions?: CancelRestrictions;
    recvWindow?: number;
}

export interface openOrdersOptions extends sendMessageOptions {
    symbol?: string;
    recvWindow?: number;
}

export interface cancelOpenOrdersOptions extends sendMessageOptions {
    recvWindow?: number;
}

export interface newOCOOrderOptions extends sendMessageOptions {
    listClientOrderId?: string;
    limitClientOrderId?: string;
    limitIcebergQty?: number;
    limitStrategyId?: number;
    limitStrategyType?: number;
    stopPrice?: number;
    trailingDelta?: number;
    stopClientOrderId?: string;
    stopLimitPrice?: number;
    stopLimitTimeInForce?: StopLimitTimeInForce;
    stopIcebergQty?: number;
    stopStrategyId?: number;
    stopStrategyType?: string;
    newOrderRespType?: NewOrderRespType;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
}

export interface getOCOOrderOptions extends sendMessageOptions {
    orderListId?: number;
    recvWindow?: number;
}

export interface cancelOCOOrderOptions extends sendMessageOptions {
    listClientOrderId?: string;
    newClientOrderId?: string;
    recvWindow?: number;
}

export interface getOCOOpenOrdersOptions extends sendMessageOptions {
    recvWindow?: number;
}

export interface newOrderSOROptions extends sendMessageOptions {
    timeInForce?: TimeInForce | '';
    price?: number;
    newClientOrderId?: string;
    newOrderRespType?: NewOrderRespType;
    icebergQty?: number;
    strategyId?: number;
    strategyType?: number;
    selfTradePreventionMode?: SelfTradePreventionMode;
    recvWindow?: number;
}

export interface cancelOCOOrder extends Omit<cancelOcoResponse, 'orderReports'>, sendMessageOptions {
    orderReports: cancelOcoOrder[];
}

export interface cancelOcoOrder extends Omit<cancelOcoOrderReports, 'origClientOrderId' | 'stopPrice' | 'transactTime'>, sendMessageOptions {
    transactTime?: number;
    stopPrice?: string;
}

export interface cancelOpenOrder extends cancelOrderResponse, sendMessageOptions {
    transactTime: number;
    stopPrice: string;
    icebergQty: string;
    strategyId: number;
    strategyType: number;
}

export interface cancelOpenOCOOrder extends Omit<cancelOcoResponse, 'orderReports'>, sendMessageOptions {
    orderReports: orderReport[];
}

export interface orderReport extends Omit<cancelOcoOrderReports, 'stopPrice' | 'transactTime'>, sendMessageOptions {
    transactTime?: number;
    stopPrice?: string;
}

export interface cancelOrder extends cancelOrderResponse, sendMessageOptions {
    transactTime: number;
}

export interface CancelReplaceOrder extends Omit<cancelAnExistingOrderAndSendANewOrderResponse, 'cancelResponse'>, sendMessageOptions {
    cancelResponse: cancelResponse;
}

export interface cancelResponse extends cancelAnExistingOrderAndSendANewOrderCancelresponse, sendMessageOptions {
    transactTime: number;
}

export interface newOCOOrder extends Omit<newOcoResponse, 'orderReports'>, sendMessageOptions {
    orderReports: orderReports[];
}

export interface orderReports extends Omit<newOcoOrderReports, 'stopPrice'>, sendMessageOptions {
    workingTime: number;
    stopPrice?: string;
}
