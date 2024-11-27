import { Constructor } from '../../../../setters/types';
import { Interval } from '../../../enum';
import {
    aggTradesOptions,
    exchangeInfoOptions,
    historicalTradesOptions,
    klinesOptions,
    orderbookOptions,
    pingOptions,
    ticker24hrOptions,
    tickerBookOptions,
    tickerOptions,
    tickerPriceOptions,
    tradesOptions,
    uiKlinesOptions
} from './types';
import { MarketMethods } from './methods';

/**
 * Websocket API market endpoints
 * @module Websocket
 */
export function mixinWsMarket<T extends Constructor>(base: T): Constructor<MarketMethods> & T {
    return class extends base {
        /**
         * Test connectivity
         *
         * Test connectivity to the WebSocket API.
         *
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#test-connectivity}
         */
        ping(options?: pingOptions) {
            this.sendMessage('ping', options);
        }

        /**
         * Check server time
         *
         * Test connectivity to the WebSocket API and get the current server time.
         *
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#check-server-time}
         */
        time() {
            this.sendMessage('time', {});
        }

        /**
         * Exchange information
         *
         * Query current exchange trading rules, rate limits, and symbol information.
         *
         * @param {object} [options]
         * @param {string} [options.symbol]
         * @param {string[]} [options.symbols]
         * @param {string[]} [options.permissions]
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#exchange-information}
         */
        exchangeInfo(options?: exchangeInfoOptions) {
            if (options && options.symbol && Object.prototype.hasOwnProperty.call(options, 'symbol')) {
                options.symbol = options.symbol.toUpperCase();
            }
            if (options && options.symbols && Object.prototype.hasOwnProperty.call(options, 'symbols')) {
                options.symbols = options.symbols.map(symbol => symbol.toUpperCase());
            }
            this.sendMessage('exchangeInfo', options);
        }

        /**
         * Order book
         *
         * Get current order book.
         *
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#order-book}
         * @param {string} symbol
         * @param {object} [options]
         * @param {number} [options.limit]
         *
         */
        orderbook(symbol: string, options?: orderbookOptions) {
            const limit = options ? options.limit : 100;
            this.sendMessage('depth', {
                limit,
                symbol,
                ...options
            });
        }

        /**
         * Recent trades
         *
         * Get recent trades.
         *
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#recent-trades}
         * @param {string} symbol
         * @param {object} [options]
         * @param {number} [options.limit]
         *
         */
        trades(symbol: string, options?: tradesOptions) {
            const limit = options ? options.limit : 500;
            this.sendMessage('trades.recent', {
                limit,
                symbol,
                ...options
            });
        }

        /**
         * Historical trades 
         *
         * Get historical trades.
         *
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#historical-trades}
         * @param {string} symbol
         * @param {object} [options]
         * @param {number} [options.limit]
         * @param {number} [options.fromId]
         *
         */
        historicalTrades(symbol: string, options?: historicalTradesOptions) {
            const limit = options ? options.limit : 500;
            this.sendMessageWithAPIKey('trades.historical', {
                limit,
                symbol,
                ...options
            });
        }

        /**
         * Aggregate trades 
         *
         * Get aggregate trades.
         *
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#aggregate-trades}
         * @param {string} symbol
         * @param {object} [options]
         * @param {number} [options.limit]
         * @param {number} [options.fromId]
         * @param {number} [options.startTime]
         * @param {number} [options.endTime]
         *
         */
        aggTrades(symbol: string, options?: aggTradesOptions) {
            const limit = options ? options.limit : 500;
            this.sendMessage('trades.aggregate', {
                limit,
                symbol,
                ...options
            });
        }

        /**
         * Klines 
         *
         * Get klines (candlestick bars).
         *
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#klines}
         * @param {string} symbol
         * @param {Interval} interval
         * @param {object} [options]
         * @param {number} [options.startTime]
         * @param {number} [options.endTime]
         * @param {number} [options.limit]
         *
         */
        klines(symbol: string, interval: Interval, options?: klinesOptions) {
            const limit = options ? options.limit : 500;
            this.sendMessage('klines', {
                limit,
                interval,
                symbol,
                ...options
            });
        }

        /**
         * UI Klines 
         *
         * Get klines (candlestick bars) optimized for presentation.
         *
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#ui-klines}
         * @param {string} symbol
         * @param {Interval} interval
         * @param {object} [options]
         * @param {number} [options.startTime]
         * @param {number} [options.endTime]
         * @param {number} [options.limit]
         *
         */
        uiKlines(symbol: string, interval: Interval, options?: uiKlinesOptions) {
            const limit = options ? options.limit : 500;
            this.sendMessage('uiKlines', {
                limit,
                interval,
                symbol,
                ...options
            });
        }

        /**
         * Current average price 
         *
         * Get current average price for a symbol.
         *
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#current-average-price}
         * @param {string} symbol
         *
         */
        avgPrice(symbol: string) {
            this.sendMessage('avgPrice', { symbol });
        }

        /**
         * 24hr ticker price change statistics 
         *
         * Get 24-hour rolling window price change statistics.
         *
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#24hr-ticker-price-change-statistics}
         * @param {object} [options]
         * @param {string} [options.symbol]
         * @param {string[]} [options.symbols]
         * @param {string} [options.type]
         *
         */
        ticker24hr(options?: ticker24hrOptions) {
            this.sendMessage('ticker.24hr', options);
        }

        /**
         * Rolling window price change statistics 
         *
         * Get rolling window price change statistics with a custom window.
         *
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#rolling-window-price-change-statistics}
         * @param {object} [options]
         * @param {string} [options.symbol]
         * @param {string[]} [options.symbols]
         * @param {string} [options.type]
         *
         */
        ticker(options?: tickerOptions) {
            this.sendMessage('ticker', options);
        }

        /**
         * Symbol price ticker 
         *
         * Get the latest market price for a symbol.
         *
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#symbol-price-ticker}
         * @param {object} [options]
         * @param {string} [options.symbol]
         * @param {string[]} [options.symbols]
         *
         */
        tickerPrice(options?: tickerPriceOptions) {
            this.sendMessage('ticker.price', options);
        }

        /**
         * Symbol order book ticker 
         *
         * Get the current best price and quantity on the order book.
         *
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/public-api-requests#symbol-order-book-ticker}
         * @param {object} [options]
         * @param {string} [options.symbol]
         * @param {string[]} [options.symbols]
         *
         */
        tickerBook(options?: tickerBookOptions) {
            this.sendMessage('ticker.book', options);
        }
    };
}
