import { RestTradeTypes } from '../../../../src/index';


export const mockResponse: RestTradeTypes.getAllocationsResponse[] = [
    {
        'symbol': 'BTCUSDT',
        'allocationId': 0,
        'allocationType': 'SOR',
        'orderId': 1,
        'orderListId': -1,
        'price': '1.00000000',
        'qty': '5.00000000',
        'quoteQty': '5.00000000',
        'commission': '0.00000000',
        'commissionAsset': 'BTC',
        'time': 1687506878118,
        'isBuyer': true,
        'isMaker': false,
        'isAllocator': false
    }
];
  