import { Interval, WebsocketStream } from '../../src/index';

const callbacks = {
    open: () => console.debug('Connected to WebSocket server'),
    close: () => console.debug('Disconnected from WebSocket server'),
    message: (data: string) => console.info(data)
};

// Connect to websocket server in combine mode, the stream name will be returned in response messages
const websocketStreamClient = new WebsocketStream({ callbacks, combinedStreams: true });

// subscribe to kline stream
websocketStreamClient.kline('bnbusdt', Interval['1m']);

// subscribe to trade stream
setTimeout(() => { websocketStreamClient.trade('bnbusdt'); }, 3000);

// disconnect from websocket server
setTimeout(() => websocketStreamClient.disconnect(), 10000);
