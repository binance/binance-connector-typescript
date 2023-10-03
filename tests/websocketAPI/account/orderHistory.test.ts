import http from 'http';
import WebSocket from 'ws';
import { startServer, waitForSocketState, resultTemplate } from '../utils/webSocketTestUtils';
import { mockOrderHistory } from '../../mock_values/websocket/account/orderHistory';
import { WebsocketAPI } from '../../../src/websocketAPI';

describe('Order History', () => {
    let server: http.Server;
    let responseMessage: WebSocket.Data;

    beforeAll(async () => server = await startServer(3000));

    afterAll(() => server.close());

    it('should return the information about all an account orders (active, canceled, filled) filtered by time range', async () => {
        resultTemplate.data = mockOrderHistory;
        const callbacks = {
            open: (client: WebsocketAPI) => client.orderHistory('BNBUSDT', { orderId: 1, limit: 1 }),
            close: () => console.log('Disconnected with Websocket server'),
            message: (data: string) => responseMessage = data.toString()
        };
        const test = new WebsocketAPI('', '', { callbacks, wsURL: 'ws://localhost:3000'});
        if(test.wsConnection.ws) await waitForSocketState(test.wsConnection.ws, test.wsConnection.ws.OPEN);
        setTimeout(() => test.disconnect(), 100);
        if(test.wsConnection.ws) await waitForSocketState(test.wsConnection.ws, test.wsConnection.ws.CLOSED);
        expect(responseMessage).toBe(JSON.stringify(resultTemplate));
    });
});
