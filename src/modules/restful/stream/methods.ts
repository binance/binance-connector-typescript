import { listenkeyResponse } from './types';

export interface StreamMethods{
    createListenKey(): Promise<listenkeyResponse>;
    renewListenKey(listenKey: string): Promise<Record<string, never>>;
    closeListenKey(listenKey: string): Promise<Record<string, never>>;
    createMarginListenKey(): Promise<listenkeyResponse>;
    renewMarginListenKey(listenKey: string): Promise<Record<string, never>>;
    closeMarginListenKey(listenKey: string): Promise<Record<string, never>>;
    createIsolatedMarginListenKey(symbol: string): Promise<listenkeyResponse>;
    renewIsolatedMarginListenKey(symbol:string, listenKey: string): Promise<Record<string, never>>;
    closeIsolatedMarginListenKey(symbol:string, listenKey: string): Promise<Record<string, never>>;
}