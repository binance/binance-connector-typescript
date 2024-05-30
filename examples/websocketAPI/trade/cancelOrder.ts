import dotenv from 'dotenv';
import { WebsocketAPI, WsTradeTypes } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const wsURL = 'wss://ws-api.testnet.binance.vision:9443/ws-api/v3'; // we setup wsURL to testnet. The default value set to production site: wss://ws-api.binance.com/ws-api/v3
const options: WsTradeTypes.cancelOrderOptions = {
    newClientOrderId: 'cancel_order_id_3283713'
};
const callbacks = {
    open: (client: WebsocketAPI) => {
        console.debug('Connected to WebSocket server');
        client.cancelOrder('BNBUSDT', 3283713, options);
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
