
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/simpleEarn/getFlexiblePersonalLeftQuota';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Flexible Personal Left Quota', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should return flexible personal left quota', async () => {
        const spy = jest.spyOn(client, 'getFlexiblePersonalLeftQuota').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getFlexiblePersonalLeftQuota('1');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});

