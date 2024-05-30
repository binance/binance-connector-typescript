
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/convert/cancelLimitOrder';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Cancel limit order', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should cancel a limit order ', async () => {
        const spy = jest.spyOn(client, 'cancelLimitOrder').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.cancelLimitOrder(1603680255057330400);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
