import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/market/rollingWindowPriceChangeStatistics';

jest.mock('../../../src/index');

const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Rolling window price change statistics', () => {
    const client = new Spot('', '', { baseURL: baseURL });
    it('should return Rolling window price change statistics', async () => {
        const spy = jest.spyOn(client, 'rollingWindowPriceChangeStatistics').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.rollingWindowPriceChangeStatistics();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
