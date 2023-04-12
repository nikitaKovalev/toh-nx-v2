import {Pipe, PipeTransform} from '@angular/core';

type Mapper<T, G> = (item: T, ...args: unknown[]) => G;

type Matcher<I> = Mapper<I, boolean>;

@Pipe({name: 'filter', standalone: true})
export class FilterPipe<T> implements PipeTransform {
    /**
     * Filters an array through a matcher function using additional arguments
     *
     * @param items array
     * @param matcher method for filtering
     * @param args arbitrary number of additional arguments
     */
    transform(items: readonly T[], matcher: Matcher<T>, ...args: unknown[]): T[] {
        return (items || []).filter(item => matcher(item, ...args));
    }
}
