import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/market/symbolOrderBookTicker';

jest.mock('../../../src/index');

const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Symbol Order Book Ticker', () => {
    const client = new Spot('', '', { baseURL: baseURL });
    it('should return Symbol Order Book Ticker', async () => {
        const spy = jest.spyOn(client, 'symbolOrderBookTicker').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.symbolOrderBookTicker();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
