import { Spot } from '../../../src/index';
import dotenv from 'dotenv';
import { getPortfolioMarginAssetLeverageResponse } from '../../../src/modules/restful/portfolioMargin/types';


dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, '', { baseURL: baseURL });

client.getPortfolioMarginAssetLeverage().then((res: getPortfolioMarginAssetLeverageResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
