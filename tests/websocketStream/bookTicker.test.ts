import { mockSubscription, mockResponse } from './utils/utils';

describe('#bookTicker', () => {
    it('should get bookTicker data', () => {
        const symbol = 'BNBUSDT';
        mockSubscription(`/ws/${symbol.toLowerCase()}@bookTicker`, mockResponse);
    });

    it('should get all bookTicker data', () => {
        mockSubscription('/ws/!bookTicker', mockResponse);
    });
});
