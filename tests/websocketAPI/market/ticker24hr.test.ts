import http from 'http';
import WebSocket from 'ws';
import { startServer, waitForSocketState, resultTemplate } from '../utils/webSocketTestUtils';
import { mockTicker24hr } from '../../mock_values/websocket/market/ticker24hr';
import { WebsocketAPI } from '../../../src/index';

describe('Ticker 24hr', () => {
    let responseMessage: WebSocket.Data = '';
    let server: http.Server;
    const callbacks = {
        open: (client: WebsocketAPI) => client.ticker24hr({ symbol: 'BTCUSDT' }),
        close: () => console.log('Disconnected from WebSocket server'),
        message: (data: string) => responseMessage = data.toString()
    };

    beforeAll(async () => server = await startServer(3000));

    afterAll(() => server.close());

    it('should return 24-hour rolling window price change statistics', async () => {
        resultTemplate.data = mockTicker24hr;
        const test = new WebsocketAPI('', '', { callbacks, wsURL: 'ws://localhost:3000' });
        if (test.wsConnection.ws) await waitForSocketState(test.wsConnection.ws, test.wsConnection.ws.OPEN);
        setTimeout(() => test.disconnect(), 100);
        if (test.wsConnection.ws) await waitForSocketState(test.wsConnection.ws, test.wsConnection.ws.CLOSED);
        expect(responseMessage).toBe(JSON.stringify(resultTemplate));
    });
});
