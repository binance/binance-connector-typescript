import dotenv from 'dotenv';
import { RestSubAccountTypes } from '../../../src/types';
import { Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestSubAccountTypes.getManagedSubAccountAssetDetailsOptions = {
    recvWindow: 5000,
};

client.getManagedSubAccountAssetDetails(
    'alice@test.com',
    options
).then((res: RestSubAccountTypes.getManagedSubAccountAssetDetailsResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
