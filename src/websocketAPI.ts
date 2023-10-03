import * as crypto from 'crypto';
import { buildQueryString, removeEmptyValue, randomString, sortObject, ObjectType } from './helpers/utils';
import { WebsocketFeaturesBase } from './setters/mixinBase';
import { WebsocketAPIOptions, sendMessageOptions } from './setters/types';

export class WebsocketAPI extends WebsocketFeaturesBase {
    wsURL: string;
    apiKey: string;
    apiSecret: string;

    constructor(apiKey = '', apiSecret = '', options: WebsocketAPIOptions = {}) {
        super(apiKey, apiSecret, options);
        this.wsURL = options.wsURL || 'wss://ws-api.binance.com:443/ws-api/v3';
        this.initConnect(this.wsURL);
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
    }

    sendMessageWithAPIKey(method: string, options: Omit<sendMessageOptions, 'timestamp' | 'signature'> = {}) {
        if (!this.isConnected()) {
            console.error('Not connected');
            return;
        }
        const id = options.id || randomString();
        options.apiKey = this.apiKey;
        delete options.id;
        const payload = {
            id,
            method,
            params: removeEmptyValue(options)
        };
        console.debug('Send message to Binance Websocket API Server:', payload);
        this.send(JSON.stringify(payload));
    }

    sendMessage(method: string, options: Omit<sendMessageOptions, 'apiKey' | 'timestamp' | 'signature'> = {}) {
        if (!this.isConnected()) {
            console.error('Not connected');
            return;
        }
        const id = options.id || randomString();
        delete options.id;
        const payload = {
            id,
            method,
            params: removeEmptyValue(options)
        };
        console.debug('Send message to Binance Websocket API Server:', payload);
        this.send(JSON.stringify(payload));
    }

    sendSignatureMessage(method: string, options: sendMessageOptions = {}) {
        if (!this.isConnected()) {
            console.error('Not connected');
            return;
        }
        const id = options.id || randomString();
        delete options.id;
        options = removeEmptyValue(options);
        options.apiKey = this.apiKey;
        options.timestamp = Date.now();
        options = sortObject(options as ObjectType);
        options.signature = crypto
            .createHmac('sha256', this.apiSecret)
            .update(buildQueryString(options))
            .digest('hex');

        const payload = {
            id,
            method,
            params: options
        };
        console.debug('Send message to Binance Websocket API Server:', payload);
        this.send(JSON.stringify(payload));
    }
}
