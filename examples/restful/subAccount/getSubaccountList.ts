import dotenv from 'dotenv';
import { IsFreeze, RestSubAccountTypes } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestSubAccountTypes.getSubAccountListOptions = {
    email: 'alice@test.com',
    isFreeze: IsFreeze.false,
    page: 1,
    limit: 1,
    recvWindow: 5000,
};

client.getSubAccountList(options).then((res: RestSubAccountTypes.getSubAccountListResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
