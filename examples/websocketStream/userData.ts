import { WebsocketStream } from '../../src/index';

const callbacks = {
    open: () => console.debug('Connected to WebSocket server'),
    close: () => console.debug('Disconnected from WebSocket server'),
    message: (data: string) => console.info(data)
};

const websocketStreamClient = new WebsocketStream({ callbacks });

// To generate the listen key, please check examples/spot/stream/ folder.
websocketStreamClient.userData('<listen_key>');

setTimeout(() => websocketStreamClient.disconnect(), 6000);
