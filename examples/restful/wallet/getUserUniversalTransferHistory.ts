import dotenv from 'dotenv';
import { RestWalletTypes, UnivTransferType } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

client.getUserUniversalTransferHistory(
    UnivTransferType.MAIN_MARGIN
).then((res: RestWalletTypes.getUserUniversalTransferHistoryResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
