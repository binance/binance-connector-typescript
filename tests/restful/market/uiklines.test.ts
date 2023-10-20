import { expect } from '@jest/globals';
import { Interval, Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/market/uiklines';

jest.mock('../../../src/index');

const baseURL = process.env.BINANCE_BASE_URL || '';

describe('UIKlines', () => {
    const client = new Spot('', '', { baseURL: baseURL });
    it('should return UIKlines', async () => {
        const spy = jest.spyOn(client, 'uiklines').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.uiklines('BNBUSDT', Interval['1m']);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
