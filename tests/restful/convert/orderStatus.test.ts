
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/convert/orderStatus';
import { RestConvertTypes } from '../../../src/index';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Order status', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should return order status by order ID', async () => {
        const options: RestConvertTypes.orderStatusOptions = {
            quoteId: '12415572564'
        };
        const spy = jest.spyOn(client, 'orderStatus').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.orderStatus(options);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
