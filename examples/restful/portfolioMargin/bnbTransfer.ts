import { Spot } from '../../../src/index';
import dotenv from 'dotenv';
import { bnbTransferOptions, bnbTransferResponse } from '../../../src/modules/restful/portfolioMargin/types';
import { TransferSide } from '../../../src/modules/enum';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: bnbTransferOptions = {
    recvWindow: 5000,
};

client.bnbTransfer(1.01, TransferSide.TO_UM, options).then((res: bnbTransferResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
