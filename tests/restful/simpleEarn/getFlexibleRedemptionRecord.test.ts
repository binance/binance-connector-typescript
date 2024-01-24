
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/simpleEarn/getFlexibleRedemptionRecord';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Flexible Redemption Record', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should return flexible redemption record', async () => {
        const spy = jest.spyOn(client, 'getFlexibleRedemptionRecord').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getFlexibleRedemptionRecord();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});

