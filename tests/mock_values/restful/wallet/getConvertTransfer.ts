import { AccountType, RestWalletTypes } from '../../../../src/types';

export const mockResponse: RestWalletTypes.getConvertTransferResponse = {
    'total': 1,
    'rows': [{
        'tranId': 118263407119,
        'type': 244,
        'time': 1664442078000,
        'deductedAsset': 'BUSD',
        'deductedAmount': '1',
        'targetAsset': 'USDC',
        'targetAmount': '1',
        'status': 'S',
        'accountType': AccountType.MAIN
    }]
};
