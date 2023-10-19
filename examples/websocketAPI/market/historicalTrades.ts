import dotenv from 'dotenv';
import { WebsocketAPI, WsMarketTypes } from '../../../src/index';

dotenv.config();

const options: WsMarketTypes.historicalTradesOptions = {
    limit: 10
};
const callbacks = {
    open: (client: WebsocketAPI) => {
        console.debug('Connected with Websocket server');
        client.historicalTrades('BNBUSDT', options);
    },
    close: () => console.debug('Disconnected with Websocket server'),
    message: (data: string) => {
        const parseData = JSON.parse(data);
        console.info(parseData);
    }
};

// API Key is required for this method.
// Please make sure you have the correct API Key from the right place. There are testnet and production keys available.
// See https://dev.binance.vision/t/binance-testnet-environments/99
const apiKey = '';

// wsURL is optional, by default it's set to the production site: 'wss://ws-api.binance.com:443/ws-api/v3'.
const websocketAPIClient = new WebsocketAPI(apiKey, '', { callbacks, wsURL: 'wss://testnet.binance.vision/ws-api/v3' });

// disconnect after 20 seconds
setTimeout(() => websocketAPIClient.disconnect(), 20000);
