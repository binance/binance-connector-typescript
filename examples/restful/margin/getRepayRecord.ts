import dotenv from 'dotenv';
import { RestMarginTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestMarginTypes.getRepayRecordOptions = {
    txId: 2970933056,
    current: 1,
    size: 100,
    recvWindow: 5000,
};

client.getRepayRecord('BTC', options).then((res: RestMarginTypes.getRepayRecordResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
