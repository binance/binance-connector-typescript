import dotenv from 'dotenv';
import { Spot } from '../../../src/index';
import { listenkeyResponse } from '../../../src/modules/restful/stream/types';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, '', { baseURL: baseURL });

client.createIsolatedMarginListenKey('BNBUSDT').then((res: listenkeyResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
