import { RestWalletTypes } from '../../../../src/index';

export const mockResponse: RestWalletTypes.accountApiTradingStatusResponse = {
    'data': {
        'isLocked': false,
        'plannedRecoverTime': 0,
        'triggerCondition': {
            'GCR': 150,
            'IFER': 150,
            'UFR': 300
        },
        'updateTime': 1547630471725
    }
};
