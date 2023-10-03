import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/futuresPositionriskOfSubAccountV2';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Futures Position-Risk of Sub-account V2', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Futures Position-Risk of Sub-account V2', async () => {
        const spy = jest.spyOn(client, 'futuresPositionriskOfSubAccountV2').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.futuresPositionriskOfSubAccountV2('alice@test.com', 2);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
