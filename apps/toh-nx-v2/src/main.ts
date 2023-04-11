import {bootstrapApplication} from '@angular/platform-browser';
import {
    provideRouter,
    withEnabledBlockingInitialNavigation,
} from '@angular/router';

import {AppComponent} from './app/app.component';
import {appShellRoutes} from './app/app-shell.routes';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(appShellRoutes, withEnabledBlockingInitialNavigation()),
    ],
}).catch((err) => console.error(err));
