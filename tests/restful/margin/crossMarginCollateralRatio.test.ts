import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/crossMarginCollateralRatio';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Cross Margin Collateral Ratio', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Cross Margin Collateral Ratio', async () => {
        const spy = jest.spyOn(client, 'crossMarginCollateralRatio').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.crossMarginCollateralRatio();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
