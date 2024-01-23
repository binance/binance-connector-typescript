import { expect } from '@jest/globals';
import { Spot, UnivTransferType } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/getUserUniversalTransferHistory';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query User Universal Transfer History', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return User Universal Transfer History', async () => {
        const spy = jest.spyOn(client, 'getUserUniversalTransferHistory').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getUserUniversalTransferHistory(UnivTransferType.MAIN_MARGIN);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
