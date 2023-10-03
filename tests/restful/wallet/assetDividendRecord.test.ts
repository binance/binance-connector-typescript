import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/assetDividendRecord';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Asset Dividend Record', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Asset Dividend Record', async () => {
        const spy = jest.spyOn(client, 'assetDividendRecord').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.assetDividendRecord();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
