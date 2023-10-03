import { SpotBase } from './setters/mixinBase';
import { SpotOptions } from './setters/types';

export class Spot extends SpotBase {
    constructor(apiKey = '', apiSecret = '', options: SpotOptions = {}) {
        super(
            apiKey,
            apiSecret,
            options
        );
    }
}
