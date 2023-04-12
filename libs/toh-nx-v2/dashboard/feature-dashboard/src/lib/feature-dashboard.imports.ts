import {AsyncPipe, NgForOf, NgStyle} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {FilterPipe} from '@toh-nx-v2/shared/ui/filter';
import {UiHeroSearchComponent} from '@ui/toh-nx-v2/heroes/ui-hero-search';

export const featureDashboardImports = [
    ReactiveFormsModule,
    NgStyle,
    UiHeroSearchComponent,
    NgForOf,
    AsyncPipe,
    FilterPipe,
    RouterLink,
];
