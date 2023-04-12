import {ChangeDetectionStrategy, Component} from '@angular/core';

import {featureDashboardImports} from './feature-dashboard.imports';

@Component({
    standalone: true,
    templateUrl: 'feature-dashboard.page.html',
    styleUrls: ['./feature-dashboard.page.scss'],
    imports: featureDashboardImports,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FeatureDashboardPage {}
