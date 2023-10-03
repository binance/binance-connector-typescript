import dotenv from 'dotenv';
import { RestMarketTypes } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot('', '', { baseURL: baseURL });

client.currentAveragePrice('BNBUSDT').then((res: RestMarketTypes.currentAveragePriceResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
