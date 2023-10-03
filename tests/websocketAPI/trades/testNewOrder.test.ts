import http from 'http';
import WebSocket from 'ws';
import { startServer, waitForSocketState, resultTemplate } from '../utils/webSocketTestUtils';
import { WebsocketAPI } from '../../../src/websocketAPI';
import { NewOrderRespType, OrderType, Side, TimeInForce } from '../../../src/types';

describe('Test New Order', () => {
    let responseMessage: WebSocket.Data = '';
    let server: http.Server;
    const callbacks = {
        open: (client: WebsocketAPI) => client.testNewOrder('BNBUSDT', Side.BUY, OrderType.LIMIT, {
            timeInForce: TimeInForce.GTC,
            price: 300,
            quantity: 0.1,
            newClientOrderId: 'my_order_id_2',
            newOrderRespType: NewOrderRespType.FULL
        }),
        close: () => console.log('Disconnected with Websocket server'),
        message: (data: string) => responseMessage = data.toString()
    };

    beforeAll(async () => server = await startServer(3000));

    afterAll(() => server.close());

    it('should test order placement', async () => {
        const test = new WebsocketAPI('', '', { callbacks, wsURL: 'ws://localhost:3000'});
        if(test.wsConnection.ws) await waitForSocketState(test.wsConnection.ws, test.wsConnection.ws.OPEN);
        setTimeout(() => test.disconnect(), 100);
        if(test.wsConnection.ws) await waitForSocketState(test.wsConnection.ws, test.wsConnection.ws.CLOSED);
        expect(responseMessage).toBe(JSON.stringify(resultTemplate));
    });
});
