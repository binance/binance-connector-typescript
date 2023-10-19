import dotenv from 'dotenv';
import { RestSimpleEarnTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestSimpleEarnTypes.subscribeFlexibleProductOptions = {
    autoSubscribe: false,
    recvWindow: 5000,
};

client.subscribeFlexibleProduct(
    'BTC001',
    0.01,
    options
).then((res: RestSimpleEarnTypes.subscribeFlexibleProductResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
