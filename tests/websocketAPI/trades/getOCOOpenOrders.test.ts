import http from 'http';
import WebSocket from 'ws';
import { startServer, waitForSocketState, resultTemplate } from '../utils/webSocketTestUtils';
import { mockGetOCOOpenOrders }  from '../../mock_values/websocket/trades/getOCOOpenOrders';
import { WebsocketAPI } from '../../../src/index';

describe('Get OCO Open Orders', () => {
    let responseMessage: WebSocket.Data = '';
    let server: http.Server;
    const callbacks = {
        open: (client: WebsocketAPI) => client.getOCOOpenOrders(),
        close: () => console.log('Disconnected from WebSocket server'),
        message: (data: string) => responseMessage = data.toString()
    };

    beforeAll(async () => server = await startServer(3000));

    afterAll(() => server.close());

    it('should return the execution status of all open OCOs', async () => {
        resultTemplate.data = mockGetOCOOpenOrders;
        const test = new WebsocketAPI('', '', { callbacks, wsURL: 'ws://localhost:3000'});
        if(test.wsConnection.ws) await waitForSocketState(test.wsConnection.ws, test.wsConnection.ws.OPEN);
        setTimeout(() => test.disconnect(), 100);
        if(test.wsConnection.ws) await waitForSocketState(test.wsConnection.ws, test.wsConnection.ws.CLOSED);
        expect(responseMessage).toBe(JSON.stringify(resultTemplate));
    });
});
