import dotenv from 'dotenv';
import { OrderListAboveBelowType, RestTradeTypes, Side, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestTradeTypes.newOcoOptions = {
    recvWindow: 5000,
    abovePrice: 510,
    belowPrice: 500
};

client.newOco('BNBUSDT', Side.SELL, 1, OrderListAboveBelowType.LIMIT_MAKER, OrderListAboveBelowType.LIMIT_MAKER, options).then((res: RestTradeTypes.newOcoResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
