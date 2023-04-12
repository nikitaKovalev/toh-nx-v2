import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {smartSearch} from '@toh-nx-v2/shared/observable';
import {Hero} from '@toh-nx-v2/toh-nx-v2/core/models';
import {map, of, switchMap, takeWhile, timer} from 'rxjs';

import {featureDashboardImports} from './feature-dashboard.imports';

const COUNTDOWN = 8;

@Component({
    standalone: true,
    templateUrl: 'feature-dashboard.page.html',
    styleUrls: ['./feature-dashboard.page.scss'],
    imports: featureDashboardImports,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FeatureDashboardPage {
    readonly control = new FormControl<string>('', {nonNullable: true});

    readonly heroes$ = this.control.valueChanges.pipe(smartSearch(term => of()));

    readonly heroesBlurred$ = this.control.valueChanges.pipe(
        switchMap(() =>
            timer(0, 100).pipe(
                map(count => COUNTDOWN - count),
                takeWhile(Boolean, true),
            ),
        ),
        map(counter => ({filter: `blur(${counter}px)`})),
    );

    readonly filterValue = (hero: Hero, value: string): boolean => {
        return hero.name.toLowerCase().startsWith(value.toLowerCase());
    };

    readonly trackBy = (index: number): number => index;
}
