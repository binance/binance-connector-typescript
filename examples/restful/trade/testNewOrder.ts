import dotenv from 'dotenv';
import { OrderType, RestTradeTypes, Side, Spot, TimeInForce } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestTradeTypes.testNewOrderOptions = {
    timeInForce: TimeInForce.GTC,
    quantity: 1,
    price: 219,
    recvWindow: 5000,
};

client.testNewOrder('BNBUSDT', Side.SELL, OrderType.LIMIT, options).then((res: Record<string, never> | RestTradeTypes.testNewOrderResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
