import dotenv from 'dotenv';
import { RestMarketTypes, Spot } from '../../../src/index';

dotenv.config();

const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot('', '', { baseURL: baseURL });

client.checkServerTime().then((res: RestMarketTypes.checkServerTimeResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
