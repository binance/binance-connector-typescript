import { Spot } from '../../../src/index';
import dotenv from 'dotenv';
import { getDualInvestmentProductListOptions, getDualInvestmentProductListResponse } from '../../../src/modules/restful/dualInvestment/types';
import { OptionType } from '../../../src/modules/enum';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: getDualInvestmentProductListOptions = {
    recvWindow: 5000,
};

client.getDualInvestmentProductList(OptionType.CALL, 'USDT', 'BNB', options).then((res: getDualInvestmentProductListResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
