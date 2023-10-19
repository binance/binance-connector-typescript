import dotenv from 'dotenv';
import { WebsocketAPI, WsAccountTypes } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const options: WsAccountTypes.accountOptions = {
    recvWindow: 5000
};
const callbacks = {
    open: (client: WebsocketAPI) => {
        console.log('Connected with Websocket server');
        // get account info after connection established
        client.account(options);
    },
    close: () => console.log('Disconnected with Websocket server'),
    message: (data: string) => {
        const parseData = JSON.parse(data);
        console.info('Data: ', parseData);
    }
};

const websocketAPIClient = new WebsocketAPI(apiKey, apiSecret, { callbacks });

// disconnect after 20 seconds
setTimeout(() => websocketAPIClient.disconnect(), 20000);
