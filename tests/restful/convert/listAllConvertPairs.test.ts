
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/convert/listAllConvertPairs';
import { RestConvertTypes } from '../../../src/index';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('List All Convert Pairs', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should return all convertible token pairs and the tokens respective upper/lower limits', async () => {
        const options: RestConvertTypes.listAllConvertPairsOptions = {
            fromAsset: 'BTC'
        };
        const spy = jest.spyOn(client, 'listAllConvertPairs').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.listAllConvertPairs(options);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
