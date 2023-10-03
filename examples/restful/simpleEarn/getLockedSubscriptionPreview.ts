import dotenv from 'dotenv';
import { RestSimpleEarnTypes } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestSimpleEarnTypes.getLockedSubscriptionPreviewOptions = {
    recvWindow: 5000,
};

client.getLockedSubscriptionPreview(
    'Bnb*120',
    1.0,
    options
).then((res: RestSimpleEarnTypes.getLockedSubscriptionPreviewResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
