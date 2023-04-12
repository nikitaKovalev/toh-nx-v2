import {Routes} from '@angular/router';

export default [
    {
        path: '',
        loadComponent: async () =>
            import('@page/toh-nx-v2/heroes/feature/hero-list'),
    },
    {
        path: ':id',
        loadComponent: async () =>
            import('@page/toh-nx-v2/heroes/feature/hero-detail'),
    },
] as Routes;
