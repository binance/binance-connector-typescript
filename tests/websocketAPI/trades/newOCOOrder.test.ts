import http from 'http';
import WebSocket from 'ws';
import { startServer, waitForSocketState, resultTemplate } from '../utils/webSocketTestUtils';
import { mockNewOCOOrder }  from '../../mock_values/websocket/trades/newOCOOrder';
import { NewOrderRespType, Side, StopLimitTimeInForce, WebsocketAPI } from '../../../src/index';

describe('New OCO Order', () => {
    let responseMessage: WebSocket.Data = '';
    let server: http.Server;
    const callbacks = {
        open: (client: WebsocketAPI) => client.newOCOOrder('BNBUSDT', Side.BUY, 300, 0.1, {
            listClientOrderId: 'my_list_order',
            stopPrice: 330,
            stopLimitPrice: 340,
            stopLimitTimeInForce: StopLimitTimeInForce.GTC,
            newOrderRespType: NewOrderRespType.FULL
        }),
        close: () => console.log('Disconnected from WebSocket server'),
        message: (data: string) => responseMessage = data.toString()
    };

    beforeAll(async () => server = await startServer(3000));

    afterAll(() => server.close());

    it('should send in a new one-cancels-the-other (OCO) pair', async () => {
        resultTemplate.data = mockNewOCOOrder;
        const test = new WebsocketAPI('', '', { callbacks, wsURL: 'ws://localhost:3000'});
        if(test.wsConnection.ws) await waitForSocketState(test.wsConnection.ws, test.wsConnection.ws.OPEN);
        setTimeout(() => test.disconnect(), 100);
        if(test.wsConnection.ws) await waitForSocketState(test.wsConnection.ws, test.wsConnection.ws.CLOSED);
        expect(responseMessage).toBe(JSON.stringify(resultTemplate));
    });
});
