import {
    accountOptions,
    myTradesOptions,
    orderLimitOptions,
    preventedMatchesOptions,
    ocoOrderHistoryOptions,
    orderHistoryOptions,
    accountAllocationOptions
} from './types';
import { AccountMethods } from './methods';
import { Constructor } from '../../../../setters/types';

/**
 * Websocket API Account endpoints
 * @module Websocket
 */
export function mixinWsAccount<T extends Constructor>(base: T): Constructor<AccountMethods> & T {
    return class extends base {
        /**
         * Account information
         * Query information about your account.
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#account-information-user_data}
         *
         * @param {object} [options]
         * @param {number} [options.recvWindow]
         */
        account(options: accountOptions) {
            this.sendSignatureMessage('account.status', options);
        }

        /**
         * Account order rate limits
         * Query your current order rate limit.
         *
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#unfilled-order-count-user_data}
         *
         * @param {object} [options]
         * @param {number} [options.recvWindow]
         */
        orderLimit(options: orderLimitOptions) {
            this.sendSignatureMessage('account.rateLimits.orders', options);
        }

        /**
         * Account order history
         *
         * Query information about all your orders – active, canceled, filled – filtered by time range.
         *
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#account-order-history-user_data}
         *
         * @param {string} symbol
         * @param {object} [options]
         * @param {number} [options.orderId]
         * @param {number} [options.startTime]
         * @param {number} [options.endTime]
         * @param {number} [options.limit]
         * @param {number} [options.recvWindow]
         */
        orderHistory(symbol: string, options?: orderHistoryOptions) {
            const limit = options ? options.limit : 500;
            this.sendSignatureMessage('allOrders', {
                symbol,
                limit,
                ...options
            });
        }

        /**
         * Account OCO history
         *
         * Query information about all your OCOs, filtered by time range.
         *
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#account-order-list-history-user_data}
         *
         * @param {object} [options]
         * @param {number} [options.fromId]
         * @param {number} [options.startTime]
         * @param {number} [options.endTime]
         * @param {number} [options.limit]
         * @param {number} [options.recvWindow]
         */
        ocoOrderHistory(options?: ocoOrderHistoryOptions) {
            const limit = options ? options.limit : 500;
            this.sendSignatureMessage('allOrderLists', {
                limit,
                ...options
            });
        }

        /**
         * Account trade history
         *
         * Query information about all your trades, filtered by time range.
         *
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#account-trade-history-user_data}
         *
         * @param {string} [symbol]
         * @param {object} [options]
         * @param {number} [options.orderId]
         * @param {number} [options.startTime]
         * @param {number} [options.endTime]
         * @param {number} [options.fromId]
         * @param {number} [options.limit]
         * @param {number} [options.recvWindow]
         */
        myTrades(symbol: string, options?: myTradesOptions) {
            const limit = options ? options.limit : 500;
            this.sendSignatureMessage('myTrades', {
                symbol,
                limit,
                ...options
            });
        }

        /**
         * Account prevented matches
         *
         * Displays the list of orders that were expired because of STP trigger.
         *
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#account-prevented-matches-user_data}
         *
         * @param {string} [symbol]
         * @param {object} [options]
         * @param {number} [options.preventedMatchId]
         * @param {number} [options.orderId]
         * @param {number} [options.fromPreventedMatchId]
         * @param {number} [options.limit]
         * @param {number} [options.recvWindow]
         */
        preventedMatches(symbol: string, options?: preventedMatchesOptions) {
            const limit = options ? options.limit : 500;
            this.sendSignatureMessage('myPreventedMatches', {
                symbol,
                limit,
                ...options
            });
        }

        /**
         * Retrieves allocations resulting from SOR order placement.
         * 
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#account-allocations-user_data}
         * 
         * @param {string} [symbol]
         * @param {object} [options]
         * @param {number} [options.startTime]
         * @param {number} [options.endTime]
         * @param {number} [options.fromAllocationId]
         * @param {number} [options.limit]
         * @param {number} [options.orderId]
         * @param {number} [options.recvWindow]
         */
        accountAllocation(symbol: string, options?: accountAllocationOptions) {
            const limit = options ? options.limit : 500;
            this.sendSignatureMessage('myAllocations', {
                symbol,
                limit,
                ...options
            });
        }
    };
}
