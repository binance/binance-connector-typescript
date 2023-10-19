import dotenv from 'dotenv';
import { RestMarginTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestMarginTypes.getIsolatedMarginTierDataOptions = {
    recvWindow: 5000,
};

client.getIsolatedMarginTierData('BNBUSDT', options).then((res: RestMarginTypes.getIsolatedMarginTierDataResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
