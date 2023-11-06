import http from 'http';
import WebSocket from 'ws';
import { startServer, waitForSocketState, resultTemplate } from '../utils/webSocketTestUtils';
import { mockNewOrder }  from '../../mock_values/websocket/trades/newOrder';
import { NewOrderRespType, OrderType, Side, WebsocketAPI } from '../../../src/index';

describe('New Order', () => {
    let responseMessage: WebSocket.Data = '';
    let server: http.Server;
    const callbacks = {
        open: (client: WebsocketAPI) => client.newOrder('BNBUSDT', Side.BUY, OrderType.LIMIT, {
            timeInForce: '',
            price: 300,
            quantity: 0.1,
            newClientOrderId: 'my_order_id_1',
            newOrderRespType: NewOrderRespType.FULL
        }),
        close: () => console.log('Disconnected from WebSocket server'),
        message: (data: string) => responseMessage = data.toString()
    };

    beforeAll(async () => server = await startServer(3000));

    afterAll(() => server.close());

    it('should send in a new order', async () => {
        resultTemplate.data = mockNewOrder;
        const test = new WebsocketAPI('', '', { callbacks, wsURL: 'ws://localhost:3000'});
        if(test.wsConnection.ws) await waitForSocketState(test.wsConnection.ws, test.wsConnection.ws.OPEN);
        setTimeout(() => test.disconnect(), 100);
        if(test.wsConnection.ws) await waitForSocketState(test.wsConnection.ws, test.wsConnection.ws.CLOSED);
        expect(responseMessage).toBe(JSON.stringify(resultTemplate));
    });
});
