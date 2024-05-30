import { Spot } from '../../../src/index';
import dotenv from 'dotenv';
import { orderStatusOptions, orderStatusResponse } from '../../../src/modules/restful/convert/types';


dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: orderStatusOptions = {
    quoteId: '12415572564',
    recvWindow: 5000,
};

client.orderStatus(options).then((res: orderStatusResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
