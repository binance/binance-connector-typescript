import http from 'http';
import WebSocket from 'ws';
import { startServer, waitForSocketState, resultTemplate } from '../utils/webSocketTestUtils';
import { mockAccountInfo }  from '../../mock_values/websocket/account/account';
import { WebsocketAPI } from '../../../src/websocketAPI';

describe('Account Information', () => {
    let server: http.Server;
    let responseMessage: WebSocket.Data;

    beforeAll(async () => server = await startServer(3000));

    afterAll(() => server.close());

    it('should return the information of an account', async () => {
        resultTemplate.data = mockAccountInfo;
        const callbacks = {
            open: (client: WebsocketAPI) => client.account({ recvWindow: 10000 }),
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
