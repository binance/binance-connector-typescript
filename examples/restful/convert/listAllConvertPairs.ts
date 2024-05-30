import { Spot } from '../../../src/index';
import dotenv from 'dotenv';
import { listAllConvertPairsOptions, listAllConvertPairsResponse } from '../../../src/modules/restful/convert/types';


dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: listAllConvertPairsOptions = {
    fromAsset: 'BTC',
    toAsset: 'USDT',
    recvWindow: 5000,
};

client.listAllConvertPairs(options).then((res: listAllConvertPairsResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
