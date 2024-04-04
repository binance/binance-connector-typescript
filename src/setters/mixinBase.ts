import { AxiosProxyConfig } from 'axios';
import { httpRequest, buildQueryString, removeEmptyValue } from '../helpers/utils';
import * as crypto from 'crypto';
import {
    mixinMargin,
    mixinMarket,
    mixinSimpleEarn,
    mixinStream,
    mixinSubAccount,
    mixinTrade,
    mixinWallet,
} from '../modules/restful/index';
import { mixinWsAccount, mixinWsMarket, mixinWsTrade, mixinWsUserData, WebsocketBase } from '../modules/websocket/websocketAPI';
import { mixinWsStream } from '../modules/websocket/websocketStream/stream';
import { WebsocketCallbacks, WebsocketStreamCallbacks, WebsocketConnection } from '../modules/websocket/websocketBase/types';
import { SpotOptions, WebsocketAPIOptions, WebsocketStreamAPIOptions } from './types';
import { Logger } from '../helpers/logger';


export const SpotBase = mixinMargin(mixinMarket(mixinSimpleEarn(mixinStream(mixinSubAccount(mixinTrade(mixinWallet(class {
    apiKey: string;
    apiSecret: string;
    baseURL: string;
    timeout: number;
    proxy: AxiosProxyConfig | false;
    httpsAgent: boolean;
    privateKey: Buffer;
    privateKeyPassphrase: string;
    privateKeyAlgo: 'RSA' | 'ED25519';
    logger: Logger = Logger.getInstance();

    constructor(apiKey: string, apiSecret: string, options: SpotOptions = {}) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.baseURL = options.baseURL || 'https://api.binance.com';
        this.timeout = options.timeout || 0;
        this.proxy = options.proxy || false;
        this.httpsAgent = options.httpsAgent || false;
        this.privateKey = options.privateKey || Buffer.from('');
        this.privateKeyPassphrase = options.privateKeyPassphrase || '';
        this.privateKeyAlgo = options.privateKeyAlgo || 'RSA';
    }

    async makeRequest(method: string, url: string) {
        return await httpRequest({
            method,
            baseURL: this.baseURL,
            url,
            apiKey: this.apiKey,
            timeout: this.timeout,
            proxy: this.proxy,
            httpsAgent: this.httpsAgent
        });
    }

    preparePath(path: string, options?: object): string {
        if (!options) return path;
        options = removeEmptyValue(options);
        const params = buildQueryString(options);
        return `${path}?${params}`;
    }

    prepareSignedPath(path: string, options?: object): string {
        const timeStamp = Date.now();
        const newOptions = { ...options, timestamp: timeStamp };
        options = removeEmptyValue(newOptions);
        const params = buildQueryString(options);
        let signature = '';
        if (this.apiSecret) {
            signature = crypto
                .createHmac('sha256', this.apiSecret)
                .update(params)
                .digest('hex');

        } else if (this.privateKeyAlgo === 'RSA') {
            signature = crypto.sign('RSA-SHA256', Buffer.from(params), {
                key: this.privateKey,
                passphrase: this.privateKeyPassphrase
            }).toString('base64');
        } else if (this.privateKeyAlgo === 'ED25519') {
            signature = crypto.sign(null, Buffer.from(params), {
                key: this.privateKey,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
                saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
            }).toString('base64');
        } else {
            throw new Error('privateKeyAlgo must be either \'RSA\' or \'ED25519\'');
        }
        return `${path}?${params}&signature=${signature}`;
    }
})))))));

export const WebsocketFeaturesBase = mixinWsAccount(mixinWsMarket(mixinWsTrade(mixinWsUserData(WebsocketBase(class {
    apiKey: string;
    apiSecret: string;
    wsURL: string;
    callbacks: WebsocketCallbacks;
    reconnectDelay: number;
    wsConnection: WebsocketConnection;
    logger: Logger = Logger.getInstance();

    constructor(apiKey: string, apiSecret: string, options?: WebsocketAPIOptions) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.wsURL = options && options.wsURL ? options.wsURL : 'wss://ws-api.binance.com:443/ws-api/v3';
        this.callbacks = options && options.callbacks ? options.callbacks : {};
        this.reconnectDelay = options && options.reconnectDelay ? options.reconnectDelay : 5000;
        this.wsConnection = {};
    }
})))));

export const WebsocketStreamFeaturesBase = mixinWsStream(WebsocketBase(class {
    wsURL: string;
    callbacks: WebsocketStreamCallbacks;
    reconnectDelay: number;
    wsConnection: WebsocketConnection;
    logger: Logger = Logger.getInstance();

    constructor(options: WebsocketStreamAPIOptions = {}) {
        this.wsURL = options.wsURL || 'wss://ws-api.binance.com:443/ws-api/v3';
        this.callbacks = options.callbacks || {};
        this.reconnectDelay = options.reconnectDelay || 5000;
        this.wsConnection = {};
    }
}));
