import { OrderListAboveBelowType, OrderType, OtoPendingType, OrderListWorkingType, Side, CancelReplaceMode } from '../../enum';

import {
    accountInformationOptions,
    accountInformationResponse,
    accountTradeListOptions,
    accountTradeListResponse,
    allOrdersOptions,
    allOrdersResponse,
    cancelAllOpenOrdersOnASymbolOptions,
    cancelAllOpenOrdersOnASymbolResponse,
    cancelAnExistingOrderAndSendANewOrderOptions,
    cancelAnExistingOrderAndSendANewOrderResponse,
    cancelOcoOptions,
    cancelOcoResponse,
    cancelOrderOptions,
    cancelOrderResponse,
    currentOpenOrdersOptions,
    currentOpenOrdersResponse,
    getAllocationsOptions,
    getAllocationsResponse,
    getAllOcoOptions,
    getAllOcoResponse,
    getCommissionRatesResponse,
    getCurrentOrderCountUsageOptions,
    getCurrentOrderCountUsageResponse,
    getOcoOptions,
    getOcoResponse,
    getOpenOcoOptions,
    getOpenOcoResponse,
    getOrderOptions,
    getOrderResponse,
    getPreventedMatchesOptions,
    getPreventedMatchesResponse,
    newOcoOptions,
    newOcoResponse,
    newOtoOptions,
    newOtoResponse,
    newOtocoOptions,
    newOtocoResponse,
    newOrderOptions,
    newOrderResponse,
    newOrderSOROptions,
    newOrderSORResponse,
    testNewOrderOptions,
    testNewOrderResponse,
    testNewOrderSOROptions
} from './types';

export interface TradeMethods {
    testNewOrder(symbol: string, side: Side, type: OrderType, options?: testNewOrderOptions): Promise<Record<string, never> | testNewOrderResponse>;
    getOrder(symbol: string, options?: getOrderOptions): Promise<getOrderResponse>;
    newOrder(symbol: string, side: Side, type: OrderType, options?: newOrderOptions): Promise<newOrderResponse>;
    cancelOrder(symbol: string, options?: cancelOrderOptions): Promise<cancelOrderResponse>;
    cancelAnExistingOrderAndSendANewOrder(symbol: string, side: Side, type: OrderType, cancelReplaceMode: CancelReplaceMode, options?: cancelAnExistingOrderAndSendANewOrderOptions): Promise<cancelAnExistingOrderAndSendANewOrderResponse>;
    currentOpenOrders(options?: currentOpenOrdersOptions): Promise<currentOpenOrdersResponse[]>;
    cancelAllOpenOrdersOnASymbol(symbol: string, options?: cancelAllOpenOrdersOnASymbolOptions): Promise<cancelAllOpenOrdersOnASymbolResponse[]>;
    allOrders(symbol: string, options?: allOrdersOptions): Promise<allOrdersResponse[]>;
    newOco(symbol: string, side: Side, quantity: number, aboveType: OrderListAboveBelowType, belowType: OrderListAboveBelowType, options?: newOcoOptions): Promise<newOcoResponse>;
    newOto(symbol: string, workingType: OrderListWorkingType, workingSide: Side, workingPrice: number, workingQuantity: number, pendingType: OtoPendingType, pendingSide: Side, pendingQuantity: number, options?: newOtoOptions): Promise<newOtoResponse>;
    newOtoco(symbol: string, workingType: OrderListWorkingType, workingSide: Side, workingPrice: number, workingQuantity: number, pendingSide: Side, pendingQuantity: number, pendingAboveType: OrderListAboveBelowType, options?: newOtocoOptions): Promise<newOtocoResponse>
    getOco(options?: getOcoOptions): Promise<getOcoResponse>;
    cancelOco(symbol: string, options?: cancelOcoOptions): Promise<cancelOcoResponse>;
    getAllOco(options?: getAllOcoOptions): Promise<getAllOcoResponse[]>;
    getOpenOco(options?: getOpenOcoOptions): Promise<getOpenOcoResponse[]>;
    accountInformation(options?: accountInformationOptions): Promise<accountInformationResponse>;
    accountTradeList(symbol: string, options?: accountTradeListOptions): Promise<accountTradeListResponse[]>;
    getCurrentOrderCountUsage(options?: getCurrentOrderCountUsageOptions): Promise<getCurrentOrderCountUsageResponse[]>;
    testNewOrderSOR(symbol: string, side: Side, type: OrderType, quantity: number, options?: testNewOrderSOROptions): Promise<Record<string, never> | testNewOrderResponse>;
    newOrderSOR(symbol: string, side: Side, type: OrderType, quantity: number, options?: newOrderSOROptions): Promise<newOrderSORResponse>;
    getPreventedMatches(symbol: string, options?: getPreventedMatchesOptions): Promise<getPreventedMatchesResponse[]>;
    getAllocations(symbol: string, options?: getAllocationsOptions): Promise<getAllocationsResponse[]>;
    getCommissionRates(symbol: string): Promise<getCommissionRatesResponse>;
}