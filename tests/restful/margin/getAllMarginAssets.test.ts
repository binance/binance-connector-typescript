import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getAllMarginAssets';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get All Margin Assets', () => {
    const client = new Spot(apiKey, '', { baseURL: baseURL });
    it('should return Get All Margin Assets', async () => {
        const spy = jest.spyOn(client, 'getAllMarginAssets').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getAllMarginAssets();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
