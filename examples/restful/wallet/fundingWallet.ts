import dotenv from 'dotenv';
import { RestWalletTypes } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestWalletTypes.fundingWalletOptions = {
    asset: 'BNB',
};

client.fundingWallet(options).then((res: RestWalletTypes.fundingWalletResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
