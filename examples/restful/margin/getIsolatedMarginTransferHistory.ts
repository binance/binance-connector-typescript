import dotenv from 'dotenv';
import { RestMarginTypes, Spot, TransFrom, TransTo } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestMarginTypes.getIsolatedMarginTransferHistoryOptions = {
    asset: 'BNB',
    transFrom: TransFrom.SPOT,
    transTo: TransTo.ISOLATED_MARGIN,
    current: 1,
    size: 100,
    recvWindow: 5000,
};

client.getIsolatedMarginTransferHistory(
    'BNBUSDT',
    options
).then((res: RestMarginTypes.getIsolatedMarginTransferHistoryResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
