import { Spot } from '../../../src/index';
import dotenv from 'dotenv';
import { getOrderQuantityPrecisionPerAssetOptions, getOrderQuantityPrecisionPerAssetResponse } from '../../../src/modules/restful/convert/types';


dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: getOrderQuantityPrecisionPerAssetOptions = {
    recvWindow: 5000,
};

client.getOrderQuantityPrecisionPerAsset(options).then((res: getOrderQuantityPrecisionPerAssetResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
