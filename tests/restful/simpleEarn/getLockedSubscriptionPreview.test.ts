
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/simpleEarn/getLockedSubscriptionPreview';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Locked Subscription Preview', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should return locked subscription preview ', async () => {
        const spy = jest.spyOn(client, 'getLockedSubscriptionPreview').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getLockedSubscriptionPreview('1', 1.0);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});

