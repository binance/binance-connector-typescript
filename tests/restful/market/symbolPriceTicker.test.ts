import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/market/symbolPriceTicker';

jest.mock('../../../src/index');

const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Symbol Price Ticker', () => {
    const client = new Spot('', '', { baseURL: baseURL });
    it('should return Symbol Price Ticker', async () => {
        const spy = jest.spyOn(client, 'symbolPriceTicker').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.symbolPriceTicker();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
