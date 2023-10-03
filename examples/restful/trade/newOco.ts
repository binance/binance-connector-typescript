import dotenv from 'dotenv';
import { Side, RestTradeTypes } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestTradeTypes.newOcoOptions = {
    recvWindow: 5000,
};

client.newOco('BNBUSDT', Side.SELL, 1, 218, 220, options).then((res: RestTradeTypes.newOcoResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
