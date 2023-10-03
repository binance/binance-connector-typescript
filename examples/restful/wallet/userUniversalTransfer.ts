import dotenv from 'dotenv';
import { RestWalletTypes, UnivTransferType } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });


client.userUniversalTransfer(
    UnivTransferType.MAIN_MARGIN,
    'BNB',
    0.1
).then((res: RestWalletTypes.userUniversalTransferResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
