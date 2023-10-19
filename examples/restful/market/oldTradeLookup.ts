import dotenv from 'dotenv';
import { RestMarketTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, '', { baseURL: baseURL });

const options: RestMarketTypes.oldTradeLookupOptions = {
    limit: 5,
};

client.oldTradeLookup('BNBUSDT', options).then((res: RestMarketTypes.oldTradeLookupResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
