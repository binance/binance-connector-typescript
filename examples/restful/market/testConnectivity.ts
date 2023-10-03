import dotenv from 'dotenv';
import { Spot } from '../../../src/index';

dotenv.config();

const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot('', '', { baseURL: baseURL });


client.testConnectivity().then((res: Record<string, never>) => {
    console.log(res);
}).catch(err => { console.log(err); });
