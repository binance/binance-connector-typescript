import { Interval, WebsocketStream } from '../../src/index';

const callbacks = {
    open: () => console.debug('Connected to WebSocket server'),
    close: () => console.debug('Disconnected from WebSocket server'),
    message: (data: string) => console.info(data)
};

const websocketStreamClient = new WebsocketStream({ callbacks, combinedStreams: true });

websocketStreamClient.kline('bnbusdt', Interval['1m']);

setTimeout(() => websocketStreamClient.unsubscribe('bnbusdt@kline_1m'), 6000);
setTimeout(() => websocketStreamClient.disconnect(), 12000);
