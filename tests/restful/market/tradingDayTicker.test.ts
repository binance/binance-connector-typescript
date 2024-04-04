import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/market/tradingDayTicker';

jest.mock('../../../src/index');

const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Trading Day Ticker', () => {
    const client = new Spot('', '', { baseURL: baseURL });
    it('should return Trading Day Ticker', async () => {
        const spy = jest.spyOn(client, 'tradingDayTicker').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.tradingDayTicker({symbol:'BNBUSDT'});
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
