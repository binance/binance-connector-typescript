import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/subAccountFuturesAssetTransfer';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Sub-account Futures Asset Transfer', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Sub-account Futures Asset Transfer', async () => {
        const spy = jest.spyOn(client, 'subAccountFuturesAssetTransfer').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.subAccountFuturesAssetTransfer('alice@test.com', 'sub.account@email.com', 2, 'BNB', 0.1);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
