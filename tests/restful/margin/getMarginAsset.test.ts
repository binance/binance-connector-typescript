import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getMarginAsset';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Margin Asset', () => {
    const client = new Spot(apiKey, '', { baseURL: baseURL });
    it('should return Query Margin Asset', async () => {
        const spy = jest.spyOn(client, 'getMarginAsset').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getMarginAsset('BTC');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
