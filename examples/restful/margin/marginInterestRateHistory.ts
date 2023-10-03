import dotenv from 'dotenv';
import { RestMarginTypes } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestMarginTypes.marginInterestRateHistoryOptions = {
    vipLevel: 1,
    recvWindow: 5000,
};

client.marginInterestRateHistory('BTC', options).then((res: RestMarginTypes.marginInterestRateHistoryResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
