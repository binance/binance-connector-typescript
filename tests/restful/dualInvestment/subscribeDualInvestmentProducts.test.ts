
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/dualInvestment/subscribeDualInvestmentProducts';
import { AutoCompoundPlan } from '../../../src/index';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Subscribe Dual Investment products', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should return Subscribe Dual Investment products ', async () => {
        const spy = jest.spyOn(client, 'subscribeDualInvestmentProducts').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.subscribeDualInvestmentProducts('1', '2', 1.0, AutoCompoundPlan.STANDARD);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
