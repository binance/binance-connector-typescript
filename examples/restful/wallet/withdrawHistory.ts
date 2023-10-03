import dotenv from 'dotenv';
import { RestWalletTypes } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestWalletTypes.withdrawHistoryOptions = {
    coin: 'BNB',
    status: 6
};

client.withdrawHistory(options).then((res: RestWalletTypes.withdrawHistoryResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
