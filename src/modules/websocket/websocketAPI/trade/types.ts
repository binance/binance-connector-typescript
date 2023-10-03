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

export interface newOrderOptions {
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

export interface testNewOrderOptions {
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

export interface getOrderOptions {
    origClientOrderId?: string;
    recvWindow?: number;
}

export interface cancelOrderOptions {
    origClientOrderId?: string;
    newClientOrderId?: string;
    cancelRestrictions?: CancelRestrictions;
    recvWindow?: number;
}

export interface cancelReplaceOrderOptions {
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

export interface openOrdersOptions {
    symbol?: string;
    recvWindow?: number;
}

export interface cancelOpenOrdersOptions {
    recvWindow?: number;
}

export interface newOCOOrderOptions {
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

export interface getOCOOrderOptions {
    orderListId?: number;
    recvWindow?: number;
}

export interface cancelOCOOrderOptions {
    listClientOrderId?: string;
    newClientOrderId?: string;
    recvWindow?: number;
}

export interface getOCOOpenOrdersOptions {
    recvWindow?: number;
}

export interface newOrderSOROptions {
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

export interface cancelOCOOrder extends Omit<cancelOcoResponse, 'orderReports'> {
    orderReports: cancelOcoOrder[];
}

interface cancelOcoOrder extends Omit<cancelOcoOrderReports, 'origClientOrderId' | 'stopPrice'> {
    transactTime?: number;
    stopPrice?: string;
}

export interface cancelOpenOrder extends cancelOrderResponse {
    transactTime: number;
    stopPrice: string;
    icebergQty: string;
    strategyId: number;
    strategyType: number;
}

export interface cancelOpenOCOOrder extends Omit<cancelOcoResponse, 'orderReports'> {
    orderReports: orderReport[];
}

interface orderReport extends Omit<cancelOcoOrderReports, 'stopPrice'> {
    transactTime?: number;
    stopPrice?: string;
}

export interface cancelOrder extends cancelOrderResponse {
    transactTime: number;
}

export interface CancelReplaceOrder extends Omit<cancelAnExistingOrderAndSendANewOrderResponse, 'cancelResponse'> {
    cancelResponse: cancelResponse;
}

interface cancelResponse extends cancelAnExistingOrderAndSendANewOrderCancelresponse {
    transactTime: number;
}

export interface newOCOOrder extends Omit<newOcoResponse, 'orderReports'> {
    orderReports: orderReports[];
}

interface orderReports extends Omit<newOcoOrderReports, 'stopPrice'> {
    workingTime: number;
    stopPrice?: string;
}
