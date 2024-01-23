import dotenv from 'dotenv';
import { OrderType, RestTradeTypes, Side, Spot, TimeInForce } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestTradeTypes.newOrderSOROptions = {
    timeInForce: TimeInForce.GTC,
    price: 219,
    recvWindow: 5000,
};

client.newOrderSOR('BNBUSDT', Side.SELL, OrderType.LIMIT, 1, options).then((res: RestTradeTypes.newOrderSORResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
