import dotenv from 'dotenv';
import { Interval, RestMarketTypes, Spot } from '../../../src/index';

dotenv.config();

const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot('', '', { baseURL: baseURL });

const options: RestMarketTypes.uiklinesOptions = {
    limit: 5,
};

client.uiklines('BNBUSDT', Interval['1m'], options).then((res: RestMarketTypes.uiklinesResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
