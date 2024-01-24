import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/getUniversalTransferHistory';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Universal Transfer History', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Universal Transfer History', async () => {
        const spy = jest.spyOn(client, 'getUniversalTransferHistory').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getUniversalTransferHistory();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
