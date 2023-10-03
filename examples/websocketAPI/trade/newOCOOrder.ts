import dotenv from 'dotenv';
import { NewOrderRespType, Side, StopLimitTimeInForce, WsTradeTypes } from '../../../src/types';
import { WebsocketAPI } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const wsURL = 'wss://testnet.binance.vision/ws-api/v3'; // we setup wsURL to testnet. The default value set to production site: wss://ws-api.binance.com/ws-api/v3
const options: WsTradeTypes.newOCOOrderOptions = {
    listClientOrderId: 'my_list_order',
    stopPrice: 330,
    stopLimitPrice: 340,
    stopLimitTimeInForce: StopLimitTimeInForce.GTC,
    newOrderRespType: NewOrderRespType.FULL
};
const callbacks = {
    open: (client: WebsocketAPI) => {
        console.debug('Connected with Websocket server');
        client.newOCOOrder('BNBUSDT', Side.BUY, 300, 0.1, options);
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
