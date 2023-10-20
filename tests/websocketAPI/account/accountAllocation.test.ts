import http from 'http';
import WebSocket from 'ws';
import { startServer, waitForSocketState, resultTemplate } from '../utils/webSocketTestUtils';
import { mockAccountAllocation }  from '../../mock_values/websocket/account/accountAllocation';
import { WebsocketAPI } from '../../../src/index';

describe('Account Allocation', () => {
    let server: http.Server;
    let responseMessage: WebSocket.Data;

    beforeAll(async () => server = await startServer(3000));

    afterAll(() => server.close());

    it('should retrieve the allocations resultTemplateing from SOR order placement', async () => {
        resultTemplate.data = mockAccountAllocation;
        const callbacks = {
            open: (client: WebsocketAPI) => client.accountAllocation('BNBUSDT'),
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
