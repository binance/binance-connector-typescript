import { mockSubscription, mockResponse } from './utils/utils';

describe('#ticker', () => {
    it('should get ticker data', () => {
        const symbol = 'BNBUSDT';
        mockSubscription(`/ws/${symbol.toLowerCase()}@ticker`, mockResponse);
    });

    it('should get all ticker data', () => {
        mockSubscription('/ws/!ticker@arr', mockResponse);
    });
});
