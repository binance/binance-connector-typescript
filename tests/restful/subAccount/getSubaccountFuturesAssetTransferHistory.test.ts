import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/getSubaccountFuturesAssetTransferHistory';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Sub-account Futures Asset Transfer History', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Query Sub-account Futures Asset Transfer History', async () => {
        const spy = jest.spyOn(client, 'getSubAccountFuturesAssetTransferHistory').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getSubAccountFuturesAssetTransferHistory('alice@test.com', 1);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
