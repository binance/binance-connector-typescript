
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/portfolioMargin/changeAutorepayfuturesStatus';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Change Auto-repay-futures Status', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should change Auto-repay-futures Status ', async () => {
        const spy = jest.spyOn(client, 'changeAutorepayfuturesStatus').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.changeAutorepayfuturesStatus(true);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
