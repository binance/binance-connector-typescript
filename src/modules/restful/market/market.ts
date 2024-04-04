import { Constructor } from '../../../setters/types';
import { validateRequiredParameters } from '../../../helpers/utils';
import {
    checkServerTimeResponse,
    compressedAggregateTradesListOptions,
    compressedAggregateTradesListResponse,
    currentAveragePriceResponse,
    exchangeInformationOptions,
    exchangeInformationResponse,
    klineCandlestickDataOptions,
    klineCandlestickDataResponse,
    oldTradeLookupOptions,
    oldTradeLookupResponse,
    orderBookOptions,
    orderBookResponse,
    recentTradesListOptions,
    recentTradesListResponse,
    rollingWindowPriceChangeStatisticsOptions,
    rollingWindowPriceChangeStatisticsResponse,
    symbolOrderBookTickerOptions,
    symbolOrderBookTickerResponse,
    symbolPriceTickerOptions,
    symbolPriceTickerResponse,
    ticker24hrOptions,
    ticker24hrResponse,
    tradingDayTickerOptions,
    tradingDayTickerResponse,
    uiklinesOptions,
    uiklinesResponse
} from './types';
import { MarketMethods } from './methods';
import { Interval } from '../../enum';

export function mixinMarket<T extends Constructor>(base: T): Constructor<MarketMethods> & T {
    return class extends base {
        /**
        * Test Connectivity {@link https://binance-docs.github.io/apidocs/spot/en/#test-connectivity}
        */
        async testConnectivity(): Promise<Record<string, never>> {
            return await this.makeRequest('GET', '/api/v3/ping');
        }


        /**
        * Check Server Time {@link https://binance-docs.github.io/apidocs/spot/en/#check-server-time}
        */
        async checkServerTime(): Promise<checkServerTimeResponse> {
            return await this.makeRequest('GET', '/api/v3/time');
        }


        /**
        * Exchange Information {@link https://binance-docs.github.io/apidocs/spot/en/#exchange-information}
        *
        * @param {object} [options]
        * @param {string} [options.symbol] - Trading symbol, e.g. BNBUSDT
        * @param {string[]} [options.symbols]
        * @param {string[]} [options.permissions]
        */
        async exchangeInformation(options?: exchangeInformationOptions): Promise<exchangeInformationResponse> {
            const url = this.preparePath('/api/v3/exchangeInfo',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Order Book {@link https://binance-docs.github.io/apidocs/spot/en/#order-book}
        *
        * @param {string} symbol - Trading symbol, e.g. BNBUSDT
        * @param {object} [options]
        * @param {number} [options.limit] - If limit > 5000, then the response will truncate to 5000
        */
        async orderBook(symbol: string, options?: orderBookOptions): Promise<orderBookResponse> {
            validateRequiredParameters({ symbol });
            const url = this.preparePath('/api/v3/depth',
                Object.assign(
                    options ? options : {},
                    {
                        symbol: symbol.toUpperCase()
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Recent Trades List {@link https://binance-docs.github.io/apidocs/spot/en/#recent-trades-list}
        *
        * @param {string} symbol - Trading symbol, e.g. BNBUSDT
        * @param {object} [options]
        * @param {number} [options.limit] - Default 500; max 1000.
        */
        async recentTradesList(symbol: string, options?: recentTradesListOptions): Promise<recentTradesListResponse[]> {
            validateRequiredParameters({ symbol });
            const url = this.preparePath('/api/v3/trades',
                Object.assign(
                    options ? options : {},
                    {
                        symbol: symbol.toUpperCase()
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Old Trade Lookup (MARKET_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#old-trade-lookup-market_data}
        *
        * @param {string} symbol - Trading symbol, e.g. BNBUSDT
        * @param {object} [options]
        * @param {number} [options.limit] - Default 500; max 1000.
        * @param {number} [options.fromId] - Trade id to fetch from. Default gets most recent trades.
        */
        async oldTradeLookup(symbol: string, options?: oldTradeLookupOptions): Promise<oldTradeLookupResponse[]> {
            validateRequiredParameters({ symbol });
            const url = this.preparePath('/api/v3/historicalTrades',
                Object.assign(
                    options ? options : {},
                    {
                        symbol: symbol.toUpperCase()
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Compressed/Aggregate Trades List {@link https://binance-docs.github.io/apidocs/spot/en/#compressed-aggregate-trades-list}
        *
        * @param {string} symbol - Trading symbol, e.g. BNBUSDT
        * @param {object} [options]
        * @param {number} [options.fromId] - Trade id to fetch from. Default gets most recent trades.
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.limit] - Default 500; max 1000.
        */
        async compressedAggregateTradesList(symbol: string, options?: compressedAggregateTradesListOptions): Promise<compressedAggregateTradesListResponse[]> {
            validateRequiredParameters({ symbol });
            const url = this.preparePath('/api/v3/aggTrades',
                Object.assign(
                    options ? options : {},
                    {
                        symbol: symbol.toUpperCase()
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Kline/Candlestick Data {@link https://binance-docs.github.io/apidocs/spot/en/#kline-candlestick-data}
        *
        * @param {string} symbol - Trading symbol, e.g. BNBUSDT
        * @param {Interval} interval - kline intervals
        * @param {object} [options]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.timeZone] - Default: 0 (UTC)
        * @param {number} [options.limit] - Default 500; max 1000.
        */
        async klineCandlestickData(symbol: string, interval: Interval, options?: klineCandlestickDataOptions): Promise<klineCandlestickDataResponse[]> {
            validateRequiredParameters({ symbol, interval });
            const url = this.preparePath('/api/v3/klines',
                Object.assign(
                    options ? options : {},
                    {
                        symbol: symbol.toUpperCase(),
                        interval: interval
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * UIKlines {@link https://binance-docs.github.io/apidocs/spot/en/#uiklines}
        *
        * @param {string} symbol - Trading symbol, e.g. BNBUSDT
        * @param {Interval} interval - kline intervals
        * @param {object} [options]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.timeZone] - Default: 0 (UTC)
        * @param {number} [options.limit] - Default 500; max 1000.
        */
        async uiklines(symbol: string, interval: Interval, options?: uiklinesOptions): Promise<uiklinesResponse[]> {
            validateRequiredParameters({ symbol, interval });
            const url = this.preparePath('/api/v3/uiKlines',
                Object.assign(
                    options ? options : {},
                    {
                        symbol: symbol.toUpperCase(),
                        interval: interval
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Current Average Price {@link https://binance-docs.github.io/apidocs/spot/en/#current-average-price}
        *
        * @param {string} symbol - Trading symbol, e.g. BNBUSDT
        */
        async currentAveragePrice(symbol: string): Promise<currentAveragePriceResponse> {
            validateRequiredParameters({ symbol });
            const url = this.preparePath('/api/v3/avgPrice',
                {
                    symbol: symbol.toUpperCase()
                });
            return await this.makeRequest('GET', url);
        }


        /**
        * 24hr Ticker Price Change Statistics {@link https://binance-docs.github.io/apidocs/spot/en/#24hr-ticker-price-change-statistics}
        *
        * @param {object} [options]
        * @param {string} [options.symbol] - Trading symbol, e.g. BNBUSDT
        * @param {string} [options.symbols]
        * @param {string} [options.type] - Supported values: FULL or MINI., If none provided, the default is FULL
        */
        async ticker24hr(options?: ticker24hrOptions): Promise<ticker24hrResponse | ticker24hrResponse[]> {
            const url = this.preparePath('/api/v3/ticker/24hr',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Symbol Price Ticker {@link https://binance-docs.github.io/apidocs/spot/en/#symbol-price-ticker}
        *
        * @param {object} [options]
        * @param {string} [options.symbol] - Trading symbol, e.g. BNBUSDT
        * @param {string} [options.symbols]
        */
        async symbolPriceTicker(options?: symbolPriceTickerOptions): Promise<symbolPriceTickerResponse | symbolPriceTickerResponse[]> {
            const url = this.preparePath('/api/v3/ticker/price',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Symbol Order Book Ticker {@link https://binance-docs.github.io/apidocs/spot/en/#symbol-order-book-ticker}
        *
        * @param {object} [options]
        * @param {string} [options.symbol] - Trading symbol, e.g. BNBUSDT
        * @param {string} [options.symbols]
        */
        async symbolOrderBookTicker(options?: symbolOrderBookTickerOptions): Promise<symbolOrderBookTickerResponse | symbolOrderBookTickerResponse[]> {
            const url = this.preparePath('/api/v3/ticker/bookTicker',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Rolling window price change statistics {@link https://binance-docs.github.io/apidocs/spot/en/#rolling-window-price-change-statistics}
        *
        * @param {object} [options]
        * @param {string} [options.symbol] - Trading symbol, e.g. BNBUSDT
        * @param {string} [options.symbols]
        * @param {string} [options.windowSize] - Defaults to 1d if no parameter provided., Supported windowSize values:, 1m,2m....59m for minutes, 1h, 2h....23h - for hours, 1d...7d - for days., , Units cannot be combined (e.g. 1d2h is not allowed)
        * @param {string} [options.type] - Supported values: FULL or MINI., If none provided, the default is FULL
        */
        async rollingWindowPriceChangeStatistics(options?: rollingWindowPriceChangeStatisticsOptions): Promise<rollingWindowPriceChangeStatisticsResponse | rollingWindowPriceChangeStatisticsResponse[]> {
            const url = this.preparePath('/api/v3/ticker',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
         * Trading Day Ticker {@link https://binance-docs.github.io/apidocs/spot/en/#trading-day-ticker}
         * 
         * @param {object} [options]
         * @param {string} [options.symbol] - Trading symbol, e.g. BNBUSDT
         * @param {string[]} [options.symbols] - The maximum number of symbols allowed in a request is 100.
         * @param {string} [options.timeZone] - Default: 0 (UTC)
         * @param {string} [options.type] - Supported values: FULL or MINI., If none provided, the default is FULL
         */
        async tradingDayTicker(options: tradingDayTickerOptions): Promise<tradingDayTickerResponse | tradingDayTickerResponse[]> {
            if (options.symbol && options.symbols) throw new Error('Symbol and Symbols cannot be sent together.');
            if (options && options.symbol && Object.prototype.hasOwnProperty.call(options, 'symbol')) {
                options.symbol = options.symbol.toUpperCase();
            }
            if (options && options.symbols && Object.prototype.hasOwnProperty.call(options, 'symbols')) {
                options.symbols = options.symbols.map(symbol => symbol.toUpperCase());
            }
            const url = this.preparePath('/api/v3/ticker/tradingDay',
                Object.assign(
                    options ? options : {},
                )
            );
            return await this.makeRequest('GET', url);
        }
    };
}
