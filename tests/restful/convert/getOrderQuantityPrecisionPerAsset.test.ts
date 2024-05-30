
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/convert/getOrderQuantityPrecisionPerAsset';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query order quantity precision per asset', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should return supported asset`s precision information', async () => {
        const spy = jest.spyOn(client, 'getOrderQuantityPrecisionPerAsset').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getOrderQuantityPrecisionPerAsset();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
