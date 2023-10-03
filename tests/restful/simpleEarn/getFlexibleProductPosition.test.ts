
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/simpleEarn/getFlexibleProductPosition';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Flexible Product Position', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should return flexible product position', async () => {
        const spy = jest.spyOn(client, 'getFlexibleProductPosition').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getFlexibleProductPosition();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});

