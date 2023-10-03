import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/market/checkServerTime';

jest.mock('../../../src/index');

const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Check Server Time', () => {
    const client = new Spot('', '', { baseURL: baseURL });
    it('should return Check Server Time', async () => {
        const spy = jest.spyOn(client, 'checkServerTime').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.checkServerTime();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
