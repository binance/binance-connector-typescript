import dotenv from 'dotenv';
import { RestSimpleEarnTypes } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestSimpleEarnTypes.redeemLockedProductOptions = {
    recvWindow: 5000,
};

client.redeemLockedProduct('1234', options).then((res: RestSimpleEarnTypes.redeemLockedProductResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
