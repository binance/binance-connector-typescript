import {
    cancelOCOOrderOptions,
    cancelOpenOrdersOptions,
    cancelOrderOptions,
    cancelReplaceOrderOptions,
    getOCOOpenOrdersOptions,
    getOCOOrderOptions,
    getOrderOptions,
    newOCOOrderOptions,
    newOrderOptions,
    newOrderSOROptions,
    openOrdersOptions,
    testNewOrderOptions
} from './types';
import { CancelReplaceMode, OrderType, Side } from '../../../enum';

export interface TradeMethods {
    newOrder(symbol: string, side: Side, type: OrderType, options?: newOrderOptions): void;
    testNewOrder(symbol: string, side: Side, type: OrderType, options?: testNewOrderOptions): void;
    getOrder(symbol: string, orderId: number, options?: getOrderOptions): void;
    cancelOrder(symbol: string, orderId: number, options?: cancelOrderOptions): void;
    cancelReplaceOrder(symbol: string, cancelReplaceMode: CancelReplaceMode, cancelOrderId: number, side: Side, type: OrderType, options?: cancelReplaceOrderOptions): void;
    openOrders(options?: openOrdersOptions): void;
    cancelOpenOrders(symbol: string, options?: cancelOpenOrdersOptions): void;
    newOCOOrder(symbol: string, side: Side, price: number, quantity: number, options?: newOCOOrderOptions): void;
    getOCOOrder(origClientOrderId: string, options?: getOCOOrderOptions): void;
    cancelOCOOrder(symbol: string, orderListId: number, options?: cancelOCOOrderOptions): void;
    getOCOOpenOrders(options?: getOCOOpenOrdersOptions): void;
    newOrderSOR(symbol: string, side: Side, type: OrderType, quantity: number, options?: newOrderSOROptions): void;
    testNewOrderSOR(symbol: string, side: Side, type: OrderType, quantity: number, options?: newOrderSOROptions): void;
}