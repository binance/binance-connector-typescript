import dotenv from 'dotenv';
import { NewOrderRespType, OrderType, Side, TimeInForce, WebsocketAPI, WsTradeTypes } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const wsURL = 'wss://testnet.binance.vision/ws-api/v3'; // we setup wsURL to testnet. The default value set to production site: wss://ws-api.binance.com/ws-api/v3
const options: WsTradeTypes.testNewOrderOptions = {
    timeInForce: TimeInForce.GTC,
    price: 300,
    quantity: 0.1,
    newClientOrderId: 'my_order_id_2',
    newOrderRespType: NewOrderRespType.FULL
};

const callbacks = {
    open: (client: WebsocketAPI) => {
        console.debug('Connected with Websocket server');
        client.testNewOrder('BNBUSDT', Side.BUY, OrderType.LIMIT, options);
    },
    close: () => console.debug('Disconnected with Websocket server'),
    message: (data: string) => {
        const parseData = JSON.parse(data);
        console.info(parseData);
    }
};

const websocketAPIClient = new WebsocketAPI(apiKey, apiSecret, { callbacks, wsURL });

// disconnect after 20 seconds
setTimeout(() => websocketAPIClient.disconnect(), 20000);
