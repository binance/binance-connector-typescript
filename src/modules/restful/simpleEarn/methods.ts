import {
    getSimpleEarnFlexibleProductListOptions,
    getSimpleEarnFlexibleProductListResponse,
    getSimpleEarnLockedProductListOptions,
    getSimpleEarnLockedProductListResponse,
    subscribeFlexibleProductOptions,
    subscribeFlexibleProductResponse,
    subscribeLockedProductOptions,
    subscribeLockedProductResponse,
    redeemFlexibleProductOptions,
    redeemFlexibleProductResponse,
    redeemLockedProductOptions,
    redeemLockedProductResponse,
    getFlexibleProductPositionOptions,
    getFlexibleProductPositionResponse,
    getLockedProductPositionOptions,
    getLockedProductPositionResponse,
    simpleAccountOptions,
    simpleAccountResponse,
    getFlexibleSubscriptionRecordOptions,
    getFlexibleSubscriptionRecordResponse,
    getLockedSubscriptionRecordOptions,
    getLockedSubscriptionRecordResponse,
    getFlexibleRedemptionRecordOptions,
    getFlexibleRedemptionRecordResponse,
    getLockedRedemptionRecordOptions,
    getLockedRedemptionRecordResponse,
    getFlexibleRewardsHistoryOptions,
    getFlexibleRewardsHistoryResponse,
    getLockedRewardsHistoryOptions,
    getLockedRewardsHistoryResponse,
    setFlexibleAutoSubscribeOptions,
    setFlexibleAutoSubscribeResponse,
    setLockedAutoSubscribeOptions,
    setLockedAutoSubscribeResponse,
    getFlexiblePersonalLeftQuotaOptions,
    getFlexiblePersonalLeftQuotaResponse,
    getLockedPersonalLeftQuotaOptions,
    getLockedPersonalLeftQuotaResponse,
    getFlexibleSubscriptionPreviewOptions,
    getFlexibleSubscriptionPreviewResponse,
    getLockedSubscriptionPreviewOptions,
    getLockedSubscriptionPreviewResponse,
    setLockedRedeemOptionOptions,
    setLockedRedeemOptionResponse,
    getRateHistoryOptions,
    getRateHistoryResponse,
    getCollateralRecordOptions,
    getCollateralRecordResponse
} from './types';
import { RedeemOption } from '../../enum';

export interface SimpleEarnMethods {
    getSimpleEarnFlexibleProductList(options?: getSimpleEarnFlexibleProductListOptions): Promise<getSimpleEarnFlexibleProductListResponse>;
    getSimpleEarnLockedProductList(options?: getSimpleEarnLockedProductListOptions): Promise<getSimpleEarnLockedProductListResponse>;
    subscribeFlexibleProduct(productId: string, amount: number, options?: subscribeFlexibleProductOptions): Promise<subscribeFlexibleProductResponse>;
    subscribeLockedProduct(projectId: string, amount: number, options?: subscribeLockedProductOptions): Promise<subscribeLockedProductResponse>;
    redeemFlexibleProduct(productId: string, options?: redeemFlexibleProductOptions): Promise<redeemFlexibleProductResponse>;
    redeemLockedProduct(positionId: string, options?: redeemLockedProductOptions): Promise<redeemLockedProductResponse>;
    getFlexibleProductPosition(options?: getFlexibleProductPositionOptions): Promise<getFlexibleProductPositionResponse>;
    getLockedProductPosition(options?: getLockedProductPositionOptions): Promise<getLockedProductPositionResponse>;
    simpleAccount(options?: simpleAccountOptions): Promise<simpleAccountResponse>;
    getFlexibleSubscriptionRecord(options?: getFlexibleSubscriptionRecordOptions): Promise<getFlexibleSubscriptionRecordResponse>;
    getLockedSubscriptionRecord(options?: getLockedSubscriptionRecordOptions): Promise<getLockedSubscriptionRecordResponse>;
    getFlexibleRedemptionRecord(options?: getFlexibleRedemptionRecordOptions): Promise<getFlexibleRedemptionRecordResponse>;
    getLockedRedemptionRecord(options?: getLockedRedemptionRecordOptions): Promise<getLockedRedemptionRecordResponse>;
    getFlexibleRewardsHistory(type: string, options?: getFlexibleRewardsHistoryOptions): Promise<getFlexibleRewardsHistoryResponse>;
    getLockedRewardsHistory(options?: getLockedRewardsHistoryOptions): Promise<getLockedRewardsHistoryResponse>;
    setFlexibleAutoSubscribe(productId: string, autoSubscribe: boolean, options?: setFlexibleAutoSubscribeOptions): Promise<setFlexibleAutoSubscribeResponse>;
    setLockedAutoSubscribe(positionId: string, autoSubscribe: boolean, options?: setLockedAutoSubscribeOptions): Promise<setLockedAutoSubscribeResponse>;
    getFlexiblePersonalLeftQuota(productId: string, options?: getFlexiblePersonalLeftQuotaOptions): Promise<getFlexiblePersonalLeftQuotaResponse>;
    getLockedPersonalLeftQuota(projectId: string, options?: getLockedPersonalLeftQuotaOptions): Promise<getLockedPersonalLeftQuotaResponse>;
    getFlexibleSubscriptionPreview(productId: string, amount: number, options?: getFlexibleSubscriptionPreviewOptions): Promise<getFlexibleSubscriptionPreviewResponse>;
    getLockedSubscriptionPreview(projectId: string, amount: number, options?: getLockedSubscriptionPreviewOptions): Promise<getLockedSubscriptionPreviewResponse[]>;
    setLockedRedeemOption(positionId: string, redeemOption: RedeemOption, options?: setLockedRedeemOptionOptions): Promise<setLockedRedeemOptionResponse>;
    getRateHistory(productId: string, options?: getRateHistoryOptions): Promise<getRateHistoryResponse>;
    getCollateralRecord(options?: getCollateralRecordOptions): Promise<getCollateralRecordResponse>;
}