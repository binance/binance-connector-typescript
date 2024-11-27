import dotenv from 'dotenv';
import { RestWalletTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });


client.queryUserDelegationHistory('email', 1695205000000, 1695205999999).then((res: RestWalletTypes.queryUserDelegationHistoryResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
