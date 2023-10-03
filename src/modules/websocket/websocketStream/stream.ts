import { isEmptyValue, validateRequiredParameters } from '../../../helpers/utils';
import { Constructor } from '../../../setters/types';
import { Interval } from '../../enum';
import { StreamMethods } from './methods';

/**
 * API websocket endpoints
 * @module Websocket
 */
export function mixinWsStream<T extends Constructor>(base: T): Constructor<StreamMethods> & T {
    return class extends base {
        /**
         * Aggregate Trade Streams
         *
         * The Aggregate Trade Streams push trade information that is aggregated for a single taker order.
         *
         * Stream Name: <symbol>@aggTrade
         * Update Speed: Real-time
         *
         * {@link https://binance-docs.github.io/apidocs/spot/en/#aggregate-trade-streams}
         *
         * @param {string} symbol
         */
        aggTrade(symbol: string) {
            validateRequiredParameters({ symbol });
            this.subscribe(`${symbol.toLowerCase()}@aggTrade`);
        }

        /**
         * Trade Streams
         *
         * The Trade Streams push raw trade information; each trade has a unique buyer and seller.
         *
         * Stream Name: <symbol>@trade
         * Update Speed: Real-time
         *
         * {@link https://binance-docs.github.io/apidocs/spot/en/#trade-streams}
         *
         * @param {string} symbol
         */
        trade(symbol: string) {
            validateRequiredParameters({ symbol });
            this.subscribe(`${symbol.toLowerCase()}@trade`);
        }

        /**
         * Kline/Candlestick Streams
         *
         * The Kline/Candlestick Stream push updates to the current klines/candlestick every second.
         *
         * Stream Name: <symbol>@kline_<interval>
         * Update Speed: 2000ms
         *
         * {@link https://binance-docs.github.io/apidocs/spot/en/#kline-candlestick-streams}
         *
         * @param {string} symbol
         * @param {string} interval - m -> minutes; h -> hours; d -> days; w -> weeks; M -> months:
         *     1m, 3m, 5m, 15m, 30m, 1h, 2h, 4h, 6h, 8h, 12h, 1d, 3d, 1w, 1M
         */
        kline(symbol: string, interval: Interval) {
            validateRequiredParameters({ symbol, interval });
            this.subscribe(`${symbol.toLowerCase()}@kline_${interval}`);
        }

        /**
         * Individual symbol or all symbols mini ticker
         *
         * 24hr rolling window mini-ticker statistics.
         * These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs
         *
         * Stream Name: <symbol>@miniTicker or !miniTicker@arr
         * Update Speed: 1000ms
         *
         * {@link https://binance-docs.github.io/apidocs/spot/en/#individual-symbol-mini-ticker-stream}
         *
         * {@link https://binance-docs.github.io/apidocs/spot/en/#all-market-mini-tickers-stream}
         *
         * @param {string} [symbol]
         */
        miniTicker(symbol: string) {
            let stream = '!miniTicker@arr';
            if (!isEmptyValue(symbol)) {
                stream = `${symbol.toLowerCase()}@miniTicker`;
            }
            this.subscribe(stream);
        }

        /**
         * Individual symbol or all symbols ticker
         *
         * 24hr rollwing window ticker statistics for a single symbol.
         * These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs.
         *
         * Stream Name: <symbol>@ticker or !ticker@arr
         * Update Speed: 1000ms
         *
         * {@link https://binance-docs.github.io/apidocs/spot/en/#individual-symbol-ticker-streams}
         *
         * {@link https://binance-docs.github.io/apidocs/spot/en/#all-market-tickers-stream}
         *
         * @param {string} [symbol]
         */
        ticker(symbol: string) {
            let stream = '!ticker@arr';
            if (!isEmptyValue(symbol)) {
                stream = `${symbol.toLowerCase()}@ticker`;
            }
            this.subscribe(stream);
        }

        /**
         * Individual symbol or all rolling window statistics ticker
         *
         * Rolling window ticker statistics, computed over multiple windows.
         *
         * Stream Name: <symbol>@ticker_<window_size> or !ticker_<window_size>@arr
         * Window Sizes: 1h,4h
         * Update Speed: 1000ms
         *
         * Note: This stream is different from the <symbol>@ticker stream. The open time O always starts on a minute, while the closing time C is the current time of the update.
         *
         * As such, the effective window might be up to 59999ms wider that <window_size>.
         *
         * {@link https://binance-docs.github.io/apidocs/spot/en/#individual-symbol-rolling-window-statistics-streams}
         *
         * {@link https://binance-docs.github.io/apidocs/spot/en/#all-market-rolling-window-statistics-streams}
         *
         * @param {string} [windowSize]
         * @param {string} [symbol]
         */
        rollingWindowTicker(windowSize: string, symbol: string) {
            let stream = `!ticker_${windowSize.toLowerCase()}@arr`;
            if (!isEmptyValue(symbol)) {
                stream = `${symbol.toLowerCase()}@ticker_${windowSize.toLowerCase()}`;
            }
            this.subscribe(stream);
        }

        /**
         * Individual symbol or all symbols book ticker
         *
         * Pushes any update to the best bid or ask's price or quantity in real-time.
         *
         * Stream Name: <symbol>@bookTicker or !bookTicker
         * Update Speed: Real-time
         *
         * {@link https://binance-docs.github.io/apidocs/spot/en/#individual-symbol-book-ticker-streams}
         *
         * {@link https://binance-docs.github.io/apidocs/spot/en/#all-book-tickers-stream}
         *
         * @param {string} [symbol]
         */
        bookTicker(symbol: string) {
            validateRequiredParameters({ symbol });
            this.subscribe(`${symbol.toLowerCase()}@bookTicker`);
        }

        /**
         * Partial Book Depth Streams
         *
         * Top bids and asks, Valid are 5, 10, or 20.
         *
         * Stream Names: <symbol>@depth<levels> or <symbol>@depth<levels>@100ms.
         * Update Speed: 1000ms or 100ms
         *
         * {@link https://binance-docs.github.io/apidocs/spot/en/#partial-book-depth-streams}
         *
         * @param {string} symbol
         * @param {string} levels - 5, 10, or 20
         * @param {string} speed - 1000ms or 100ms
         */
        partialBookDepth(symbol: string, levels: string, speed: string) {
            validateRequiredParameters({ symbol, levels, speed });
            this.subscribe(`${symbol.toLowerCase()}@depth${levels}@${speed}`);
        }

        /**
         * Diff. Depth Stream
         *
         * Order book price and quantity depth updates used to locally manage an order book.
         *
         * Stream Names: <symbol>@depth or <symbol>@depth@100ms
         * Update Speed: 1000ms or 100ms
         *
         * {@link https://binance-docs.github.io/apidocs/spot/en/#diff-depth-stream}
         *
         * @param {string} symbol
         * @param {string} speed - 1000ms or 100ms
         */
        diffBookDepth(symbol: string, speed: string) {
            validateRequiredParameters({ symbol, speed });
            this.subscribe(`${symbol.toLowerCase()}@depth@${speed}`);
        }

        /**
         * Listen to User data stream
         *
         * {@link https://binance-docs.github.io/apidocs/spot/en/#user-data-streams}
         *
         * @param {string} listenKey
         */
        userData(listenKey: string) {
            validateRequiredParameters({ listenKey });
            this.subscribe(listenKey);
        }

        unsubscribe(stream: string) {
            this.unsubscribe(stream);
        }
    };
}
