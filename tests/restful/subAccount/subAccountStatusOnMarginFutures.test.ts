import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/subAccountStatusOnMarginFutures';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Sub-account Status on Margin/Futures', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Sub-account Status on Margin/Futures', async () => {
        const spy = jest.spyOn(client, 'subAccountStatusOnMarginFutures').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.subAccountStatusOnMarginFutures();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
