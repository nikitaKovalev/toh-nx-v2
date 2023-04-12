import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UiMessagesComponent} from '@ui/toh-nx-v2/messages/ui-messages';

@Component({
    standalone: true,
    imports: [RouterModule, UiMessagesComponent],
    selector: 'toh-nx-v2-root',
    template: `
        <h1>Tour of Heroes</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
        <ui-messages></ui-messages>
    `,
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
