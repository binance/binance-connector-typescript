import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/systemStatus';

jest.mock('../../../src/index');

const baseURL = process.env.BINANCE_BASE_URL || '';

describe('System Status', () => {
    const client = new Spot('', '', { baseURL: baseURL });
    it('should return System Status', async () => {
        const spy = jest.spyOn(client, 'systemStatus').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.systemStatus();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
