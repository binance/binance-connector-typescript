
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/portfolioMargin/bnbTransfer';
import { TransferSide } from '../../../src/modules/enum';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('BNB Transfer', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should transfer BNB Margin or USDM Account', async () => {
        const spy = jest.spyOn(client, 'bnbTransfer').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.bnbTransfer(1.01, TransferSide.TO_UM);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
