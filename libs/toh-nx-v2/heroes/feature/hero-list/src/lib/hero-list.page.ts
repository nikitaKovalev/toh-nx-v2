import {ChangeDetectionStrategy, Component} from '@angular/core';

import {heroListImports} from './hero-list.imports';

@Component({
    standalone: true,
    templateUrl: 'hero-list.page.html',
    styleUrls: ['./hero-list.page.scss'],
    imports: heroListImports,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeroListPage {}
