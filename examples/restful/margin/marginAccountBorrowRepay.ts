import dotenv from 'dotenv';
import { MarginBorrowRepayType, RestMarginTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestMarginTypes.marginAccountBorrowRepayOptions = {
    recvWindow: 5000,
};

client.marginAccountBorrowRepay('BNB', 'FALSE', 'BNBUSDT', '1.0', MarginBorrowRepayType.BORROW, options).then((res: RestMarginTypes.marginAccountBorrowRepayResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });