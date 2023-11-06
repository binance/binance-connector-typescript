import { WebsocketStream } from '../../src/index';

const callbacks = {
    open: () => console.debug('Connected to WebSocket server'),
    close: () => console.debug('Disconnected from WebSocket server'),
    message: (data: string) => console.info(data)
};

const websocketStreamClient = new WebsocketStream({ callbacks });

// all pairs
// websocketStreamClient.ticker();

// single pair
websocketStreamClient.ticker('bnbusdt');

setTimeout(() => { websocketStreamClient.ticker('btcbusd'); }, 3000);

// ping server
setTimeout(() => websocketStreamClient.pingServer(), 4000);

setTimeout(() => websocketStreamClient.disconnect(), 6000);
