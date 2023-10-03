import { Interval } from '../../src/types';
import { WebsocketStream } from '../../src/index';

const callbacks = {
    open: () => console.debug('Connected with Websocket server'),
    close: () => console.debug('Disconnected with Websocket server'),
    message: (data: string) => console.info(data)
};

const websocketStreamClient = new WebsocketStream({ callbacks, combinedStreams: true });

websocketStreamClient.kline('bnbusdt', Interval['1m']);

setTimeout(() => websocketStreamClient.unsubscribe('bnbusdt@kline_1m'), 6000);
setTimeout(() => websocketStreamClient.disconnect(), 12000);
