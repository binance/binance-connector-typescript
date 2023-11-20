import dotenv from 'dotenv';
import { WebsocketAPI } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const wsURL = 'wss://testnet.binance.vision/ws-api/v3'; // we setup wsURL to testnet. The default value set to production site: wss://ws-api.binance.com/ws-api/v3
const callbacks = {
    open: (client: WebsocketAPI) => {
        console.debug('Connected to WebSocket server');
        client.getOrder('BNBUSDT', 3283713);
    },
    close: () => console.debug('Disconnected from WebSocket server'),
    message: (data: string) => {
        const parseData = JSON.parse(data);
        console.info(parseData);
    }
};

const websocketAPIClient = new WebsocketAPI(apiKey, apiSecret, { callbacks, wsURL });

// disconnect after 20 seconds
setTimeout(() => websocketAPIClient.disconnect(), 20000);
