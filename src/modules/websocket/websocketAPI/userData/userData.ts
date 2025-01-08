import { Constructor } from '../../../../setters/types';
import { TradeMethods } from './methods';

/**
 * Websocket API user data stream endpoints
 * @module Websocket
 */
export function mixinWsUserData<T extends Constructor>(base: T): Constructor<TradeMethods> & T {
    return class extends base {
        /**
         *
         * Start a new user data stream.<br>
         *
         *
         * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/user-data-stream-requests#start-user-data-stream-user_stream}
         */
        startUserDataStream() {
            this.sendMessageWithAPIKey('userDataStream.start');
        }

        /**
        * Ping user data stream.< br>
        *
        * Ping a user data stream to keep it alive.<br>
        *
        *
        * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/user-data-stream-requests#ping-user-data-stream-user_stream}
        *
        * @param {string} listenKey
        */
        pingUserDataStream(listenKey: string) {
            this.sendMessageWithAPIKey('userDataStream.ping', { listenKey });
        }

        /**
        * Stop user data stream.< br>
        *
        * Explicitly stop and close the user data stream.<br>
        *
        *
        * {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/user-data-stream-requests#stop-user-data-stream-user_stream}
        */
        stopUserDataStream(listenKey: string) {
            this.sendMessageWithAPIKey('userDataStream.stop', { listenKey });
        }
    };
}
