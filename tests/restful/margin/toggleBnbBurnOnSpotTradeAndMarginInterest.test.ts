import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/toggleBnbBurnOnSpotTradeAndMarginInterest';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Toggle BNB Burn On Spot Trade And Margin Interest', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Toggle BNB Burn On Spot Trade And Margin Interest', async () => {
        const spy = jest.spyOn(client, 'toggleBnbBurnOnSpotTradeAndMarginInterest').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.toggleBnbBurnOnSpotTradeAndMarginInterest();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
