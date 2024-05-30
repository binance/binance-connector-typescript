import { Spot } from '../../../src/index';
import dotenv from 'dotenv';
import { fundCollectionByAssetOptions, fundCollectionByAssetResponse } from '../../../src/modules/restful/portfolioMargin/types';


dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: fundCollectionByAssetOptions = {
    recvWindow: 5000,
};

client.fundCollectionByAsset('BTC', options).then((res: fundCollectionByAssetResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
