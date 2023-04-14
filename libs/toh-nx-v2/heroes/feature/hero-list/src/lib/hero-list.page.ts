import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {DestroyService} from '@toh-nx-v2/shared/service/destroy';
import {Hero} from '@toh-nx-v2/toh-nx-v2/core/models';
import {HeroService} from '@toh-nx-v2/toh-nx-v2/heroes/data-access/hero';
import {
    BehaviorSubject,
    combineLatest,
    map,
    Observable,
    repeat,
    Subject,
    takeUntil,
    tap,
} from 'rxjs';

import {heroListImports} from './hero-list.imports';

@Component({
    standalone: true,
    templateUrl: 'hero-list.page.html',
    styleUrls: ['./hero-list.page.scss'],
    providers: [DestroyService],
    imports: heroListImports,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeroListPage {
    private readonly heroService = inject(HeroService);
    private readonly destroy$: Observable<void> = inject(DestroyService);

    private readonly heroesRefresh$ = new Subject<void>();
    private readonly heroesStore$ = new BehaviorSubject<Hero[]>([]);

    readonly heroes$ = combineLatest([
        this.heroService.getHeroes().pipe(
            tap(heroes => this.heroesStore$.next(heroes)),
            repeat({delay: () => this.heroesRefresh$}),
        ),
        this.heroesStore$,
    ]).pipe(map(([_, heroes]) => heroes));

    add(name: string): void {
        name = name.trim();

        if (!name) {
            return;
        }

        this.heroService
            .addHero({name} as Hero)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() =>
                // Here we need to refreshed list from server
                // because when we add new hero, we don't know its id
                this.heroesRefresh$.next(),
            );
    }

    delete(hero: Hero): void {
        this.heroService
            .deleteHero(hero.id)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() =>
                // Here we can skip the refresh from server and just update the heroesStore$
                this.heroesStore$.next(this.heroesStore$.value.filter(h => h !== hero)),
            );
    }
}
