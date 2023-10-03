
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/simpleEarn/redeemLockedProduct';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Redeem Locked Product', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should redeem locked product', async () => {
        const spy = jest.spyOn(client, 'redeemLockedProduct').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.redeemLockedProduct('1');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});

