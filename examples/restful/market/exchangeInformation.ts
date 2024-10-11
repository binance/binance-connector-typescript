import dotenv from 'dotenv';
import { RestMarketTypes, Spot } from '../../../src/index';

dotenv.config();

const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot('', '', { baseURL: baseURL });

const options: RestMarketTypes.exchangeInformationOptions = {
    symbols: ['BTCUSDT', 'ETHUSDT']
};

client.exchangeInformation(options).then((res: RestMarketTypes.exchangeInformationResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
