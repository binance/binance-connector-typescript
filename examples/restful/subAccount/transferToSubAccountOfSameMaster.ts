import dotenv from 'dotenv';
import { RestSubAccountTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestSubAccountTypes.transferToSubAccountOfSameMasterOptions = {
    recvWindow: 5000,
};

client.transferToSubAccountOfSameMaster(
    '', // sub email
    'USDT',
    0.1, // amount
    options
).then((res: RestSubAccountTypes.transferToSubAccountOfSameMasterResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
