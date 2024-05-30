
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/portfolioMargin/portfolioMarginCollateralRate';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Portfolio Margin Collateral Rate', () => {
    const client = new Spot(apiKey, '', { baseURL: baseURL });

    it('should return Portfolio Margin Pro Collateral Rate ', async () => {
        const spy = jest.spyOn(client, 'portfolioMarginCollateralRate').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.portfolioMarginCollateralRate();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
