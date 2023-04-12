import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {uiHeroSearchImports} from './ui-hero-search.imports';

@Component({
    standalone: true,
    selector: 'ui-hero-search',
    templateUrl: 'ui-hero-search.template.html',
    styleUrls: ['./ui-hero-search.style.scss'],
    imports: uiHeroSearchImports,
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: UiHeroSearchComponent, multi: true},
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiHeroSearchComponent implements ControlValueAccessor {
    value = '';

    registerOnChange(onChange: (value: string) => void): void {
        this._onChange = onChange;
    }

    registerOnTouched(onTouched: () => void): void {
        this._onTouched = onTouched;
    }

    writeValue(value: string): void {
        this.value = value;
        this._onChange(value);
    }

    onValueChange(value: string): void {
        this.value = value;
        this._onChange(value);
        this._onTouched();
    }

    private _onChange: (value: string) => void = () => {
        //
    };

    private _onTouched: () => void = () => {
        //
    };
}
