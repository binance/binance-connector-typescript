import dotenv from 'dotenv';
import * as fs from 'fs';
import { RestTradeTypes, Spot } from '../../../src/index';

dotenv.config();

// Please make sure the api key/secret is consistent with the baseURL. It won't work if you send request to production site with testnet api key.
// https://api.binance.com  is for production.
// https://testnet.binance.vision is the spot testnet base url

// Below example shows how to sign the request with RSA key. You will have to a few steps:
// 1. Have your RSA keys ready.
// 2. Login to Binance.com to register your public key.
// 3. Save the API Key that is generated from UI, then you are ready to go.
const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const privateKey = fs.readFileSync('/Users/john/ed25519.pem');

const client = new Spot(apiKey, '', {
    baseURL,
    privateKey,
    privateKeyPassphrase: 'password',
    privateKeyAlgo: 'RSA'
});

const options: RestTradeTypes.accountInformationOptions = {
    recvWindow: 5000,
};

client.accountInformation(options).then((res: RestTradeTypes.accountInformationResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });