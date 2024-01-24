import { Interval } from '../../enum';
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

export interface MarketMethods {
    testConnectivity(): Promise<Record<string, never>>;
    checkServerTime(): Promise<checkServerTimeResponse>;
    exchangeInformation(options?: exchangeInformationOptions): Promise<exchangeInformationResponse>;
    orderBook(symbol: string, options?: orderBookOptions): Promise<orderBookResponse>;
    recentTradesList(symbol: string, options?: recentTradesListOptions): Promise<recentTradesListResponse[]>;
    oldTradeLookup(symbol: string, options?: oldTradeLookupOptions): Promise<oldTradeLookupResponse[]>;
    compressedAggregateTradesList(symbol: string, options?: compressedAggregateTradesListOptions): Promise<compressedAggregateTradesListResponse[]>;
    klineCandlestickData(symbol: string, interval: Interval, options?: klineCandlestickDataOptions): Promise<klineCandlestickDataResponse[]>;
    uiklines(symbol: string, interval: Interval, options?: uiklinesOptions): Promise<uiklinesResponse[]>;
    currentAveragePrice(symbol: string): Promise<currentAveragePriceResponse>;
    ticker24hr(options?: ticker24hrOptions): Promise<ticker24hrResponse | ticker24hrResponse[]>;
    symbolPriceTicker(options?: symbolPriceTickerOptions): Promise<symbolPriceTickerResponse | symbolPriceTickerResponse[]>;
    symbolOrderBookTicker(options?: symbolOrderBookTickerOptions): Promise<symbolOrderBookTickerResponse | symbolOrderBookTickerResponse[]>;
    rollingWindowPriceChangeStatistics(options?: rollingWindowPriceChangeStatisticsOptions): Promise<rollingWindowPriceChangeStatisticsResponse | rollingWindowPriceChangeStatisticsResponse[]>;
    tradingDayTicker(symbol: string, options?: tradingDayTickerOptions): Promise<tradingDayTickerResponse | tradingDayTickerResponse[]>;
}