
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/convert/sendQuoteRequest';
import { RestConvertTypes } from '../../../src/index';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Send quote request', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should request a quote for the requested token pairs', async () => {
        const options: RestConvertTypes.sendQuoteRequestOptions = {
            fromAmount: 0.1
        };
        const spy = jest.spyOn(client, 'sendQuoteRequest').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.sendQuoteRequest('BTC', 'USDT', options);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
