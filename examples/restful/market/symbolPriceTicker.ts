import dotenv from 'dotenv';
import { RestMarketTypes, Spot } from '../../../src/index';

dotenv.config();

const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot('', '', { baseURL: baseURL });

const options: RestMarketTypes.symbolPriceTickerOptions = {
    symbol: 'BNBUSDT',
};

client.symbolPriceTicker(
    options
).then((res: RestMarketTypes.symbolPriceTickerResponse | RestMarketTypes.symbolPriceTickerResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
