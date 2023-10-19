import dotenv from 'dotenv';
import { RestSubAccountTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestSubAccountTypes.getDetailOnSubAccountFuturesAccountV2Options = {
    recvWindow: 5000,
};

client.getDetailOnSubAccountFuturesAccountV2(
    'alice@test.com', // email
    2, // futuresType
    options
).then((res: RestSubAccountTypes.getDetailOnSubAccountFuturesAccountV2Response) => {
    console.log(res);
}).catch(err => { console.log(err); });
