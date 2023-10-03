import http from 'http';
import WebSocket from 'ws';
import { startServer, waitForSocketState, resultTemplate } from '../utils/webSocketTestUtils';
import { mockMyTrades } from '../../mock_values/websocket/account/myTrades';
import { WebsocketAPI } from '../../../src/websocketAPI';

describe('Trades Information', () => {
    let server: http.Server;
    let responseMessage: WebSocket.Data;

    beforeAll(async () => server = await startServer(3000));

    afterAll(() => server.close());

    it('should return the information about all the trades of an account, filtered by time range', async () => {
        resultTemplate.data = mockMyTrades;
        const callbacks = {
            open: (client: WebsocketAPI) => client.myTrades('BNBUSDT', { fromId: 1 }),
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
