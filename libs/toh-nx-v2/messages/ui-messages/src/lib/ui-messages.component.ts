import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MessagesService} from '@toh-nx-v2/toh-nx-v2/messages/data-access-messages';

import {uiMessagesImports} from './ui-messages.imports';

@Component({
    standalone: true,
    selector: 'ui-messages',
    templateUrl: 'ui-messages.template.html',
    styleUrls: ['./ui-messages.style.scss'],
    imports: [uiMessagesImports],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMessagesComponent {
    readonly messageService = inject(MessagesService);
}
