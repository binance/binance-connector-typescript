import dotenv from 'dotenv';
import { RestMarginTypes, Side } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestMarginTypes.marginAccountNewOcoOptions = {
    recvWindow: 5000,
};

client.marginAccountNewOco(
    'BNBUSDT',
    Side.SELL,
    1,
    218,
    220,
    options
).then((res: RestMarginTypes.marginAccountNewOcoResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
