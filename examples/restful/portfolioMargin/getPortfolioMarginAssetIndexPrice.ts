import { Spot } from '../../../src/index';
import dotenv from 'dotenv';
import { getPortfolioMarginAssetIndexPriceOptions, getPortfolioMarginAssetIndexPriceResponse } from '../../../src/modules/restful/portfolioMargin/types';


dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, '', { baseURL: baseURL });

const options: getPortfolioMarginAssetIndexPriceOptions = {
    asset: 'BNB',
};

client.getPortfolioMarginAssetIndexPrice(options).then((res: getPortfolioMarginAssetIndexPriceResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
