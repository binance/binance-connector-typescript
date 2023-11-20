import { WebsocketStream } from '../../src/index';

const callbacks = {
    open: () => console.debug('Connected to WebSocket server'),
    close: () => console.debug('Disconnected from WebSocket server'),
    message: (data: string) => console.info(data)
};

const websocketStreamClient = new WebsocketStream({ callbacks });

// all pairs
// websocketStreamClient.miniTicker();

// single pair
websocketStreamClient.miniTicker('bnbusdt');

setTimeout(() => websocketStreamClient.disconnect(), 6000);
