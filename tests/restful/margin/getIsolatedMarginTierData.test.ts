import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getIsolatedMarginTierData';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Isolated Margin Tier Data', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Isolated Margin Tier Data', async () => {
        const spy = jest.spyOn(client, 'getIsolatedMarginTierData').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getIsolatedMarginTierData('BNBUSDT');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
