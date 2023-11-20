import http from 'http';
import WebSocket from 'ws';
import { startServer, waitForSocketState, resultTemplate } from '../utils/webSocketTestUtils';
import { mockAvgPrice }  from '../../mock_values/websocket/market/avgPrice';
import { WebsocketAPI } from '../../../src/index';

describe('Average Price', () => {
    let server: http.Server;
    let responseMessage: WebSocket.Data;

    beforeAll(async () => server = await startServer(3000));

    afterAll(() => server.close());

    it('should return current average price for a symbol', async () => {
        resultTemplate.data = mockAvgPrice;
        const callbacks = {
            open: (client: WebsocketAPI) => client.avgPrice('BTCUSDT'),
            close: () => console.log('Disconnected from WebSocket server'),
            message: (data: string) => responseMessage = data.toString()
        };
        const test = new WebsocketAPI('', '', { callbacks, wsURL: 'ws://localhost:3000'});
        if(test.wsConnection.ws) await waitForSocketState(test.wsConnection.ws, test.wsConnection.ws.OPEN);
        setTimeout(() => test.disconnect(), 100);
        if(test.wsConnection.ws) await waitForSocketState(test.wsConnection.ws, test.wsConnection.ws.CLOSED);
        expect(responseMessage).toBe(JSON.stringify(resultTemplate));
    });
});
