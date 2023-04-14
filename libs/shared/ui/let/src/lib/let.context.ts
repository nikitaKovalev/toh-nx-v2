import {ContextWithImplicit} from '@toh-nx-v2/shared/model';

import type {LetDirective} from './let.directive';

/**
 * @internal
 */
export class LetContext<T> implements ContextWithImplicit<T> {
    constructor(private readonly internalDirectiveInstance: LetDirective<T>) {}

    get $implicit(): T {
        return this.internalDirectiveInstance.uiLet;
    }

    get uiLet(): T {
        return this.internalDirectiveInstance.uiLet;
    }
}
