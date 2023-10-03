import {
    accountOptions,
    myTradesOptions,
    orderLimitOptions,
    preventedMatchesOptions,
    ocoOrderHistoryOptions,
    orderHistoryOptions,
    accountAllocationOptions
} from './types';

export interface AccountMethods {
    account(options?: accountOptions): void;
    orderLimit(options?: orderLimitOptions): void;
    orderHistory(symbol: string, options?: orderHistoryOptions): void;
    ocoOrderHistory(options?: ocoOrderHistoryOptions): void;
    myTrades(symbol: string, options?: myTradesOptions): void;
    preventedMatches(symbol: string, options?: preventedMatchesOptions): void;
    accountAllocation(symbol: string, options?: accountAllocationOptions): void;
}