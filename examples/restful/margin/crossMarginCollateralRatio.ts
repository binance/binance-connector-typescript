import dotenv from 'dotenv';
import { RestMarginTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

client.crossMarginCollateralRatio().then((res: RestMarginTypes.crossMarginCollateralRatioResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
