import http from 'http';
import WebSocket from 'ws';
import { startServer, waitForSocketState, resultTemplate } from '../utils/webSocketTestUtils';
import { mockExchangeInformation }  from '../../mock_values/websocket/market/exchangeInfo';
import { WebsocketAPI } from '../../../src/index';

describe('Exchange Info', () => {
    let server: http.Server;
    let responseMessage: WebSocket.Data;

    beforeAll(async () => server = await startServer(3000));

    afterAll(() => server.close());

    it('should return current exchange trading rules, rate limits, and symbol information', async () => {
        resultTemplate.data = mockExchangeInformation;
        const callbacks = {
            open: (client: WebsocketAPI) => client.exchangeInfo({ symbols: ['BTCUSDT', 'BNBUSDT'] }),
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
