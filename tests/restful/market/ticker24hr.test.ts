import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/market/ticker24hr';

jest.mock('../../../src/index');

const baseURL = process.env.BINANCE_BASE_URL || '';

describe('24hr Ticker Price Change Statistics', () => {
    const client = new Spot('', '', { baseURL: baseURL });
    it('should return 24hr Ticker Price Change Statistics', async () => {
        const spy = jest.spyOn(client, 'ticker24hr').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.ticker24hr();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
