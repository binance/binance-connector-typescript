
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/dualInvestment/changeAutocompoundStatus';
import { AutoCompoundPlan } from '../../../src/index';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Change Auto-Compound status', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should return Change Auto-Compound status ', async () => {
        const spy = jest.spyOn(client, 'changeAutoCompoundStatus').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.changeAutoCompoundStatus('1', AutoCompoundPlan.STANDARD);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
