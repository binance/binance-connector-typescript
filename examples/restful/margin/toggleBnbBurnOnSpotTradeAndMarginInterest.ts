import dotenv from 'dotenv';
import { InterestBNBBurn, RestMarginTypes, Spot, SpotBNBBurn } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestMarginTypes.toggleBnbBurnOnSpotTradeAndMarginInterestOptions = {
    spotBNBBurn: SpotBNBBurn.true,
    interestBNBBurn: InterestBNBBurn.false,
    recvWindow: 5000,
};

client.toggleBnbBurnOnSpotTradeAndMarginInterest(
    options
).then((res: RestMarginTypes.toggleBnbBurnOnSpotTradeAndMarginInterestResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
