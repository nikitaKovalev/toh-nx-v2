import {ChangeDetectionStrategy, Component} from '@angular/core';

import {uiMessagesImports} from './ui-messages.imports';

@Component({
    standalone: true,
    selector: 'ui-messages',
    templateUrl: 'ui-messages.template.html',
    styleUrls: ['./ui-messages.style.scss'],
    imports: uiMessagesImports,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMessagesComponent {}
