import dotenv from 'dotenv';
import { RestMarketTypes, Spot } from '../../../src/index';

dotenv.config();

const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot('', '', { baseURL: baseURL });

const options: RestMarketTypes.orderBookOptions = {
    limit: 100,
};

client.orderBook('BNBUSDT', options).then((res: RestMarketTypes.orderBookResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
