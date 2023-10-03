import { mockSubscription, mockResponse } from './utils/utils';

describe('#kline', () => {
    it('should get kline data', () => {
        const symbol = 'BNBUSDT';
        const interval = '1m';
        mockSubscription(`/ws/${symbol.toLowerCase()}@kline_${interval}`, mockResponse);
    });
});
