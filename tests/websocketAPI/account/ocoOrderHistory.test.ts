import http from 'http';
import WebSocket from 'ws';
import { startServer, waitForSocketState, resultTemplate } from '../utils/webSocketTestUtils';
import { mockOcoOrderHistory } from '../../mock_values/websocket/account/ocoOrderHistory';
import { WebsocketAPI } from '../../../src/index';

describe('OCO Order History', () => {
    let server: http.Server;
    let responseMessage: WebSocket.Data;

    beforeAll(async () => server = await startServer(3000));

    afterAll(() => server.close());

    it('should return the information about all the OCOs of an account, filtered by time range', async () => {
        resultTemplate.data = mockOcoOrderHistory;
        const callbacks = {
            open: (client: WebsocketAPI) => client.ocoOrderHistory({ fromId: 1, limit: 1 }),
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
