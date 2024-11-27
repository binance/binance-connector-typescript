import { expect } from '@jest/globals';
import { 
    OrderListAboveBelowType,
    OrderListWorkingType,
    Side,
    TimeInForce,
    Spot,
    RestMarginTypes
} from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/marginAccountNewOtoco';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Margin Account New OTOCO', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    const options: RestMarginTypes.marginAccountNewOtocoOptions = {
        workingTimeInForce: TimeInForce.GTC,
        pendingAbovePrice: 301,
        pendingBelowType: OrderListAboveBelowType.STOP_LOSS,
        pendingBelowPrice: 299,
        recvWindow: 5000,
    };
    it('should return Margin Account New OTOCO Order', async () => {
        const spy = jest.spyOn(client, 'marginAccountNewOtoco').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.marginAccountNewOtoco(
            'BNBUSDT',
            OrderListWorkingType.LIMIT,
            Side.BUY,
            300,
            1,
            Side.SELL,
            1,
            OrderListAboveBelowType.LIMIT_MAKER,
            options
        );
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
