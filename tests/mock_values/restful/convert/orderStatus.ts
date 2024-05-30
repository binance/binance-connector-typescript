import { ConvertOrderStatus, RestConvertTypes } from '../../../../src/index';

export const mockResponse: RestConvertTypes.orderStatusResponse = {
    'orderId': 933256278426274426n,
    'orderStatus': ConvertOrderStatus.SUCCESS,
    'fromAsset': 'BTC',
    'fromAmount': '0.00054414',
    'toAsset': 'USDT',
    'toAmount': '20',
    'ratio': '36755',
    'inverseRatio': '0.00002721',
    'createTime': 1623381330472
};
