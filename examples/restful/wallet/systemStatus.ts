import dotenv from 'dotenv';
import { RestWalletTypes, Spot } from '../../../src/index';

dotenv.config();

const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot('', '', { baseURL: baseURL });

client.systemStatus().then((res: RestWalletTypes.systemStatusResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
