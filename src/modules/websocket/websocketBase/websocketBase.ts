import { BufferLike, websocketBaseMethods } from './types';
import { Constructor } from '../../../setters/types';
import WebSocketClient from 'ws';

export function WebsocketBase<T extends Constructor>(base: T): Constructor<websocketBaseMethods> & T {
    return class extends base {
        isConnected() {
            if (!this.wsConnection.ws || this.wsConnection.ws.readyState !== WebSocketClient.OPEN) return false;
            return true;
        }

        initConnect(url: string) {
            const ws = new WebSocketClient(url);
            this.logger.info(`Sending Websocket connection to: ${url}`);
            this.wsConnection.ws = ws;
            this.wsConnection.closeInitiated = false;

            ws.on('open', () => {
                this.logger.info(`Connected to the Websocket Server: ${url}`);
                this.callbacks.open && this.callbacks.open(this);
            });

            // handle data message. Pass the data to the call back method from user
            // It could be useful to store the original messages from server for debug
            ws.on('message', data => {
                this.callbacks.message && this.callbacks.message(data.toString());
            });

            ws.on('ping', () => {
                // As ping pong is very important for maintaining the connection, log them as INFO level
                this.logger.info('Received PING from server');
                this.callbacks.ping && this.callbacks.ping();
                ws.pong();
                this.logger.info('Responded PONG to server\'s PING message');
            });

            ws.on('pong', () => {
                this.logger.info('Received PONG from server');
                this.callbacks.pong && this.callbacks.pong();
            });

            ws.on('error', err => {
                this.logger.error('Received error from server');
                this.callbacks.error && this.callbacks.error();
                this.logger.error(err);
            });

            ws.on('close', (closeEventCode, reason) => {
                if (!this.wsConnection.closeInitiated) {
                    this.callbacks.close && this.callbacks.close();
                    this.logger.warn(`Connection close due to ${closeEventCode}: ${reason}.`);
                    setTimeout(() => {
                        this.logger.debug('Reconnect to the server.');
                        this.initConnect(url);
                    }, this.reconnectDelay);
                } else {
                    this.wsConnection.closeInitiated = false;
                }
            });
        }

        /**
         * Unsubscribe the stream
         *
         * @param {WebSocketClient} wsConnection - websocket client instance created by ws package
         */
        disconnect() {
            if (!this.isConnected()) this.logger.warn('No connection to close.');
            else {
                this.wsConnection.closeInitiated = true;
                if (this.wsConnection.ws) this.wsConnection.ws.close();
                else throw new Error('Websocket Client not set');
                this.logger.info('Disconnected with Binance Websocket Server');
            }
        }

        /**
         * Send Ping message to the Websocket Server
         */
        pingServer() {
            if (!this.isConnected()) this.logger.warn('Ping only can be sent when connection is ready.');
            else {
                this.logger.info('Send PING to the Websocket Server');
                if (this.wsConnection.ws) this.wsConnection.ws.ping();
                else throw new Error('Websocket Client not set');
            }
        }

        send(payload: BufferLike) {
            if (!this.isConnected()) this.logger.warn('Send only can be sent when connection is ready.');
            else {
                if (this.wsConnection.ws) this.wsConnection.ws.send(payload);
                else throw new Error('Websocket Client not set');
            }
        }
    };
}
