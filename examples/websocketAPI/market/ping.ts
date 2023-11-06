import dotenv from 'dotenv';
import { WebsocketAPI, WsMarketTypes } from '../../../src/index';

dotenv.config();

const options: WsMarketTypes.pingOptions = {
    id: 1
};
const callbacks = {
    open: (client: WebsocketAPI) => {
        console.debug('Connected to WebSocket server');
        client.ping(options);
    },
    close: () => console.debug('Disconnected from WebSocket server'),
    message: (data: string) => {
        const parseData = JSON.parse(data);
        console.info(parseData);
    }
};

const websocketAPIClient = new WebsocketAPI('', '', { callbacks });

setTimeout(() => websocketAPIClient.disconnect(), 10000);
