import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getCrossMarginAccountDetails';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Cross Margin Account Details', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Cross Margin Account Details', async () => {
        const spy = jest.spyOn(client, 'getCrossMarginAccountDetails').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getCrossMarginAccountDetails();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
