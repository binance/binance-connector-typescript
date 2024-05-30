import { Spot } from '../../../src/index';
import dotenv from 'dotenv';
import { cancelLimitOrderOptions, cancelLimitOrderResponse } from '../../../src/modules/restful/convert/types';


dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: cancelLimitOrderOptions = {
    recvWindow: 5000,
};

client.cancelLimitOrder(1603680255057330400, options).then((res: cancelLimitOrderResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
