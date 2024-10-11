import { Constructor } from '../../../setters/types';
import { validateRequiredParameters } from '../../../helpers/utils';
import {
    getDualInvestmentProductListOptions,
    getDualInvestmentProductListResponse,
    subscribeDualInvestmentProductsOptions,
    subscribeDualInvestmentProductsResponse,
    getDualInvestmentPositionsOptions,
    getDualInvestmentPositionsResponse,
    checkDualInvestmentAccountsOptions,
    checkDualInvestmentAccountsResponse,
    changeAutoCompoundStatusOptions,
    changeAutoCompoundStatusResponse,

} from './types';
import { OptionType, AutoCompoundPlan } from '../../enum';
import { DualInvestmentMethods } from './methods';

export function mixinDualInvestment<T extends Constructor>(base: T): Constructor<DualInvestmentMethods> & T {
    return class extends base {
        
        /**
        * Get Dual Investment product list {@link https://developers.binance.com/docs/dual_investment/market-data}
        *
        * @param {OptionType} optionType - Input CALL or PUT
        * @param {string} exercisedCoin - Target exercised asset, e.g.: If you subscribe to a high sell product (call option), you should input: optionType: CALL, exercisedCoin: USDT, investCoin: BNB; If you subscribe to a low buy product (put option), you should input: optionType: PUT, exercisedCoin: BNB, investCoin: USDT;
        * @param {string} investCoin - Asset used for subscribing, e.g.: If you subscribe to a high sell product (call option), you should input: optionType: CALL, exercisedCoin: USDT, investCoin: BNB; If you subscribe to a low buy product (put option), you should input: optionType: PUT, exercisedCoin: BNB, investCoin: USDT;
        * @param {object} [options]
        * @param {number} [options.pageSize] - MIN 1, MAX 100; Default 100
        * @param {number} [options.pageIndex] - Page number, default is first page, start form 1
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getDualInvestmentProductList(optionType: OptionType, exercisedCoin: string, investCoin: string, options?: getDualInvestmentProductListOptions): Promise<getDualInvestmentProductListResponse> {
            validateRequiredParameters({ optionType, exercisedCoin, investCoin });
            const url = this.prepareSignedPath('/sapi/v1/dci/product/list',
                Object.assign(
                    options ? options : {},
                    {
                        optionType: optionType,
                        exercisedCoin: exercisedCoin.toUpperCase(),
                        investCoin: investCoin.toUpperCase()
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }

  
        /**
        * Subscribe Dual Investment products (USER_DATA) {@link https://developers.binance.com/docs/dual_investment/trade}
        *
        * @param {string} id - get id from /sapi/v1/dci/product/list
        * @param {string} orderId - get orderId from /sapi/v1/dci/product/list
        * @param {number} depositAmount
        * @param {AutoCompoundPlan} autoCompoundPlan - NONE: switch off the plan, STANDARD: standard plan, ADVANCED: advanced plan;
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async subscribeDualInvestmentProducts(id: string, orderId: string, depositAmount: number, autoCompoundPlan: AutoCompoundPlan, options?: subscribeDualInvestmentProductsOptions): Promise<subscribeDualInvestmentProductsResponse> {
            validateRequiredParameters({ id, orderId, depositAmount, autoCompoundPlan });
            const url = this.prepareSignedPath('/sapi/v1/dci/product/subscribe',
                Object.assign(
                    options ? options : {},
                    {
                        id: id,
                        orderId: orderId,
                        depositAmount: depositAmount,
                        autoCompoundPlan: autoCompoundPlan
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }

  
        /**
        * Get Dual Investment positions (USER_DATA) {@link https://developers.binance.com/docs/dual_investment/trade/Get-Dual-Investment-positions}
        *
        * @param {object} [options]
        * @param {Status} [options.status] - - PENDING: Products are purchasing, will give results later;, - PURCHASE_SUCCESS: purchase successfully;, - SETTLED: Products are finish settling;, - PURCHASE_FAIL: fail to purchase;, - REFUNDING: refund ongoing;, - REFUND_SUCCESS: refund to spot account successfully;, - SETTLING: Products are settling. , If don't fill this field, will response all the position status.
        * @param {number} [options.pageSize] - MIN 1, MAX 100; Default 100
        * @param {number} [options.pageIndex] - Page number, default is first page, start form 1
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getDualInvestmentPositions(options?: getDualInvestmentPositionsOptions): Promise<getDualInvestmentPositionsResponse> {
            const url = this.prepareSignedPath('/sapi/v1/dci/product/positions',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }

  
        /**
        * Check Dual Investment accounts (USER_DATA) {@link https://developers.binance.com/docs/dual_investment/trade/Check-Dual-Investment-accounts}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async checkDualInvestmentAccounts(options?: checkDualInvestmentAccountsOptions): Promise<checkDualInvestmentAccountsResponse> {
            const url = this.prepareSignedPath('/sapi/v1/dci/product/accounts',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }

  
        /**
        * Change Auto-Compound status (USER_DATA) {@link https://developers.binance.com/docs/dual_investment/trade/Change-Auto-Compound-status}
        *
        * @param {string} positionId - Get positionId from /sapi/v1/dci/product/positions
        * @param {AutoCompoundPlan} autoCompoundPlan - NONE: switch off the plan, STANDARD: standard plan, ADVANCED: advanced plan;
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async changeAutoCompoundStatus(positionId: string, autoCompoundPlan: AutoCompoundPlan, options?: changeAutoCompoundStatusOptions): Promise<changeAutoCompoundStatusResponse> {
            validateRequiredParameters({ positionId, autoCompoundPlan });
            const url = this.prepareSignedPath('/sapi/v1/dci/product/auto_compound/edit-status',
                Object.assign(
                    options ? options : {},
                    {
                        positionId: positionId,
                        autoCompoundPlan: autoCompoundPlan
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }
    };
}
