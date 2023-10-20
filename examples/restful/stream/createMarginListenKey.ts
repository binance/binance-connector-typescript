import dotenv from 'dotenv';
import { listenkeyResponse, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, '', { baseURL: baseURL });

client.createMarginListenKey().then((res: listenkeyResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
