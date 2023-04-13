import {provideHttpClient} from '@angular/common/http';
import {importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter, withEnabledBlockingInitialNavigation} from '@angular/router';
import {InMemoryDataService} from '@toh-nx-v2/shared/data-access/in-memory-data';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import {AppComponent} from './app/app.component';
import {appShellRoutes} from './app/app-shell.routes';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(appShellRoutes, withEnabledBlockingInitialNavigation()),
        provideHttpClient(),
        provideAnimations(),
        importProvidersFrom([
            // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
            // and returns simulated server responses.
            // Remove it when a real server is ready to receive requests.
            HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
                dataEncapsulation: false,
            }),
        ]),
    ],
}).catch(err => console.error(err));
