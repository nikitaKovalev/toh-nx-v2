import {Route} from '@angular/router';

export const appShellRoutes: Route[] = [
    {
        path: 'dashboard',
        loadComponent: async () =>
            import('@feature/toh-nx-v2/dashboard/feature-dashboard'),
    },
    {
        path: 'heroes',
        loadChildren: async () =>
            import('@toh-nx-v2/toh-nx-v2/heroes/feature/hero-shell'),
    },
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: '**', redirectTo: '/dashboard'},
];
