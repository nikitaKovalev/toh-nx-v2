import {Route} from '@angular/router';

export const appShellRoutes: Route[] = [
    {
        path: 'dashboard',
        loadComponent: async () =>
            import('@toh-nx-v2/toh-nx-v2/dashboard/feature-dashboard'),
    },
    {
        path: 'heroes',
        loadComponent: async () =>
            import('@page/toh-nx-v2/heroes/feature/heroes-list'),
    },
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: '**', redirectTo: '/dashboard'},
];
