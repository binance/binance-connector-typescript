import { Spot } from '../../../src/index';
import dotenv from 'dotenv';
import { portfolioMarginBankruptcyLoanAmountOptions, portfolioMarginBankruptcyLoanAmountResponse } from '../../../src/modules/restful/portfolioMargin/types';


dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: portfolioMarginBankruptcyLoanAmountOptions = {
    recvWindow: 5000,
};

client.portfolioMarginBankruptcyLoanAmount(options).then((res: portfolioMarginBankruptcyLoanAmountResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
