
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/portfolioMargin/fundAutocollection';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Fund Auto-collection', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should transfers all assets from Futures Account to Margin account', async () => {
        const spy = jest.spyOn(client, 'fundAutocollection').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.fundAutocollection();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
