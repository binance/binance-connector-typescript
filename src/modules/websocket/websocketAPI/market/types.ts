import { ticker24hrResponse } from '../../../restful/market/types';

export interface pingOptions {
    id?: number;
}

export interface exchangeInfoOptions {
    symbol?: string;
    symbols?: string[];
    permissions?: string[];
}

export interface orderbookOptions {
    limit?: number;
}

export interface tradesOptions {
    limit?: number;
}

export interface historicalTradesOptions {
    limit?: number;
    fromId?: number;
}

export interface aggTradesOptions {
    limit?: number;
    fromId?: number;
    startTime?: number;
    endTime?: number;
}

export interface klinesOptions {
    startTime?: number;
    endTime?: number;
    limit?: number;
}

export interface uiKlinesOptions {
    startTime?: number;
    endTime?: number;
    limit?: number;
}

export interface ticker24hrOptions {
    symbol?: string;
    symbols?: string[];
    type?: string;
}

export interface tickerOptions {
    symbol?: string;
    symbols?: string[];
    type?: string;
}

export interface tickerPriceOptions {
    symbol?: string;
    symbols?: string[];
}

export interface tickerBookOptions {
    symbol?: string;
    symbols?: string[];
}

export interface Ticket24hr extends ticker24hrResponse {
    weightedAvgPrice: string;
    lastQty: string;
}
