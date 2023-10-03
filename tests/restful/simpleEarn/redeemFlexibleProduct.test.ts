
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/simpleEarn/redeemFlexibleProduct';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Redeem Flexible Product', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should redeem flexible product', async () => {
        const spy = jest.spyOn(client, 'redeemFlexibleProduct').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.redeemFlexibleProduct('1');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});

