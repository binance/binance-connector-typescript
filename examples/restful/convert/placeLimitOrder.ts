import { Spot } from '../../../src/index';
import dotenv from 'dotenv';
import { placeLimitOrderOptions, placeLimitOrderResponse } from '../../../src/modules/restful/convert/types';
import { ConvertSide, ConvertExpiredType } from '../../../src/modules/enum';


dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: placeLimitOrderOptions = {
    recvWindow: 5000,
    baseAmount: 1
};

client.placeLimitOrder('BNB', 'USDT', 1, ConvertSide.BUY, ConvertExpiredType.One_Day, options).then((res: placeLimitOrderResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
