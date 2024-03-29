import dotenv from 'dotenv';
import { RestTradeTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestTradeTypes.getPreventedMatchesOptions = {
    preventedMatchId: 1,
    recvWindow: 5000,
};

client.getPreventedMatches('BNBUSDT', options).then((res: RestTradeTypes.getPreventedMatchesResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
