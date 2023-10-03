import dotenv from 'dotenv';
import { RestMarketTypes } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot('', '', { baseURL: baseURL });

const options: RestMarketTypes.compressedAggregateTradesListOptions = {
    limit: 5,
};

client.compressedAggregateTradesList(
    'BNBUSDT',
    options
).then((res: RestMarketTypes.compressedAggregateTradesListResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
