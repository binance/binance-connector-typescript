import { Spot } from '../../../src/index';
import dotenv from 'dotenv';
import { checkDualInvestmentAccountsOptions, checkDualInvestmentAccountsResponse } from '../../../src/modules/restful/dualInvestment/types';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: checkDualInvestmentAccountsOptions = {
    recvWindow: 5000,
};

client.checkDualInvestmentAccounts(options).then((res: checkDualInvestmentAccountsResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
