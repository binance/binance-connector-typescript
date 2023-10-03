import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/detailOnSubAccountMarginAccount';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Detail on Sub-account Margin Account', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Detail on Sub-account Margin Account', async () => {
        const spy = jest.spyOn(client, 'detailOnSubAccountMarginAccount').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.detailOnSubAccountMarginAccount('sub.account@email.com');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
