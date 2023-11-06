import dotenv from 'dotenv';
import { WebsocketAPI } from '../../../src/index';

dotenv.config();

const callbacks = {
    open: (client: WebsocketAPI) => {
        console.debug('Connected to WebSocket server');
        client.time();
    },
    close: () => console.debug('Disconnected from WebSocket server'),
    message: (data: string) => {
        const parseData = JSON.parse(data);
        console.info(parseData);
    }
};

const websocketAPIClient = new WebsocketAPI('', '', { callbacks });

setTimeout(() => websocketAPIClient.disconnect(), 10000);
