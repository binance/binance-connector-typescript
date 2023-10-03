import dotenv from 'dotenv';
import { RestMarketTypes } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot('', '', { baseURL: baseURL });

const options: RestMarketTypes.symbolOrderBookTickerOptions = {
    symbol: 'BNBUSDT',
};

client.symbolOrderBookTicker(
    options
).then((res: RestMarketTypes.symbolOrderBookTickerResponse | RestMarketTypes.symbolOrderBookTickerResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
