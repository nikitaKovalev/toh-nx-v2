import {ChangeDetectionStrategy, Component} from '@angular/core';

import {heroDetailImports} from './hero-detail.imports';

@Component({
    standalone: true,
    templateUrl: 'hero-detail.page.html',
    styleUrls: ['./hero-detail.page.scss'],
    imports: heroDetailImports,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeroDetailPage {}
