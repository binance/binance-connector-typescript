import dotenv from 'dotenv';
import { WebsocketAPI, WsMarketTypes } from '../../../src/index';

dotenv.config();

const options: WsMarketTypes.aggTradesOptions = {
    limit: 10
};
const callbacks = {
    open: (client: WebsocketAPI) => {
        console.debug('Connected to WebSocket server');
        client.aggTrades('BNBUSDT', options);
    },
    close: () => console.debug('Disconnected from WebSocket server'),
    message: (data: string) => {
        const parseData = JSON.parse(data);
        console.info(parseData);
    }
};

const websocketAPIClient = new WebsocketAPI('', '', { callbacks });

// disconnect after 20 seconds
setTimeout(() => websocketAPIClient.disconnect(), 20000);
