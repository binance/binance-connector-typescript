import { Spot } from '../../../src/index';
import dotenv from 'dotenv';
import { acceptQuoteOptions, acceptQuoteResponse } from '../../../src/modules/restful/convert/types';


dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: acceptQuoteOptions = {
    recvWindow: 5000,
};

client.acceptQuote('12415572564', options).then((res: acceptQuoteResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
