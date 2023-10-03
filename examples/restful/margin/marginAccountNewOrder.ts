import dotenv from 'dotenv';
import { OrderType, RestMarginTypes, Side, TimeInForce } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestMarginTypes.marginAccountNewOrderOptions = {
    price: 219,
    stopPrice: 221.01,
    timeInForce: TimeInForce.GTC,
    recvWindow: 5000,
};

client.marginAccountNewOrder(
    'BNBUSDT',
    Side.SELL,
    OrderType.LIMIT,
    options
).then((res: RestMarginTypes.marginAccountNewOrderResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
