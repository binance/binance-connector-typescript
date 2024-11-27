
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/portfolioMargin/getTieredCollateralRate';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Tiered Collateral Rate', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should return tiered collateral rate', async () => {
        const spy = jest.spyOn(client, 'getTieredCollateralRate').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getTieredCollateralRate();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
