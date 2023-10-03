import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/getCloudminingPaymentAndRefundHistory';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Cloud-Mining payment and refund history', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Get Cloud-Mining payment and refund history', async () => {
        const currentTimestamp = Date.now();
        const spy = jest.spyOn(client, 'getCloudminingPaymentAndRefundHistory').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getCloudminingPaymentAndRefundHistory(currentTimestamp - 100000, currentTimestamp);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});

