import dotenv from 'dotenv';
import { RestSimpleEarnTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestSimpleEarnTypes.getFlexibleSubscriptionPreviewOptions = {
    recvWindow: 5000,
};

client.getFlexibleSubscriptionPreview(
    'BTC001',
    1.0,
    options
).then((res: RestSimpleEarnTypes.getFlexibleSubscriptionPreviewResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
