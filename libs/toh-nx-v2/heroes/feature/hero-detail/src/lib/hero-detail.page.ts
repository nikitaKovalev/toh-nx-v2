import {Location} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouteParam, routeParam} from '@toh-nx-v2/shared/util/route-param';
import {Hero} from '@toh-nx-v2/toh-nx-v2/core/models';
import {HeroService} from '@toh-nx-v2/toh-nx-v2/heroes/data-access/hero';
import {
    catchError,
    filter,
    mapTo,
    of,
    repeat,
    share,
    Subject,
    switchMap,
    tap,
} from 'rxjs';

import {heroDetailImports} from './hero-detail.imports';

@Component({
    standalone: true,
    templateUrl: 'hero-detail.page.html',
    styleUrls: ['./hero-detail.page.scss'],
    imports: heroDetailImports,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeroDetailPage {
    private readonly location = inject(Location);
    private readonly heroService = inject(HeroService);

    readonly hero$ = routeParam(RouteParam.Id).pipe(
        filter(Boolean),
        switchMap((id: string) => this.heroService.getHero(Number(id))),
    );

    readonly save$ = new Subject<Hero>();
    readonly saveHero$ = this.save$.pipe(
        switchMap((hero: Hero) =>
            this.heroService.updateHero(hero).pipe(tap(() => this.goBack())),
        ),
        share(),
    );

    readonly disabledSave$ = this.saveHero$.pipe(
        mapTo(true),
        catchError(() => of(false)),
        repeat(),
    );

    goBack(): void {
        this.location.back();
    }

    save(hero: Hero): void {
        this.save$.next(hero);
    }
}
