import dotenv from 'dotenv';
import { RestSimpleEarnTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestSimpleEarnTypes.setLockedAutoSubscribeOptions = {
    recvWindow: 5000,
};

client.setLockedAutoSubscribe('1234', true, options).then((res: RestSimpleEarnTypes.setLockedAutoSubscribeResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
