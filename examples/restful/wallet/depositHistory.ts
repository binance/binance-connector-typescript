import dotenv from 'dotenv';
import { RestWalletTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestWalletTypes.depositHistoryOptions = {
    coin: 'BNB',
    status: 1
};

client.depositHistory(options).then((res: RestWalletTypes.depositHistoryResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
