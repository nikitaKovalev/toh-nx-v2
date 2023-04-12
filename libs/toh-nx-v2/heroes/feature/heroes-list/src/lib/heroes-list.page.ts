import {ChangeDetectionStrategy, Component} from '@angular/core';

import {heroesListImports} from './heroes-list.imports';

@Component({
    standalone: true,
    templateUrl: 'heroes-list.page.html',
    styleUrls: ['./heroes-list.page.scss'],
    imports: heroesListImports,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeroesListPage {}
