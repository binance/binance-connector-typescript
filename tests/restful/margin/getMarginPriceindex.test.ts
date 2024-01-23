import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getMarginPriceIndex';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Margin PriceIndex', () => {
    const client = new Spot(apiKey, '', { baseURL: baseURL });
    it('should return Margin PriceIndex', async () => {
        const spy = jest.spyOn(client, 'getMarginPriceIndex').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getMarginPriceIndex('BNBUSDT');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
