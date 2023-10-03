import { mockSubscription, mockResponse } from './utils/utils';

describe('#ticker', () => {
    it('should get ticker data', () => {
        const symbol = 'BNBUSDT';
        const windowSize = '1h';
        mockSubscription(`/ws/${symbol.toLowerCase()}@ticker_${windowSize.toLowerCase()}`, mockResponse);
    });

    it('should get all ticker data', () => {
        const windowSize = '1h';
        mockSubscription(`/ws/!ticker_${windowSize.toLowerCase()}@arr`, mockResponse);
    });
});
