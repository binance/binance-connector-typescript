import { sendMessageOptions } from '../../../../setters/types';
import { ticker24hrResponse } from '../../../restful/market/types';

export interface pingOptions {
    id?: number;
}

export interface exchangeInfoOptions extends sendMessageOptions {
    symbol?: string;
    symbols?: string[];
    permissions?: string[];
}

export interface orderbookOptions extends sendMessageOptions {
    limit?: number;
}

export interface tradesOptions extends sendMessageOptions {
    limit?: number;
}

export interface historicalTradesOptions extends sendMessageOptions {
    limit?: number;
    fromId?: number;
}

export interface aggTradesOptions extends sendMessageOptions {
    limit?: number;
    fromId?: number;
    startTime?: number;
    endTime?: number;
}

export interface klinesOptions extends sendMessageOptions {
    startTime?: number;
    endTime?: number;
    limit?: number;
}

export interface uiKlinesOptions extends sendMessageOptions {
    startTime?: number;
    endTime?: number;
    limit?: number;
}

export interface ticker24hrOptions extends sendMessageOptions {
    symbol?: string;
    symbols?: string[];
    type?: string;
}

export interface tickerOptions extends sendMessageOptions {
    symbol?: string;
    symbols?: string[];
    type?: string;
}

export interface tickerPriceOptions extends sendMessageOptions {
    symbol?: string;
    symbols?: string[];
}

export interface tickerBookOptions extends sendMessageOptions {
    symbol?: string;
    symbols?: string[];
}

export interface Ticket24hr extends ticker24hrResponse, sendMessageOptions {
    weightedAvgPrice: string;
    lastQty: string;
}
