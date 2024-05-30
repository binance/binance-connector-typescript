import { Spot } from '../../../src/index';
import dotenv from 'dotenv';
import { getClassicPortfolioMarginNegativeBalanceInterestHistoryOptions, getClassicPortfolioMarginNegativeBalanceInterestHistoryResponse } from '../../../src/modules/restful/portfolioMargin/types';


dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: getClassicPortfolioMarginNegativeBalanceInterestHistoryOptions = {
    asset: 'BNB',
    size: 100,
    recvWindow: 5000,
};

client.getClassicPortfolioMarginNegativeBalanceInterestHistory(options).then((res: getClassicPortfolioMarginNegativeBalanceInterestHistoryResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
