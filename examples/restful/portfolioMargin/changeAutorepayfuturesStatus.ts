import { Spot } from '../../../src/index';
import dotenv from 'dotenv';
import { changeAutorepayfuturesStatusOptions, changeAutorepayfuturesStatusResponse } from '../../../src/modules/restful/portfolioMargin/types';


dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: changeAutorepayfuturesStatusOptions = {
    recvWindow: 5000,
};

client.changeAutorepayfuturesStatus(true, options).then((res: changeAutorepayfuturesStatusResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
