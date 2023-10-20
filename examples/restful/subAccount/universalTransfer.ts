import dotenv from 'dotenv';
import { FromAccountType, RestSubAccountTypes, Spot, ToAccountType } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestSubAccountTypes.universalTransferOptions = {
    symbol: 'BNBUSDT',
    recvWindow: 5000,
};

client.universalTransfer(
    FromAccountType.SPOT, // from account type
    ToAccountType.USDT_FUTURE, // to account type
    'USDT', // asset
    0.1, // amount
    options
).then((res: RestSubAccountTypes.universalTransferResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
