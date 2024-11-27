import dotenv from 'dotenv';
import { OrderListAboveBelowType, OrderListWorkingType, RestMarginTypes, Side, Spot, TimeInForce } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestMarginTypes.marginAccountNewOtocoOptions = {
    workingTimeInForce: TimeInForce.GTC,
    pendingAbovePrice: 605,
    pendingBelowType: OrderListAboveBelowType.LIMIT_MAKER,
    pendingBelowPrice: 595,
    workingIcebergQty: 0.1,
    recvWindow: 5000,
};

client.marginAccountNewOtoco(
    'BNBUSDT',
    OrderListWorkingType.LIMIT,
    Side.BUY,
    600,
    1,
    Side.SELL,
    1,
    OrderListAboveBelowType.LIMIT_MAKER,
    options
).then((res: RestMarginTypes.marginAccountNewOtocoResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
