import { AccountSnapshotType, Permissions, RestTradeTypes } from '../../../../src/types';

export const mockAccountInfo: RestTradeTypes.accountInformationResponse = {
    'makerCommission': 15,
    'takerCommission': 15,
    'buyerCommission': 0,
    'sellerCommission': 0,
    'canTrade': true,
    'canWithdraw': true,
    'canDeposit': true,
    'commissionRates': {
        'maker': '0.00150000',
        'taker': '0.00150000',
        'buyer': '0.00000000',
        'seller': '0.00000000'
    },
    'brokered': false,
    'requireSelfTradePrevention': false,
    'preventSor': false,
    'updateTime': 1660801833000,
    'accountType': AccountSnapshotType.SPOT,
    'balances': [
        {
            'asset': 'BNB',
            'free': '0.00000000',
            'locked': '0.00000000'
        },
        {
            'asset': 'BTC',
            'free': '1.3447112',
            'locked': '0.08600000'
        },
        {
            'asset': 'USDT',
            'free': '1021.21000000',
            'locked': '0.00000000'
        }
    ],
    'permissions': [
        Permissions.SPOT
    ],
    'uid': 354937868
};
