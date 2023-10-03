import { AxiosProxyConfig } from 'axios';
import { WebsocketOptions } from '../modules/websocket/websocketBase/types';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export type Constructor<T = any> = new (...args: any[]) => T;

export interface SpotOptions {
    baseURL?: string;
    timeout?: number;
    proxy?: AxiosProxyConfig | false;
    httpsAgent?: boolean;
    privateKey?: Buffer;
    privateKeyPassphrase?: string;
    privateKeyAlgo?: 'RSA' | 'ED25519';
}

export interface WebsocketAPIOptions extends WebsocketOptions {
    wsURL?: string;
}

export interface sendMessageOptions {
    id?: string;
    apiKey?: string;
    timestamp?: number;
    signature?: string;
}

export interface WebsocketAPIOptions extends WebsocketOptions {
    wsURL?: string;
    combinedStreams?: boolean;
}
