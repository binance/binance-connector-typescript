import dotenv from 'dotenv';
import { RestMarketTypes, Spot } from '../../../src/index';

dotenv.config();

const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot('', '', { baseURL: baseURL });

const options: RestMarketTypes.rollingWindowPriceChangeStatisticsOptions = {
    symbol: 'BNBUSDT',
};

client.rollingWindowPriceChangeStatistics(
    options
).then(
    (
        res: RestMarketTypes.rollingWindowPriceChangeStatisticsResponse | RestMarketTypes.rollingWindowPriceChangeStatisticsResponse[]
    ) => {
        console.log(res);
    }).catch(err => { console.log(err); });
