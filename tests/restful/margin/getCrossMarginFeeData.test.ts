import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getCrossMarginFeeData';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Cross Margin Fee Data', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Cross Margin Fee Data', async () => {
        const spy = jest.spyOn(client, 'getCrossMarginFeeData').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getCrossMarginFeeData();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
