import {Directive, Inject, Input, TemplateRef, ViewContainerRef} from '@angular/core';

import {LetContext} from './let.context';

/**
 * Works like *ngIf but does not have a condition — use it to declare
 * the result of pipes calculation (i.e. async pipe)
 */
@Directive({
    selector: '[let]',
    standalone: true,
})
export class LetDirective<T> {
    @Input()
    uiLet!: T;

    constructor(
        @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
        @Inject(TemplateRef) templateRef: TemplateRef<LetContext<T>>,
    ) {
        viewContainer.createEmbeddedView(templateRef, new LetContext<T>(this));
    }

    /**
     * Asserts the correct type of the context for the template that `Let` will render.
     *
     * The presence of this method is a signal to the Ivy template type-check compiler that the
     * `Let` structural directive renders its template with a specific context type.
     */
    static ngTemplateContextGuard<T>(
        _dir: LetDirective<T>,
        _ctx: unknown,
    ): _ctx is LetContext<T> {
        return true;
    }
}
