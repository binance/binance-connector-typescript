import { WsAccountTypes } from '../../../../src/types';

export const mockAccountAllocation: WsAccountTypes.accountAllocationResponse[] = [
    {
        'symbol': 'BTCUSDT',
        'allocationId': 0,
        'allocationType': 'SOR',
        'orderId': 500,
        'orderListId': -1,
        'price': '1.00000000',
        'qty': '0.10000000',
        'quoteQty': '0.10000000',
        'commission': '0.00000000',
        'commissionAsset': 'BTC',
        'time': 1687319487614,
        'isBuyer': false,
        'isMaker': false,
        'isAllocator': false
    }
];
