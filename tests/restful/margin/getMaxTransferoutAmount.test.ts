import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getMaxTransferoutAmount';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Max Transfer-Out Amount', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Query Max Transfer-Out Amount', async () => {
        const spy = jest.spyOn(client, 'getMaxTransferoutAmount').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getMaxTransferoutAmount('BTC');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
