import dotenv from 'dotenv';
import { RestSubAccountTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const currentTime = Date.now();

client.getManagedSubAccountTransferLog(
    '', // email
    (currentTime - 1000000), // startTime
    currentTime, // endTime
    1, // page
    10, // limit
).then((res: RestSubAccountTypes.getManagedSubAccountTransferLogResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
