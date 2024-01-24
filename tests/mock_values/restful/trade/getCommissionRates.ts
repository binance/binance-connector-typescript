import { RestTradeTypes } from '../../../../src/index';

export const mockResponse: RestTradeTypes.getCommissionRatesResponse = {
    'symbol': 'BTCUSDT',
    'standardCommission': {         //Standard commission rates on trades from the order.
        'maker': '0.00000010',
        'taker': '0.00000020',
        'buyer': '0.00000030',
        'seller': '0.00000040'
    },
    'taxCommission': {              //Tax commission rates for trades from the order.
        'maker': '0.00000112',
        'taker': '0.00000114',
        'buyer': '0.00000118',
        'seller': '0.00000116'
    },
    'discount': {                   //Discount commission when paying in BNB
        'enabledForAccount': true,
        'enabledForSymbol': true,
        'discountAsset': 'BNB',
        'discount': '0.25000000'      //Standard commission is reduced by this rate when paying commission in BNB.
    }
};