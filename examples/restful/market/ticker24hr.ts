import dotenv from 'dotenv';
import { RestMarketTypes } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot('', '', { baseURL: baseURL });

const options: RestMarketTypes.ticker24hrOptions = {
    symbol: 'BNBUSDT',
};

client.ticker24hr(options).then((res: RestMarketTypes.ticker24hrResponse | RestMarketTypes.ticker24hrResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
