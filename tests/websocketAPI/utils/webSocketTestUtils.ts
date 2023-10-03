import http from 'http';
import WebSocketClient from 'ws';
import { websocketServerReturnedValue } from './websocketServerReturnedValue';

export interface websocketRes {
    id: string;
    status: number;
    data: object;
    rateLimits: Array<object>;
}

function createWebSocketServer(server: http.Server): void {
    const wss = new WebSocketClient.Server({ server });

    wss.on('connection', function (webSocket) {
        webSocket.on('message', function (message) {
            let res: websocketRes = {
                id: '123',
                status: 200,
                data: {},
                rateLimits: [
                    {
                        rateLimitType: 'REQUEST_WEIGHT',
                        interval: 'MINUTE',
                        intervalNum: 1,
                        limit: 6000,
                        count: 22
                    }
                ]
            };
            res = websocketServerReturnedValue(message, res);
            webSocket.send(JSON.stringify(res));
        });
    });
}

export const resultTemplate: websocketRes = {
    id: '123',
    status: 200,
    data: {},
    rateLimits: [
        {
            rateLimitType: 'REQUEST_WEIGHT',
            interval: 'MINUTE',
            intervalNum: 1,
            limit: 6000,
            count: 22
        }
    ]
};

export function startServer(port: number): Promise<http.Server> {
    const server = http.createServer();
    createWebSocketServer(server);

    return new Promise((resolve) => {
        server.listen(port, () => resolve(server));
    });
}

export function waitForSocketState(socket: WebSocketClient, state: number): Promise<void> {
    return new Promise(function (resolve) {
        setTimeout(function () {
            if (socket.readyState === state) {
                resolve();
            } else {
                waitForSocketState(socket, state).then(resolve);
            }
        });
    });
}
