import dotenv from 'dotenv';
import { BusdStableCoinsConversion, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

client.switchOnOffBusdAndStableCoinsConversion(BusdStableCoinsConversion.USDC, true).then(() => {
    console.log('Success');
}).catch(err => { console.log(err); });
