import dotenv from 'dotenv';
import { CancelReplaceMode, OrderType, RestTradeTypes, Side, TimeInForce } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestTradeTypes.cancelAnExistingOrderAndSendANewOrderOptions = {
    timeInForce: TimeInForce.GTC,
    quantity: 1,
    price: 219,
    recvWindow: 5000,
};

client.cancelAnExistingOrderAndSendANewOrder(
    'BNBUSDT',
    Side.SELL,
    OrderType.LIMIT,
    CancelReplaceMode.STOP_ON_FAILURE,
    options
).then((res: RestTradeTypes.cancelAnExistingOrderAndSendANewOrderResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
