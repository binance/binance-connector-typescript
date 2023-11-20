import dotenv from 'dotenv';
import { WebsocketAPI, WsAccountTypes } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const options: WsAccountTypes.orderHistoryOptions = {
    orderId: 1,
    limit: 1
};
const callbacks = {
    open: (client: WebsocketAPI) => {
        console.debug('Connected to WebSocket server');
        client.orderHistory('BNBUSDT', options);
    },
    close: () => console.debug('Disconnected from WebSocket server'),
    message: (data: string) => {
        const parseData = JSON.parse(data);
        console.info(parseData);
    }
};

const websocketAPIClient = new WebsocketAPI(apiKey, apiSecret, { callbacks });

// disconnect after 20 seconds
setTimeout(() => websocketAPIClient.disconnect(), 20000);
