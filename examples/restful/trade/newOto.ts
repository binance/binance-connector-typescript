import dotenv from 'dotenv';
import { OtoPendingType, orderListWorkingType, RestTradeTypes, Side, Spot, TimeInForce } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestTradeTypes.newOtoOptions = {
    recvWindow: 5000,
    workingTimeInForce: TimeInForce.GTC,
    pendingPrice: 400,
    pendingTimeInForce: TimeInForce.GTC
};

client.newOto('BNBUSDT', orderListWorkingType.LIMIT, Side.BUY, 400, 1, OtoPendingType.LIMIT, Side.BUY, 1, options).then((res: RestTradeTypes.newOcoResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
