import { Spot } from '../../../src/index';
import dotenv from 'dotenv';
import { getAccountBalanceOptions, getAccountBalanceResponse } from '../../../src/modules/restful/portfolioMargin/types';


dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: getAccountBalanceOptions = {
    recvWindow: 5000,
};

client.getAccountBalance(options).then((res: getAccountBalanceResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
