import dotenv from 'dotenv';
import { WebsocketAPI } from '../../../src/index';
import { WsMarketTypes } from '../../../src/types';

dotenv.config();

const options: WsMarketTypes.pingOptions = {
    id: 1
};
const callbacks = {
    open: (client: WebsocketAPI) => {
        console.debug('Connected with Websocket server');
        client.ping(options);
    },
    close: () => console.debug('Disconnected with Websocket server'),
    message: (data: string) => {
        const parseData = JSON.parse(data);
        console.info(parseData);
    }
};

const websocketAPIClient = new WebsocketAPI('', '', { callbacks });

setTimeout(() => websocketAPIClient.disconnect(), 10000);
