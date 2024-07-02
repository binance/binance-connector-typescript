import http from 'http';
import WebSocket from 'ws';
import { startServer, waitForSocketState, resultTemplate } from '../utils/webSocketTestUtils';
import { mockNewOCOOrder }  from '../../mock_values/websocket/trades/newOCOOrder';
import { OrderListAboveBelowType, Side, StopLimitTimeInForce, WebsocketAPI } from '../../../src/index';

describe('New OCO Order', () => {
    let responseMessage: WebSocket.Data = '';
    let server: http.Server;
    const callbacks = {
        open: (client: WebsocketAPI) => client.newOCOOrder('BNBUSDT', Side.BUY, 1, OrderListAboveBelowType.STOP_LOSS_LIMIT, OrderListAboveBelowType.LIMIT_MAKER, {
            listClientOrderId: 'my_list_order',
            abovePrice: 400,
            aboveStopPrice: 405,
            aboveTimeInForce: StopLimitTimeInForce.GTC,
            belowPrice: 395
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
