import dotenv from 'dotenv';
import { WebsocketAPI } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const callbacks = {
    open: (client: WebsocketAPI) => {
        console.debug('Connected to WebSocket server');
        client.pingUserDataStream('your_listen_key');
    },
    close: () => console.debug('Disconnected from WebSocket server'),
    message: (data: string) => {
        const parseData = JSON.parse(data);
        console.info(parseData);
    }
};

const websocketAPIClient = new WebsocketAPI(apiKey, '', { callbacks });

// disconnect after 20 seconds
setTimeout(() => websocketAPIClient.disconnect(), 20000);
