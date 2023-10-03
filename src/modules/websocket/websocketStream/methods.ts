import { Interval } from '../../enum';

export interface StreamMethods {
    aggTrade(symbol: string): void;
    trade(symbol: string): void;
    kline(symbol: string, interval: Interval): void;
    miniTicker(symbol: string): void;
    ticker(symbol: string): void;
    rollingWindowTicker(windowSize: string, symbol: string): void;
    bookTicker(symbol: string): void;
    partialBookDepth(symbol: string, levels: string, speed: string): void;
    diffBookDepth(symbol: string, speed: string): void;
    userData(listenKey: string): void;
    unsubscribe(stream: string): void;
}