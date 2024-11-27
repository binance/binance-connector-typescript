import dotenv from 'dotenv';
import { RedeemOption, RestSimpleEarnTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestSimpleEarnTypes.setLockedRedeemOptionOptions = {
    recvWindow: 5000,
};

client.setLockedRedeemOption('1', RedeemOption.SPOT, options).then((res: RestSimpleEarnTypes.setLockedRedeemOptionResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
