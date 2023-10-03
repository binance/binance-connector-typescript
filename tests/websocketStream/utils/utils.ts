import { WebsocketStream } from '../../../src/websocketStream';

export const mockSubscription = (targetUrl: string, mockResponse: object) => {
    const websocketStreamClient = new WebsocketStream();
    websocketStreamClient.subscribe = new Proxy(websocketStreamClient.subscribe, {
        apply: function (target, thisArg, [url]) {
            targetUrl = targetUrl.replace('?', '\\?');
            if (url.match(new RegExp(`${targetUrl}$`))) {
                return mockResponse;
            }
            console.log(url);
            return new Error('URL mismatch');
        }
    });
};

export const mockResponse = {
    key: 'value',
    foo: 'bar'
};