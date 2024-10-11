import { OptionType, AutoCompoundPlan } from '../../enum';
import {
    changeAutoCompoundStatusOptions,
    changeAutoCompoundStatusResponse,
    checkDualInvestmentAccountsOptions,
    checkDualInvestmentAccountsResponse,
    getDualInvestmentPositionsOptions,
    getDualInvestmentPositionsResponse,
    getDualInvestmentProductListOptions,
    getDualInvestmentProductListResponse,
    subscribeDualInvestmentProductsOptions,
    subscribeDualInvestmentProductsResponse,

} from './types';

export interface DualInvestmentMethods {
    getDualInvestmentProductList(optionType: OptionType, exercisedCoin: string, investCoin: string, options?: getDualInvestmentProductListOptions): Promise<getDualInvestmentProductListResponse>;
    subscribeDualInvestmentProducts(id: string, orderId: string, depositAmount: number, autoCompoundPlan: AutoCompoundPlan, options?: subscribeDualInvestmentProductsOptions): Promise<subscribeDualInvestmentProductsResponse>;
    getDualInvestmentPositions(options?: getDualInvestmentPositionsOptions): Promise<getDualInvestmentPositionsResponse>;
    checkDualInvestmentAccounts(options?: checkDualInvestmentAccountsOptions): Promise<checkDualInvestmentAccountsResponse>;
    changeAutoCompoundStatus(positionId: string, autoCompoundPlan: AutoCompoundPlan, options?: changeAutoCompoundStatusOptions): Promise<changeAutoCompoundStatusResponse>;
}
