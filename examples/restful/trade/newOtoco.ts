import dotenv from 'dotenv';
import { OrderListAboveBelowType, orderListWorkingType, RestTradeTypes, Side, Spot, TimeInForce } from '../../../src/index';

dotenv.config();


const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestTradeTypes.newOtocoOptions = {
    recvWindow: 5000,
    workingTimeInForce: TimeInForce.GTC,
    pendingAbovePrice: 400,
    pendingBelowType: OrderListAboveBelowType.LIMIT_MAKER,
    pendingBelowPrice: 395
};

client.newOtoco('BNBUSDT', orderListWorkingType.LIMIT, Side.BUY, 400, 1, Side.BUY, 1, OrderListAboveBelowType.LIMIT_MAKER, options).then((res: RestTradeTypes.newOcoResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });