import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/getSubaccountAssets';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Sub-account Assets', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Query Sub-account Assets', async () => {
        const spy = jest.spyOn(client, 'getSubAccountAssets').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getSubAccountAssets('alice@test.com');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
