import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getAllCrossMarginPairs';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get All Cross Margin Pairs', () => {
    const client = new Spot(apiKey, '', { baseURL: baseURL });
    it('should return Get All Cross Margin Pairs', async () => {
        const spy = jest.spyOn(client, 'getAllCrossMarginPairs').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getAllCrossMarginPairs();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
