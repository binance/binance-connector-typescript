import dotenv from 'dotenv';
import { WebsocketAPI, WsMarketTypes } from '../../../src/index';

dotenv.config();

const options: WsMarketTypes.exchangeInfoOptions = {
    symbol: 'BTCUSDT'
};
const callbacks = {
    open: (client: WebsocketAPI) => {
        console.debug('Connected to WebSocket server');
        // get single symbol exchange info, when connection is established
        client.exchangeInfo(options);
    },
    close: () => console.debug('Disconnected from WebSocket server'),
    message: (data: string) => {
        const parseData = JSON.parse(data);
        console.info(parseData);
    }
};

const websocketAPIClient = new WebsocketAPI('', '', { callbacks });

// get the symbols exchange info with permissions = SPOT
setTimeout(() => websocketAPIClient.exchangeInfo({ permissions: ['SPOT'] }), 3000);

// disconnect after 20 seconds
setTimeout(() => websocketAPIClient.disconnect(), 20000);

const callbackSymbols = {
    open: (client: WebsocketAPI) => {
        console.debug('Connected to WebSocket server');
        client.exchangeInfo({ symbols: ['BTCUSDT', 'BNBUSDT'] });
    },
    close: () => console.debug('Disconnected from WebSocket server'),
    message: (data: string) => {
        const parseData = JSON.parse(data);
        console.info(parseData);
    }
};

const websocketAPIClientSymbols = new WebsocketAPI('', '', { callbacks: callbackSymbols });

setTimeout(() => websocketAPIClientSymbols.disconnect(), 20000);
