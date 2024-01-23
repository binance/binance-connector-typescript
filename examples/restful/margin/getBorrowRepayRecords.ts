import dotenv from 'dotenv';
import { MarginBorrowRepayType, RestMarginTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestMarginTypes.getBorrowRepayRecordsOptions = {
    recvWindow: 5000,
};

client.getBorrowRepayRecords(MarginBorrowRepayType.BORROW, options).then((res: RestMarginTypes.getBorrowRepayRecordsResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });