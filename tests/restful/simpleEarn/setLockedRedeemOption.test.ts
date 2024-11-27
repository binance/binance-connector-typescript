
import { expect } from '@jest/globals';
import { RedeemOption, Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/simpleEarn/setLockedRedeemOption';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Set Locked Auto Subscribe', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should set locked auto subscribe', async () => {
        const spy = jest.spyOn(client, 'setLockedRedeemOption').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.setLockedRedeemOption('1', RedeemOption.SPOT);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});

