import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/getManagedSubAccountMarginAssetDetails';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Managed Sub-account Margin Asset Details', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Managed Sub-account Margin Asset Details', async () => {
        const spy = jest.spyOn(client, 'getManagedSubAccountMarginAssetDetails').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getManagedSubAccountMarginAssetDetails('alice@test.com');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
