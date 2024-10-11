import { Spot } from '../../../src/index';
import dotenv from 'dotenv';
import { subscribeDualInvestmentProductsOptions, subscribeDualInvestmentProductsResponse } from '../../../src/modules/restful/dualInvestment/types';
import { AutoCompoundPlan } from '../../../src/modules/enum';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: subscribeDualInvestmentProductsOptions = {
    recvWindow: 5000,
};

client.subscribeDualInvestmentProducts('1', '2', 1.0, AutoCompoundPlan.STANDARD, options).then((res: subscribeDualInvestmentProductsResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
