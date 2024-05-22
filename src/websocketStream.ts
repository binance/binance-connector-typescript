import { WebsocketStreamFeaturesBase } from './setters/mixinBase';
import { WebsocketStreamAPIOptions } from './setters/types';

export class WebsocketStream extends WebsocketStreamFeaturesBase {
    combinedStreams: boolean;

    constructor(options?: WebsocketStreamAPIOptions) {
        super(options);
        this.wsURL = options && options.wsURL ? options.wsURL : 'wss://stream.binance.com:9443';
        this.combinedStreams = options && options.combinedStreams ? options.combinedStreams : false;
    }

    _prepareURL(stream: string | string[]) {
        let url = `${this.wsURL}/ws/${stream}`;
        if (this.combinedStreams) {
            url = `${this.wsURL}/stream?streams=${stream}`;
        }
        return url;
    }

    subscribe(stream: string | string[]) {
        if (!this.isConnected()) {
            if (Array.isArray(stream)) stream = stream.toString().replaceAll(',', '/');
            const url = this._prepareURL(stream);
            this.initConnect(url);
        } else {
            if (!Array.isArray(stream)) {
                stream = [stream];
            }
            const payload = {
                method: 'SUBSCRIBE',
                params: stream,
                id: Date.now()
            };

            this.logger.info('SUBSCRIBE', payload);
            this.send(JSON.stringify(payload));
        }
    }

    unsubscribe(stream: string | string[]) {
        if (!this.isConnected()) {
            this.logger.warn('Not connected');
        } else {
            if (!Array.isArray(stream)) {
                stream = [stream];
            }
            const payload = {
                method: 'UNSUBSCRIBE',
                params: stream,
                id: Date.now()
            };
            this.logger.info('UNSUBSCRIBE', payload);
            this.send(JSON.stringify(payload));
        }
    }
}
