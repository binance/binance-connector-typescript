import { WebsocketStream } from '../../src/index';

const callbacks = {
    open: () => console.debug('Connected with Websocket server'),
    close: () => console.debug('Disconnected with Websocket server'),
    message: (data: string) => console.info(data)
};

const websocketStreamClient = new WebsocketStream({ callbacks });

// all pairs
// websocketStreamClient.rollingWindowTicker('1h', null);

// single pair
websocketStreamClient.rollingWindowTicker('1h', 'bnbusdt');

setTimeout(() => websocketStreamClient.disconnect(), 6000);
