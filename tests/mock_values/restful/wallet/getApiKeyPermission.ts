import { RestWalletTypes } from '../../../../src/index';

export const mockResponse: RestWalletTypes.getApiKeyPermissionResponse = {
    'ipRestrict': false,
    'createTime': 1623840271000,
    'enableWithdrawals': false,
    'enableInternalTransfer': true,
    'permitsUniversalTransfer': true,
    'enableVanillaOptions': false,
    'enableReading': true,
    'enableFutures': false,
    'enableMargin': false,
    'enableSpotAndMarginTrading': false,
    'tradingAuthorityExpirationTime': 1628985600000,
    'enablePortfolioMarginTrading': false
};
