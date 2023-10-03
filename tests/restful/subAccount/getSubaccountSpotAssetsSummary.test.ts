import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/getSubaccountSpotAssetsSummary';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Sub-account Spot Assets Summary', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Query Sub-account Spot Assets Summary', async () => {
        const spy = jest.spyOn(client, 'getSubAccountSpotAssetsSummary').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getSubAccountSpotAssetsSummary();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
