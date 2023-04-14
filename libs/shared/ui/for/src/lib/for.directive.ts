import {
    Directive,
    EmbeddedViewRef,
    Inject,
    Input,
    OnChanges,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';

/**
 * This directive augments built-in ngFor with ability to provide loading template
 * (for falsy values, like null while async pipe is waiting for the response) and empty template for empty array case.
 *
 * @example
 * <div *ngFor="let item of items$ | async; else: loading; empty: blank">
 *     {{ item }}
 * </div>
 * <ng-template #loading>
 *     <tui-loader></tui-loader>
 * </ng-template>
 * <ng-template #blank>Data is not available</ng-template>
 **/
@Directive({
    selector: '[ngFor][ngForOf][ngForElse],[ngFor][ngForOf][ngForEmpty]',
    standalone: true,
})
export class ForDirective<T, K = unknown> implements OnChanges {
    private ref?: EmbeddedViewRef<unknown>;

    @Input()
    ngForOf: T[] | readonly T[] | null = [];

    @Input()
    ngForElse?: TemplateRef<K>;

    @Input()
    ngForEmpty?: TemplateRef<K>;

    constructor(@Inject(ViewContainerRef) private readonly vcr: ViewContainerRef) {}

    ngOnChanges(): void {
        this.ref?.destroy();

        if (this.ngForOf?.length === 0 && this.ngForEmpty) {
            this.ref = this.vcr.createEmbeddedView(this.ngForEmpty);
        } else if (!this.ngForOf && this.ngForElse) {
            this.ref = this.vcr.createEmbeddedView(this.ngForElse);
        }
    }
}
