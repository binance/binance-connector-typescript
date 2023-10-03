import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/market/testConnectivity';

jest.mock('../../../src/index');

const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Test Connectivity', () => {
    const client = new Spot('', '', { baseURL: baseURL });
    it('should return Test Connectivity', async () => {
        const spy = jest.spyOn(client, 'testConnectivity').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.testConnectivity();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
