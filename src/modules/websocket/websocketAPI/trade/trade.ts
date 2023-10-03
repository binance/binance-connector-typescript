import { OrderType, Side, CancelReplaceMode } from '../../../enum';
import { Constructor } from '../../../../setters/types';
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
import { TradeMethods } from './methods';

/**
 * Websocket API Trading endpoints
 * @module Websocket
 */
export function mixinWsTrade<T extends Constructor>(base: T): Constructor<TradeMethods> & T {
    return class extends base {
        /**
         * Place new order
         *
         * Send in a new order.
         *
         * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#place-new-order-trade}
         *
         * @param {string} symbol
         * @param {Side} side
         * @param {OrderType} type
         * @param {object} [options]
         * @param {TimeInForce} [options.timeInForce]
         * @param {number} [options.price]
         * @param {number} [options.quantity]
         * @param {number} [options.quoteOrderQty]
         * @param {string} [options.newClientOrderId]
         * @param {NewOrderRespType} [options.newOrderRespType]
         * @param {number} [options.stopPrice]
         * @param {number} [options.trailingDelta]
         * @param {number} [options.icebergQty]
         * @param {number} [options.strategyId]
         * @param {number} [options.strategyType]
         * @param {SelfTradePreventionMode} [options.selfTradePreventionMode]
         * @param {number} [options.recvWindow]
         */
        newOrder(symbol: string, side: Side, type: OrderType, options?: newOrderOptions) {
            this.sendSignatureMessage('order.place', {
                symbol,
                side,
                type,
                ...options
            });
        }

        /**
         * Test new order
         *
         * Test a new order.
         *
         * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#test-new-order-trade}
         *
         * @param {string} symbol
         * @param {Side} side
         * @param {OrderType} type
         * @param {object} [options]
         * @param {TimeInForce} [options.timeInForce]
         * @param {number} [options.price]
         * @param {number} [options.quantity]
         * @param {number} [options.quoteOrderQty]
         * @param {string} [options.newClientOrderId]
         * @param {NewOrderRespType} [options.newOrderRespType]
         * @param {number} [options.stopPrice]
         * @param {number} [options.trailingDelta]
         * @param {number} [options.icebergQty]
         * @param {number} [options.strategyId]
         * @param {number} [options.strategyType]
         * @param {SelfTradePreventionMode} [options.selfTradePreventionMode]
         * @param {number} [options.recvWindow]
         */
        testNewOrder(symbol: string, side: Side, type: OrderType, options?: testNewOrderOptions) {
            this.sendSignatureMessage('order.test', {
                symbol,
                side,
                type,
                ...options
            });
        }

        /**
         * Query order
         *
         * Check execution status of an order.
         *
         * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#query-order-user_data}
         *
         * @param {string} symbol
         * @param {number} orderId
         * @param {object} [options]
         * @param {string} [options.origClientOrderId]
         * @param {number} [options.recvWindow]
         */
        getOrder(symbol: string, orderId: number, options?: getOrderOptions) {
            this.sendSignatureMessage('order.status', {
                symbol,
                orderId,
                ...options
            });
        }

        /**
         * Cancel order
         *
         * Cancel an active order.
         *
         * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#cancel-order-trade}
         *
         * @param {string} symbol
         * @param {number} orderId
         * @param {object} [options]
         * @param {string} [options.origClientOrderId]
         * @param {string} [options.newClientOrderId]
         * @param {CancelRestrictions} [options.cancelRestrictions]
         * @param {number} [options.recvWindow]
         */
        cancelOrder(symbol: string, orderId: number, options?: cancelOrderOptions) {
            this.sendSignatureMessage('order.cancel', {
                symbol,
                orderId,
                ...options
            });
        }

        /**
         * Cancel and replace order
         *
         * Cancel an existing order and immediately place a new order instead of the canceled one.
         *
         * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#cancel-and-replace-order-trade}
         *
         * @param {string} symbol
         * @param {string} cancelReplaceMode
         * @param {number} cancelOrderId
         * @param {Side} side
         * @param {OrderType} type
         * @param {object} [options]
         * @param {TimeInForce} [options.timeInForce]
         * @param {string} [options.cancelOrigClientOrderId]
         * @param {string} [options.cancelNewClientOrderId]
         * @param {number} [options.price]
         * @param {number} [options.quantity]
         * @param {number} [options.quoteOrderQty]
         * @param {string} [options.newClientOrderId]
         * @param {NewOrderRespType} [options.newOrderRespType]
         * @param {number} [options.stopPrice]
         * @param {number} [options.trailingDelta]
         * @param {number} [options.icebergQty]
         * @param {number} [options.strategyId]
         * @param {string} [options.strategyType]
         * @param {SelfTradePreventionMode} [options.selfTradePreventionMode]
         * @param {CancelRestrictions} [options.cancelRestrictions]
         * @param {number} [options.recvWindow]
         */
        cancelReplaceOrder(symbol: string, cancelReplaceMode: CancelReplaceMode, cancelOrderId: number, side: Side, type: OrderType, options?: cancelReplaceOrderOptions) {
            this.sendSignatureMessage('order.cancelReplace', {
                symbol,
                cancelReplaceMode,
                cancelOrderId,
                side,
                type,
                ...options
            });
        }

        /**
         * Current open orders
         *
         * Query execution status of all open orders.
         *
         * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#current-open-orders-user_data}
         *
         * @param {object} [options]
         * @param {string} [options.symbol]
         * @param {number} [options.recvWindow]
         */
        openOrders(options?: openOrdersOptions) {
            this.sendSignatureMessage('openOrders.status', {
                ...options
            });
        }

        /**
         * Cancel open orders
         *
         * Cancel all open orders on a symbol, including OCO orders.
         *
         * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#cancel-open-orders-trade}
         *
         * @param {string} symbol
         * @param {object} [options]
         * @param {number} [options.recvWindow]
         */
        cancelOpenOrders(symbol: string, options?: cancelOpenOrdersOptions) {
            this.sendSignatureMessage('openOrders.cancelAll', {
                symbol,
                ...options
            });
        }

        /**
         * Place new OCO
         *
         * Send in a new OCO order.
         *
         * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#place-new-oco-trade}
         *
         * @param {string} symbol
         * @param {Side} side
         * @param {number} price
         * @param {number} quantity
         * @param {object} [options]
         * @param {string} [options.listClientOrderId]
         * @param {string} [options.limitClientOrderId]
         * @param {number} [options.limitIcebergQty]
         * @param {number} [options.limitStrategyId]
         * @param {number} [options.limitStrategyType]
         * @param {number} [options.stopPrice]
         * @param {number} [options.trailingDelta]
         * @param {number} [options.stopClientOrderId]
         * @param {number} [options.stopLimitPrice]
         * @param {StopLimitTimeInForce} [options.stopLimitTimeInForce]
         * @param {number} [options.stopIcebergQty]
         * @param {number} [options.stopStrategyId]
         * @param {string} [options.stopStrategyType]
         * @param {NewOrderRespType} [options.newOrderRespType]
         * @param {SelfTradePreventionMode} [options.selfTradePreventionMode]
         * @param {number} [options.recvWindow]
         */
        newOCOOrder(symbol: string, side: Side, price: number, quantity: number, options?: newOCOOrderOptions) {
            this.sendSignatureMessage('orderList.place', {
                symbol,
                side,
                price,
                quantity,
                ...options
            });
        }

        /**
         * Query OCO
         *
         * Check execution status of an OCO.
         *
         * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#query-oco-user_data}
         *
         * @param {string} origClientOrderId
         * @param {object} [options]
         * @param {number} [options.orderListId]
         * @param {number} [options.recvWindow]
         */
        getOCOOrder(origClientOrderId: string, options?: getOCOOrderOptions) {
            this.sendSignatureMessage('orderList.status', {
                origClientOrderId,
                ...options
            });
        }

        /**
         * Query OCO
         *
         * Check execution status of an OCO.
         *
         * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#cancel-oco-trade}
         *
         * @param {string} symbol
         * @param {number} orderListId
         * @param {object} [options]
         * @param {string} [options.listClientOrderId]
         * @param {string} [options.newClientOrderId]
         * @param {number} [options.recvWindow]
         */
        cancelOCOOrder(symbol: string, orderListId: number, options?: cancelOCOOrderOptions) {
            this.sendSignatureMessage('orderList.cancel', {
                symbol,
                orderListId,
                ...options
            });
        }

        /**
         * Current open OCOs 
         *
         * Query execution status of all open OCOs.
         *
         * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#current-open-ocos-user_data}
         *
         * @param {object} [options]
         * @param {number} [options.recvWindow]
         */
        getOCOOpenOrders(options?: getOCOOpenOrdersOptions) {
            this.sendSignatureMessage('openOrderLists.status', options);
        }

        /**
         * Place new order using SOR
         * 
         * Places an order using smart order routing (SOR).
         * 
         * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#place-new-order-using-sor-trade}
         * 
         * @param {string} symbol
         * @param {Side} side
         * @param {OrderType} type
         * @param {number} quantity
         * @param {object} [options]
         * @param {TimeInForce} [options.timeInForce]
         * @param {number} [options.price]
         * @param {string} [options.newClientOrderId]
         * @param {NewOrderRespType} [options.newOrderRespType]
         * @param {number} [options.icebergQty]
         * @param {number} [options.strategyId]
         * @param {number} [options.strategyType]
         * @param {SelfTradePreventionMode} [options.selfTradePreventionMode]
         * @param {number} [options.recvWindow]
         */
        newOrderSOR(symbol: string, side: Side, type: OrderType, quantity: number, options?: newOrderSOROptions) {
            this.sendSignatureMessage('sor.order.place', {
                symbol,
                side,
                type,
                quantity,
                ...options
            });
        }

        /**
         * Place new order using SOR
         * 
         * Places an order using smart order routing (SOR).
         * 
         * {@link https://binance-docs.github.io/apidocs/websocket_api/en/#test-new-order-using-sor-trade}
         * 
         * @param {string} symbol
         * @param {Side} side
         * @param {OrderType} type
         * @param {number} quantity
         * @param {object} [options]
         * @param {TimeInForce} [options.timeInForce]
         * @param {number} [options.price]
         * @param {string} [options.newClientOrderId]
         * @param {NewOrderRespType} [options.newOrderRespType]
         * @param {number} [options.icebergQty]
         * @param {number} [options.strategyId]
         * @param {number} [options.strategyType]
         * @param {SelfTradePreventionMode} [options.selfTradePreventionMode]
         * @param {number} [options.recvWindow]
         */
        testNewOrderSOR(symbol: string, side: Side, type: OrderType, quantity: number, options?: newOrderSOROptions) {
            this.sendSignatureMessage('sor.order.test', {
                symbol,
                side,
                type,
                quantity,
                ...options
            });
        }
    };
}
