import { Constructor } from '../../../setters/types';
import { validateRequiredParameters } from '../../../helpers/utils';
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
import { SimpleEarnMethods } from './methods';

export function mixinSimpleEarn<T extends Constructor>(base: T): Constructor<SimpleEarnMethods> & T {
    return class extends base {
        /**
        * Get Simple Earn Flexible Product List (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/account/Get-Simple-Earn-Flexible-Product-List}
        *
        * @param {object} [options]
        * @param {string} [options.asset]
        * @param {number} [options.current] - Current querying page. Start from 1. Default:1
        * @param {number} [options.size] - Default:10 Max:100
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getSimpleEarnFlexibleProductList(options?: getSimpleEarnFlexibleProductListOptions): Promise<getSimpleEarnFlexibleProductListResponse> {
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/flexible/list',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Simple Earn Locked Product List (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/account/Get-Simple-Earn-Locked-Product-List}
        *
        * @param {object} [options]
        * @param {string} [options.asset]
        * @param {number} [options.current] - Current querying page. Start from 1. Default:1
        * @param {number} [options.size] - Default:10 Max:100
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getSimpleEarnLockedProductList(options?: getSimpleEarnLockedProductListOptions): Promise<getSimpleEarnLockedProductListResponse> {
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/locked/list',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Subscribe Flexible Product (TRADE) {@link https://developers.binance.com/docs/simple_earn/earn/Subscribe-Flexible-Product}
        *
        * @param {string} productId
        * @param {number} amount
        * @param {object} [options]
        * @param {boolean} [options.autoSubscribe] - true or false, default true.
        * @param {string} [options.sourceAccount] - SPOT,FUND,ALL, default SPOT
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async subscribeFlexibleProduct(productId: string, amount: number, options?: subscribeFlexibleProductOptions): Promise<subscribeFlexibleProductResponse> {
            validateRequiredParameters({ productId, amount });
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/flexible/subscribe',
                Object.assign(
                    options ? options : {},
                    {
                        productId: productId,
                        amount: amount
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Subscribe Locked Product (TRADE) {@link https://developers.binance.com/docs/simple_earn/earn/Subscribe-Locked-Product}
        *
        * @param {string} projectId
        * @param {number} amount
        * @param {object} [options]
        * @param {boolean} [options.autoSubscribe] - true or false, default true.
        * @param {string} [options.sourceAccount] - SPOT,FUND,ALL, default SPOT
        * @param {RedeemOption} [options.redeemTo] - "SPOT", "FLEXIBLE", default SPOT
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async subscribeLockedProduct(projectId: string, amount: number, options?: subscribeLockedProductOptions): Promise<subscribeLockedProductResponse> {
            validateRequiredParameters({ projectId, amount });
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/locked/subscribe',
                Object.assign(
                    options ? options : {},
                    {
                        projectId: projectId,
                        amount: amount
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Redeem Flexible Product (TRADE) {@link https://developers.binance.com/docs/simple_earn/earn/Redeem-Flexible-Product}
        *
        * @param {string} productId
        * @param {object} [options]
        * @param {boolean} [options.redeemAll] - true or false, default to false
        * @param {number} [options.amount] - if redeemAll is false, amount is mandatory
        * @param {string} [options.destAccount] - SPOT,FUND,ALL, default SPOT
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async redeemFlexibleProduct(productId: string, options?: redeemFlexibleProductOptions): Promise<redeemFlexibleProductResponse> {
            validateRequiredParameters({ productId });
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/flexible/redeem',
                Object.assign(
                    options ? options : {},
                    {
                        productId: productId
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Redeem Locked Product (TRADE) {@link https://developers.binance.com/docs/simple_earn/earn/Redeem-Locked-Product}
        *
        * @param {string} positionId - 1234
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async redeemLockedProduct(positionId: string, options?: redeemLockedProductOptions): Promise<redeemLockedProductResponse> {
            validateRequiredParameters({ positionId });
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/locked/redeem',
                Object.assign(
                    options ? options : {},
                    {
                        positionId: positionId
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Get Flexible Product Position (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/account/Get-Flexible-Product-Position}
        *
        * @param {object} [options]
        * @param {string} [options.asset]
        * @param {string} [options.productId]
        * @param {number} [options.current] - Current querying page. Start from 1. Default:1
        * @param {number} [options.size] - Default:10 Max:100
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getFlexibleProductPosition(options?: getFlexibleProductPositionOptions): Promise<getFlexibleProductPositionResponse> {
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/flexible/position',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Locked Product Position (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/account/Get-Locked-Product-Position}
        *
        * @param {object} [options]
        * @param {string} [options.asset]
        * @param {string} [options.positionId]
        * @param {string} [options.projectId]
        * @param {number} [options.current] - Current querying page. Start from 1. Default:1
        * @param {number} [options.size] - Default:10 Max:100
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getLockedProductPosition(options?: getLockedProductPositionOptions): Promise<getLockedProductPositionResponse> {
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/locked/position',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Simple Account (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/account/Simple-Account}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async simpleAccount(options?: simpleAccountOptions): Promise<simpleAccountResponse> {
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/account',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Flexible Subscription Record (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/history/Get-Flexible-Subscription-Record}
        *
        * @param {object} [options]
        * @param {string} [options.productId]
        * @param {string} [options.purchaseId]
        * @param {string} [options.asset]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.current] - Current querying page. Start from 1. Default:1
        * @param {number} [options.size] - Default:10 Max:100
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getFlexibleSubscriptionRecord(options?: getFlexibleSubscriptionRecordOptions): Promise<getFlexibleSubscriptionRecordResponse> {
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/flexible/history/subscriptionRecord',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Locked Subscription Record (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/history/Get-Locked-Subscription-Record}
        *
        * @param {object} [options]
        * @param {string} [options.purchaseId]
        * @param {string} [options.asset]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.current] - Current querying page. Start from 1. Default:1
        * @param {number} [options.size] - Default:10 Max:100
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getLockedSubscriptionRecord(options?: getLockedSubscriptionRecordOptions): Promise<getLockedSubscriptionRecordResponse> {
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/locked/history/subscriptionRecord',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Flexible Redemption Record (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/history/Get-Flexible-Redemption-Record}
        *
        * @param {object} [options]
        * @param {string} [options.productId]
        * @param {string} [options.redeemId]
        * @param {string} [options.asset]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.current] - Current querying page. Start from 1. Default:1
        * @param {number} [options.size] - Default:10 Max:100
        */
        async getFlexibleRedemptionRecord(options?: getFlexibleRedemptionRecordOptions): Promise<getFlexibleRedemptionRecordResponse> {
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/flexible/history/redemptionRecord',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Locked Redemption Record (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/history/Get-Locked-Redemption-Record}
        *
        * @param {object} [options]
        * @param {string} [options.positionId]
        * @param {string} [options.redeemId]
        * @param {string} [options.asset]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.current] - Current querying page. Start from 1. Default:1
        * @param {number} [options.size] - Default:10 Max:100
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getLockedRedemptionRecord(options?: getLockedRedemptionRecordOptions): Promise<getLockedRedemptionRecordResponse> {
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/locked/history/redemptionRecord',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Flexible Rewards History (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/history/Get-Flexible-Rewards-History}
        *
        * @param {string} type - "BONUS", "REALTIME", "REWARDS"
        * @param {object} [options]
        * @param {string} [options.productId]
        * @param {string} [options.asset]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        */
        async getFlexibleRewardsHistory(type: string, options?: getFlexibleRewardsHistoryOptions): Promise<getFlexibleRewardsHistoryResponse> {
            validateRequiredParameters({ type });
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/flexible/history/rewardsRecord',
                Object.assign(
                    options ? options : {},
                    {
                        type: type
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Locked Rewards History (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/history/Get-Locked-Rewards-History}
        *
        * @param {object} [options]
        * @param {string} [options.positionId]
        * @param {string} [options.asset]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.size] - Default:10 Max:100
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getLockedRewardsHistory(options?: getLockedRewardsHistoryOptions): Promise<getLockedRewardsHistoryResponse> {
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/locked/history/rewardsRecord',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Set Flexible Auto Subscribe (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/earn/Set-Flexible-Auto-Subscribe}
        *
        * @param {string} productId
        * @param {boolean} autoSubscribe - true or false
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async setFlexibleAutoSubscribe(productId: string, autoSubscribe: boolean, options?: setFlexibleAutoSubscribeOptions): Promise<setFlexibleAutoSubscribeResponse> {
            validateRequiredParameters({ productId, autoSubscribe });
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/flexible/setAutoSubscribe',
                Object.assign(
                    options ? options : {},
                    {
                        productId: productId,
                        autoSubscribe: autoSubscribe
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Set Locked Auto Subscribe (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/earn/Set-Locked-Auto-Subscribe}
        *
        * @param {string} positionId
        * @param {boolean} autoSubscribe - true or false
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async setLockedAutoSubscribe(positionId: string, autoSubscribe: boolean, options?: setLockedAutoSubscribeOptions): Promise<setLockedAutoSubscribeResponse> {
            validateRequiredParameters({ positionId, autoSubscribe });
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/locked/setAutoSubscribe',
                Object.assign(
                    options ? options : {},
                    {
                        positionId: positionId,
                        autoSubscribe: autoSubscribe
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Get Flexible Personal Left Quota (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/account/Get-Flexible-Personal-Left-Quota}
        *
        * @param {string} productId
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getFlexiblePersonalLeftQuota(productId: string, options?: getFlexiblePersonalLeftQuotaOptions): Promise<getFlexiblePersonalLeftQuotaResponse> {
            validateRequiredParameters({ productId });
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/flexible/personalLeftQuota',
                Object.assign(
                    options ? options : {},
                    {
                        productId: productId
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Locked Personal Left Quota (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/account/Get-Locked-Personal-Left-Quota}
        *
        * @param {string} projectId
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getLockedPersonalLeftQuota(projectId: string, options?: getLockedPersonalLeftQuotaOptions): Promise<getLockedPersonalLeftQuotaResponse> {
            validateRequiredParameters({ projectId });
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/locked/personalLeftQuota',
                Object.assign(
                    options ? options : {},
                    {
                        projectId: projectId
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Flexible Subscription Preview (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/earn/Get-Flexible-Subscription-Preview}
        *
        * @param {string} productId
        * @param {number} amount
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getFlexibleSubscriptionPreview(productId: string, amount: number, options?: getFlexibleSubscriptionPreviewOptions): Promise<getFlexibleSubscriptionPreviewResponse> {
            validateRequiredParameters({ productId, amount });
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/flexible/subscriptionPreview',
                Object.assign(
                    options ? options : {},
                    {
                        productId: productId,
                        amount: amount
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Locked Subscription Preview (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/earn/Get-Locked-Subscription-Preview}
        *
        * @param {string} projectId
        * @param {number} amount
        * @param {object} [options]
        * @param {boolean} [options.autoSubscribe] - true or false, default true.
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getLockedSubscriptionPreview(projectId: string, amount: number, options?: getLockedSubscriptionPreviewOptions): Promise<getLockedSubscriptionPreviewResponse[]> {
            validateRequiredParameters({ projectId, amount });
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/locked/subscriptionPreview',
                Object.assign(
                    options ? options : {},
                    {
                        projectId: projectId,
                        amount: amount
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
         * Set Locked Product Redeem Option (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/earn/Set-Locked-Redeem-Option}
         * 
         * @param {string} positionId
         * @param {RedeemOption} redeemOption - "SPOT", "FLEXIBLE"
         * @param {object} [options]
         * @param {number} [options.recvWindow] - The value cannot be greater than 60000
         */
        async setLockedRedeemOption(positionId: string, redeemOption: RedeemOption, options?: setLockedRedeemOptionOptions): Promise<setLockedRedeemOptionResponse> {
            validateRequiredParameters({ positionId, redeemOption });
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/locked/setRedeemOption',
                Object.assign(
                    options ? options : {},
                    {
                        positionId: positionId,
                        redeemOption: redeemOption
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }

        /**
        * Get Rate History (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/history/Get-Rate-History}
        *
        * @param {string} productId
        * @param {object} [options]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.current] - Current querying page. Start from 1. Default:1
        * @param {number} [options.size] - Default:10 Max:100
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getRateHistory(productId: string, options?: getRateHistoryOptions): Promise<getRateHistoryResponse> {
            validateRequiredParameters({ productId });
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/flexible/history/rateHistory',
                Object.assign(
                    options ? options : {},
                    {
                        productId: productId
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Collateral Record (USER_DATA) {@link https://developers.binance.com/docs/simple_earn/history/Get-Collateral-Record}
        *
        * @param {string} productId
        * @param {object} [options]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.current] - Current querying page. Start from 1. Default:1
        * @param {number} [options.size] - Default:10 Max:100
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getCollateralRecord(options?: getCollateralRecordOptions): Promise<getCollateralRecordResponse> {
            const url = this.prepareSignedPath('/sapi/v1/simple-earn/flexible/history/collateralRecord',
                Object.assign(
                    options ? options : {}
                )
            );
            return await this.makeRequest('GET', url);
        }
    };
}
