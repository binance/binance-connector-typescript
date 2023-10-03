import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/getAssetsThatCanBeConvertedIntoBnb';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Assets That Can Be Converted Into BNB', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Get Assets That Can Be Converted Into BNB', async () => {
        const spy = jest.spyOn(client, 'getAssetsThatCanBeConvertedIntoBnb').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getAssetsThatCanBeConvertedIntoBnb();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
