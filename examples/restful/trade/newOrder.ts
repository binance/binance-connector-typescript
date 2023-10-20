import dotenv from 'dotenv';
import { OrderType, RestTradeTypes, Side, Spot, TimeInForce } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestTradeTypes.newOrderOptions = {
    timeInForce: TimeInForce.GTC,
    quantity: 1,
    price: 219,
    recvWindow: 5000,
};

client.newOrder('BNBUSDT', Side.SELL, OrderType.LIMIT, options).then((res: RestTradeTypes.newOrderResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
