import { Constructor } from '../../../setters/types';
import { validateRequiredParameters } from '../../../helpers/utils';
import { listenkeyResponse } from './types';
import { StreamMethods } from './methods';

export function mixinStream<T extends Constructor>(base: T): Constructor<StreamMethods> & T {
    return class extends base {
        /**
        * Create a ListenKey (USER_STREAM) {@link https://binance-docs.github.io/apidocs/spot/en/#create-a-listenkey-user_stream}
        */
        async createListenKey(): Promise<listenkeyResponse> {
            return await this.makeRequest('POST', '/api/v3/userDataStream');
        }


        /**
        * Ping/Keep-alive a ListenKey (USER_STREAM) {@link https://binance-docs.github.io/apidocs/spot/en/#ping-keep-alive-a-listenkey-user_stream}
        *
        * @param {string} listenKey
        */
        async renewListenKey(listenKey: string): Promise<Record<string, never>> {
            validateRequiredParameters({ listenKey });
            const url = this.preparePath('/api/v3/userDataStream', { listenKey: listenKey });
            return await this.makeRequest('PUT', url);
        }


        /**
        * Close a ListenKey (USER_STREAM) {@link https://binance-docs.github.io/apidocs/spot/en/#close-a-listenkey-user_stream}
        *
        * @param {string} listenKey
        */
        async closeListenKey(listenKey: string): Promise<Record<string, never>> {
            validateRequiredParameters({ listenKey });
            const url = this.preparePath('/api/v3/userDataStream', { listenKey: listenKey });
            return await this.makeRequest('DELETE', url);
        }


        /**
        * Create a ListenKey (USER_STREAM) {@link https://binance-docs.github.io/apidocs/spot/en/#create-a-listenkey-user_stream-2}
        */
        async createMarginListenKey(): Promise<listenkeyResponse> {
            return await this.makeRequest('POST', '/api/v1/userDataStream');
        }


        /**
        * Ping/Keep-alive a ListenKey (USER_STREAM) {@link https://binance-docs.github.io/apidocs/spot/en/#ping-keep-alive-a-listenkey-user_stream-2}
        *
        * @param {string} listenKey
        */
        async renewMarginListenKey(listenKey: string): Promise<Record<string, never>> {
            validateRequiredParameters({ listenKey });
            const url = this.preparePath('/api/v1/userDataStream', { listenKey: listenKey });
            return await this.makeRequest('PUT', url);
        }


        /**
        * Close a ListenKey (USER_STREAM) {@link https://binance-docs.github.io/apidocs/spot/en/#close-a-listenkey-user_stream-2}
        *
        * @param {string} listenKey
        */
        async closeMarginListenKey(listenKey: string): Promise<Record<string, never>> {
            validateRequiredParameters({ listenKey });
            const url = this.preparePath('/api/v1/userDataStream', { listenKey: listenKey });
            return await this.makeRequest('DELETE', url);
        }


        /**
        * Generate a ListenKey (USER_STREAM) {@link https://binance-docs.github.io/apidocs/spot/en/#listen-key-isolated-margin}
        * 
        * @param {string} symbol
        */
        async createIsolatedMarginListenKey(symbol: string): Promise<listenkeyResponse> {
            validateRequiredParameters({ symbol });
            const url = this.preparePath('/sapi/v1/userDataStream/isolated', { symbol: symbol });
            return await this.makeRequest('POST', url);
        }


        /**
        * Ping/Keep-alive a ListenKey (USER_STREAM) {@link https://binance-docs.github.io/apidocs/spot/en/#ping-keep-alive-a-listen-key-user_stream}
        *
        * @param {string} symbol
        * @param {string} listenKey
        */
        async renewIsolatedMarginListenKey(symbol: string, listenKey: string): Promise<Record<string, never>> {
            validateRequiredParameters({ symbol, listenKey });
            const url = this.preparePath('/sapi/v1/userDataStream/isolated', { listenKey: listenKey, symbol: symbol });
            return await this.makeRequest('PUT', url);
        }


        /**
        * Close a ListenKey (USER_STREAM) {@link https://binance-docs.github.io/apidocs/spot/en/#close-a-listenkey-user_stream-3}
        *
        * @param {string} symbol
        * @param {string} listenKey
        */
        async closeIsolatedMarginListenKey(symbol: string, listenKey: string): Promise<Record<string, never>> {
            const url = this.preparePath('/sapi/v1/userDataStream/isolated', { listenKey: listenKey, symbol: symbol });
            return await this.makeRequest('DELETE', url);
        }
    };
}
