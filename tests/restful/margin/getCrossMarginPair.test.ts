import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getCrossMarginPair';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Cross Margin Pair', () => {
    const client = new Spot(apiKey, '', { baseURL: baseURL });
    it('should return Query Cross Margin Pair', async () => {
        const spy = jest.spyOn(client, 'getCrossMarginPair').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getCrossMarginPair('BNBUSDT');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
