import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/trade/getCommissionRates';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Comissions Rates', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Comissions Rates', async () => {
        const spy = jest.spyOn(client, 'getCommissionRates').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getCommissionRates('BNBUSDT');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});