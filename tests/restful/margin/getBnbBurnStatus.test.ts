import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getBnbBurnStatus';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Bnb Burn Status', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return BNB burn status', async () => {
        const spy = jest.spyOn(client, 'getBnbBurnStatus').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getBnbBurnStatus();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
