import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/marginManualLiquidation';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Margin Manual Liquidation', () => {
    const client = new Spot(apiKey, '', { baseURL: baseURL });
    it('should return Margin Manual Liquidation result', async () => {
        const spy = jest.spyOn(client, 'marginManualLiquidation').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.marginManualLiquidation('MARGIN');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});