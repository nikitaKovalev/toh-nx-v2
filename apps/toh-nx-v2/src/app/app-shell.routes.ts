import {Route} from '@angular/router';

export const appShellRoutes: Route[] = [
    {
        path: 'dashboard',
        loadComponent: async () =>
            import('@toh-nx-v2/toh-nx-v2/dashboard/feature-dashboard'),
    },
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: '**', redirectTo: '/dashboard'},
];
