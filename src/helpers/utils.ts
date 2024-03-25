import axios, { AxiosProxyConfig } from 'axios';
import { appName, appVersion } from './constants';
import * as crypto from 'crypto';

interface HttpRequestConfig {
  baseURL: string;
  apiKey: string;
  method: string;
  url: string;
  timeout?: number;
  proxy?: AxiosProxyConfig | false;
  httpsAgent?: boolean;
}

export async function httpRequest(config: HttpRequestConfig) {
    try {
        const { baseURL, apiKey, method, url, timeout, proxy, httpsAgent } = config;
        const options = {
            baseURL,
            timeout,
            proxy,
            httpsAgent,
            method,
            url,
            headers: {
                'Content-Type': 'application/jso;n',
                'X-MBX-APIKEY': apiKey,
                'User-Agent': `${appName}/${appVersion}`,
            },
        };
        const response = await axios.request(options);
        return response;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data.msg;
        } else {
            throw new Error('Http request error');
        }
    }
}

export function removeEmptyValue(obj: object): object {
    if (!(obj instanceof Object)) return {};
    return Object.fromEntries(
        Object.entries(obj).filter(
            ([, value]) => value !== null && value !== undefined && value !== ''
        )
    );
}

export function buildQueryString(params: object): string {
    if (!params) return '';
    return Object.entries(params).map(stringifyKeyValuePair).join('&');
}

function stringifyKeyValuePair([key, value]: [string, string]) {
    const valueString = Array.isArray(value) ? `["${value.join('","')}"]` : value;
    return `${key}=${encodeURIComponent(valueString)}`;
}

interface paramObject {
  [key: string]: string | number | boolean | object;
}

export function validateRequiredParameters(paramObject: paramObject) {
    if (!paramObject || isEmptyValue(paramObject)) {
        throw new Error('Missing Parameters');
    }
    const emptyParams: string[] = [];
    Object.keys(paramObject).forEach((param: string) => {
        if (isEmptyValue(paramObject[param])) {
            emptyParams.push(param);
        }
    });
    if (emptyParams.length) {
        throw new Error('Missing Parameters');
    }
}

export function isEmptyValue(
    input: string | boolean | number | object
): boolean {
    /**
   * Scope of empty value: falsy value (except for false and 0),
   * string with white space characters only, empty object, empty array
   */
    return (
        (!input && input !== false && input !== 0) ||
    (typeof input === 'string' && /^\s+$/.test(input)) ||
    (input instanceof Object && !Object.keys(input).length) ||
    (Array.isArray(input) && !input.length)
    );
}

export function randomString() {
    return crypto.randomBytes(16).toString('hex');
}

export interface ObjectType {
  [key: string]: string | number | boolean | object;
}

export function sortObject(obj: ObjectType) {
    return Object.keys(obj)
        .sort()
        .reduce((res: ObjectType, key: string) => {
            res[key] = obj[key] as string | number | boolean | object;
            return res;
        }, {});
}
