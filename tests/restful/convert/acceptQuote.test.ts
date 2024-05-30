
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/convert/acceptQuote';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Accept Quote', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should accept the offered quote by quote ID', async () => {
        const spy = jest.spyOn(client, 'acceptQuote').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.acceptQuote('12415572564');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
