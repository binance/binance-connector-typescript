import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/transferToMaster';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Transfer to Master', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Transfer to Master', async () => {
        const spy = jest.spyOn(client, 'transferToMaster').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.transferToMaster('BNB', 0.1,);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
