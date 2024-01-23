import dotenv from 'dotenv';
import { RestMarketTypes, Spot } from '../../../src/index';

dotenv.config();

const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot('', '', { baseURL: baseURL });

const options: RestMarketTypes.tradingDayTickerOptions = {
    type: 'MINI',
};

client.tradingDayTicker('BNBUSDT', options).then((res: RestMarketTypes.tradingDayTickerResponse | RestMarketTypes.tradingDayTickerResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
