import dotenv from 'dotenv';
import { RestMarginTypes, Spot, TransFrom, TransTo } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestMarginTypes.isolatedMarginAccountTransferOptions = {
    recvWindow: 5000,
};

client.isolatedMarginAccountTransfer('BTC', 'BNBUSDT', TransFrom.SPOT, TransTo.ISOLATED_MARGIN, 1.01, options)
    .then((res: RestMarginTypes.isolatedMarginAccountTransferResponse) => {
        console.log(res);
    }).catch(err => { console.log(err); });
