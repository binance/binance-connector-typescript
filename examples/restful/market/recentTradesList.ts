import dotenv from 'dotenv';
import { RestMarketTypes } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot('', '', { baseURL: baseURL });

const options: RestMarketTypes.recentTradesListOptions = {
    limit: 5,
};

client.recentTradesList('BNBUSDT', options).then((res: RestMarketTypes.recentTradesListResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
