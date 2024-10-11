import { OptionType, AutoCompoundPlan, DualInvestmentPurchaseStatus } from '../../enum';
export interface DualInvestmentMethods {
    getDualInvestmentProductList(optionType: OptionType, exercisedCoin: string, investCoin: string, options?: getDualInvestmentProductListOptions): Promise<getDualInvestmentProductListResponse>;
    subscribeDualInvestmentProducts(id: string, orderId: string, depositAmount: number, autoCompoundPlan: AutoCompoundPlan, options?: subscribeDualInvestmentProductsOptions): Promise<subscribeDualInvestmentProductsResponse>;
    getDualInvestmentPositions(options?: getDualInvestmentPositionsOptions): Promise<getDualInvestmentPositionsResponse>;
    checkDualInvestmentAccounts(options?: checkDualInvestmentAccountsOptions): Promise<checkDualInvestmentAccountsResponse>;
    changeAutoCompoundStatus(positionId: number, autoCompoundPlan: AutoCompoundPlan, options?: changeAutoCompoundStatusOptions): Promise<changeAutoCompoundStatusResponse>;
}

export interface getDualInvestmentProductListOptions {
    pageSize?: number;
    pageIndex?: number;
    recvWindow?: number;
}

export interface getDualInvestmentProductListResponse {
    total: number;
    list: getDualInvestmentProductListList[];
}

interface getDualInvestmentProductListList {
    id: string;
    investCoin: string;
    exercisedCoin: string;
    strikePrice: string;
    duration: number;
    settleDate: number;
    purchaseDecimal: number;
    purchaseEndTime: number;
    canPurchase: boolean;
    apr: string;
    orderId: number;
    minAmount: string;
    maxAmount: string;
    createTimestamp: number;
    optionType: OptionType;
    isAutoCompoundEnable: boolean;
    autoCompoundPlanList: AutoCompoundPlan[];
}

export interface subscribeDualInvestmentProductsOptions {
    recvWindow?: number;
}

export interface subscribeDualInvestmentProductsResponse {
    positionId: number;
    investCoin: string;
    exercisedCoin: string;
    subscriptionAmount: string;
    duration: number;
    autoCompoundPlan: AutoCompoundPlan;
    strikePrice: string;
    settleDate: number;
    purchaseStatus: DualInvestmentPurchaseStatus;
    apr: string;
    orderId: number;
    purchaseTime: number;
    optionType: OptionType;
}

export interface getDualInvestmentPositionsOptions {
    status?: DualInvestmentPurchaseStatus;
    pageSize?: number;
    pageIndex?: number;
    recvWindow?: number;
}

export interface getDualInvestmentPositionsResponse {
    total: number;
    list: getDualInvestmentPositionsList[];
}

interface getDualInvestmentPositionsList {
    id: string;
    investCoin: string;
    exercisedCoin: string;
    subscriptionAmount: string;
    strikePrice: string;
    duration: number;
    settleDate: number;
    purchaseStatus: DualInvestmentPurchaseStatus;
    apr: string;
    orderId: number;
    purchaseEndTime: number;
    optionType: OptionType;
    autoCompoundPlan: AutoCompoundPlan;
}

export interface checkDualInvestmentAccountsOptions {
    recvWindow?: number;
}

export interface checkDualInvestmentAccountsResponse {
    totalAmountInBTC: string;
    totalAmountInUSDT: string;
}

export interface changeAutoCompoundStatusOptions {
    recvWindow?: number;
}

export interface changeAutoCompoundStatusResponse {
    positionId: string;
    autoCompoundPlan: AutoCompoundPlan;
}
