import dotenv from 'dotenv';
import { RestWalletTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestWalletTypes.withdrawOptions = {
    network: 'BNB',
    name: 'address name',
    walletType: 0
};

client.withdraw('BNB', 'bnb_address', 1, options).then((res: RestWalletTypes.withdrawResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
