import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/market/recentTradesList';

jest.mock('../../../src/index');

const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Recent Trades List', () => {
    const client = new Spot('', '', { baseURL: baseURL });
    it('should return Recent Trades List', async () => {
        const spy = jest.spyOn(client, 'recentTradesList').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.recentTradesList('BNBUSDT');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
