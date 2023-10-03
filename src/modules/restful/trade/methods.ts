import { Side, OrderType, CancelReplaceMode } from '../../enum';

import {
    testNewOrderOptions,
    getOrderOptions,
    getOrderResponse,
    newOrderOptions,
    newOrderResponse,
    cancelOrderOptions,
    cancelOrderResponse,
    cancelAnExistingOrderAndSendANewOrderOptions,
    cancelAnExistingOrderAndSendANewOrderResponse,
    currentOpenOrdersOptions,
    currentOpenOrdersResponse,
    cancelAllOpenOrdersOnASymbolOptions,
    cancelAllOpenOrdersOnASymbolResponse,
    allOrdersOptions,
    allOrdersResponse,
    newOcoOptions,
    newOcoResponse,
    getOcoOptions,
    getOcoResponse,
    cancelOcoOptions,
    cancelOcoResponse,
    getAllOcoOptions,
    getAllOcoResponse,
    getOpenOcoOptions,
    getOpenOcoResponse,
    accountInformationOptions,
    accountInformationResponse,
    accountTradeListOptions,
    accountTradeListResponse,
    getCurrentOrderCountUsageOptions,
    getCurrentOrderCountUsageResponse,
} from './types';

export interface TradeMethods {
    testNewOrder(symbol: string, side: Side, type: OrderType, options?: testNewOrderOptions): Promise<Record<string, never>>;
    getOrder(symbol: string, options?: getOrderOptions): Promise<getOrderResponse>;
    newOrder(symbol: string, side: Side, type: OrderType, options?: newOrderOptions): Promise<newOrderResponse>;
    cancelOrder(symbol: string, options?: cancelOrderOptions): Promise<cancelOrderResponse>;
    cancelAnExistingOrderAndSendANewOrder(symbol: string, side: Side, type: OrderType, cancelReplaceMode: CancelReplaceMode, options?: cancelAnExistingOrderAndSendANewOrderOptions): Promise<cancelAnExistingOrderAndSendANewOrderResponse>;
    currentOpenOrders(options?: currentOpenOrdersOptions): Promise<currentOpenOrdersResponse[]>;
    cancelAllOpenOrdersOnASymbol(symbol: string, options?: cancelAllOpenOrdersOnASymbolOptions): Promise<cancelAllOpenOrdersOnASymbolResponse[]>;
    allOrders(symbol: string, options?: allOrdersOptions): Promise<allOrdersResponse[]>;
    newOco(symbol: string, side: Side, quantity: number, price: number, stopPrice: number, options?: newOcoOptions): Promise<newOcoResponse>;
    getOco(options?: getOcoOptions): Promise<getOcoResponse>;
    cancelOco(symbol: string, options?: cancelOcoOptions): Promise<cancelOcoResponse>;
    getAllOco(options?: getAllOcoOptions): Promise<getAllOcoResponse[]>;
    getOpenOco(options?: getOpenOcoOptions): Promise<getOpenOcoResponse[]>;
    accountInformation(options?: accountInformationOptions): Promise<accountInformationResponse>;
    accountTradeList(symbol: string, options?: accountTradeListOptions): Promise<accountTradeListResponse[]>;
    getCurrentOrderCountUsage(options?: getCurrentOrderCountUsageOptions): Promise<getCurrentOrderCountUsageResponse[]>;
}