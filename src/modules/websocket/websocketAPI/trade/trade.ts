import { OrderListAboveBelowType, OrderType, Side, CancelReplaceMode } from '../../../enum';
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
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#place-new-order-trade}
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
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#test-new-order-trade}
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
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#query-order-user_data}
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
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#cancel-order-trade}
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
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#cancel-and-replace-order-trade}
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
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#current-open-orders-user_data}
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
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#cancel-open-orders-trade}
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
         * Place new Order list - OCO (TRADE)
         *
         * Send in an one-cancels the other (OCO) pair, where activation of one order immediately cancels the other.
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#place-new-order-list---oco-trade}
         *
         * @param {string} symbol - Trading symbol, e.g. BNBUSDT
         * @param {Side} side - BUY or SELL
         * @param {number} quantity - Quantity for both legs of the order list.
         * @param {OrderListAboveBelowType} aboveType - Supported values: STOP_LOSS_LIMIT, STOP_LOSS, LIMIT_MAKER
         * @param {OrderListAboveBelowType} belowType - Supported values: STOP_LOSS_LIMIT, STOP_LOSS, LIMIT_MAKER
         * @param {object} [options]
         * @param {string} [options.listClientOrderId] - Arbitrary unique ID among open order lists. Automatically generated if not sent. A new order list with the same `listClientOrderId` is accepted only when the previous one is filled or completely expired. `listClientOrderId` is distinct from the `aboveClientOrderId` and the `belowCLientOrderId`
         * @param {string} [options.aboveClientOrderId] - Arbitrary unique ID among open orders for the above leg order. Automatically generated if not sent
         * @param {number} [options.aboveIcebergQty] - Note that this can only be used if aboveTimeInForce is GTC.
         * @param {number} [options.abovePrice]
         * @param {number} [options.aboveStopPrice] - Can be used if aboveType is STOP_LOSS or STOP_LOSS_LIMIT. Either aboveStopPrice or aboveTrailingDelta or both, must be specified.
         * @param {number} [options.aboveTrailingDelta]
         * @param {number} [options.aboveTimeInForce] - Required if the aboveType is STOP_LOSS_LIMIT.
         * @param {number} [options.aboveStrategyId] - Arbitrary numeric value identifying the above leg order within an order strategy.
         * @param {number} [options.aboveStrategyType] - Arbitrary numeric value identifying the above leg order strategy. Values smaller than 1000000 are reserved and cannot be used.
         * @param {string} [options.belowClientOrderId] - Arbitrary unique ID among open orders for the below leg order. Automatically generated if not sent
         * @param {number} [options.belowIcebergQty] - Note that this can only be used if belowTimeInForce is GTC.
         * @param {number} [options.belowPrice]
         * @param {number} [options.belowStopPrice] - Can be used if belowType is STOP_LOSS or STOP_LOSS_LIMIT. Either belowStopPrice or belowTrailingDelta or both, must be specified.
         * @param {number} [options.belowTrailingDelta]
         * @param {number} [options.belowTimeInForce] - Required if the belowType is STOP_LOSS_LIMIT.
         * @param {number} [options.belowStrategyId] - Arbitrary numeric value identifying the below leg order within an order strategy.
         * @param {number} [options.belowStrategyType] - Arbitrary numeric value identifying the below leg order strategy.Values smaller than 1000000 are reserved and cannot be used.
         * @param {NewOrderRespType} [options.newOrderRespType] - Set the response JSON.
         * @param {SelfTradePreventionMode} [options.selfTradePreventionMode] - The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
         * @param {number} [options.recvWindow] - The value cannot be greater than 60000
         */
        newOCOOrder(symbol: string, side: Side, quantity: number, aboveType: OrderListAboveBelowType, belowType: OrderListAboveBelowType, options?: newOCOOrderOptions) {
            this.sendSignatureMessage('orderList.place.oco', {
                symbol,
                side,
                quantity,
                aboveType,
                belowType,
                ...options
            });
        }

        /**
         * Query OCO
         *
         * Check execution status of an OCO.
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api}
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
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api}
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
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api}
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
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#place-new-order-using-sor-trade}
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
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api#test-new-order-using-sor-trade}
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
