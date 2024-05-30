import { Spot } from '../../../src/index';
import dotenv from 'dotenv';
import { getConvertTradeHistoryOptions, getConvertTradeHistoryResponse } from '../../../src/modules/restful/convert/types';


dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: getConvertTradeHistoryOptions = {
    limit: 100,
    recvWindow: 5000,
};

client.getConvertTradeHistory(1623824139000, 1626416139000, options).then((res: getConvertTradeHistoryResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
