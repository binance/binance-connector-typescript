import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/market/exchangeInformation';

jest.mock('../../../src/index');

const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Exchange Information', () => {
    const client = new Spot('', '', { baseURL: baseURL });
    it('should return Exchange Information', async () => {
        const spy = jest.spyOn(client, 'exchangeInformation').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.exchangeInformation();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
