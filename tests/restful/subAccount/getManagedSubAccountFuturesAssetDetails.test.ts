import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/getManagedSubAccountFuturesAssetDetails';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Managed Sub-account Futures Asset Details', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Managed Sub-account Futures Asset Details', async () => {
        const spy = jest.spyOn(client, 'getManagedSubAccountFuturesAssetDetails').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getManagedSubAccountFuturesAssetDetails('alice@test.com');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
