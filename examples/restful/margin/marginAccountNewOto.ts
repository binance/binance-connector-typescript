import dotenv from 'dotenv';
import { OtoPendingType, OrderListWorkingType, RestMarginTypes, Side, Spot, TimeInForce } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestMarginTypes.marginAccountNewOtoOptions = {
    workingTimeInForce: TimeInForce.GTC,
    pendingPrice: 595,
    pendingTimeInForce: TimeInForce.GTC,
    workingIcebergQty: 0.1,
    recvWindow: 5000,
};

client.marginAccountNewOto(
    'BNBUSDT',
    OrderListWorkingType.LIMIT,
    Side.SELL,
    600,
    1,
    OtoPendingType.LIMIT,
    Side.BUY,
    1,
    options
).then((res: RestMarginTypes.marginAccountNewOtoResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
