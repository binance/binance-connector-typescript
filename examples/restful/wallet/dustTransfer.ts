import dotenv from 'dotenv';
import { RestWalletTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestWalletTypes.dustTransferOptions = {
    recvWindow: 5000,
};

client.dustTransfer(['ETH', 'XRP'], options).then((res: RestWalletTypes.dustTransferResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
