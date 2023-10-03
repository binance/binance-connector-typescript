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
import { Interval } from '../../../enum';

export interface MarketMethods {
    ping(options?: pingOptions): void;
    time(): void;
    exchangeInfo(options?: exchangeInfoOptions): void;
    orderbook(symbol: string, options?: orderbookOptions): void;
    trades(symbol: string, options?: tradesOptions): void;
    historicalTrades(symbol: string, options?: historicalTradesOptions): void;
    aggTrades(symbol: string, options?: aggTradesOptions): void;
    klines(symbol: string, interval: Interval, options?: klinesOptions): void;
    uiKlines(symbol: string, interval: Interval, options?: uiKlinesOptions): void;
    avgPrice(symbol: string): void;
    ticker24hr(options?: ticker24hrOptions): void;
    ticker(options?: tickerOptions): void;
    tickerPrice(options?: tickerPriceOptions): void;
    tickerBook(options?: tickerBookOptions): void;
}