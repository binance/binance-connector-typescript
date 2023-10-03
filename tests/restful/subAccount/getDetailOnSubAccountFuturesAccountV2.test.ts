import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/getDetailOnSubAccountFuturesAccountV2';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Detail on Sub-account Futures Account V2', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Detail on Sub-account Futures Account V2', async () => {
        const spy = jest.spyOn(client, 'getDetailOnSubAccountFuturesAccountV2').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getDetailOnSubAccountFuturesAccountV2('alice@test.com', 2);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
