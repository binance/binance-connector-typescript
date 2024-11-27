import { RestWalletTypes } from '../../../../src/index';

export const mockResponse: RestWalletTypes.queryUserDelegationHistoryResponse = {
    'total': 3316,
    'rows': [
        {
            'clientTranId': '293915932290879488',
            'transferType': 'Undelegate',
            'asset': 'ETH',
            'amount': '1',
            'time': 1695205406000
        }, 
        {
            'clientTranId': '293915892281413632',
            'transferType': 'Delegate',
            'asset': 'ETH',
            'amount': '1',
            'time': 1695205396000
        }
    ]
};
