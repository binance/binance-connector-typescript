
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/simpleEarn/getFlexibleSubscriptionPreview';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Flexible Subscription Preview', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should return flexible subscription preview', async () => {
        const spy = jest.spyOn(client, 'getFlexibleSubscriptionPreview').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getFlexibleSubscriptionPreview('1', 0.1);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});

