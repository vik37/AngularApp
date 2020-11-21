import { Directive, EventEmitter, HostBinding, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[inputRequired]'
})

export class InputRequiredDirective implements OnChanges {
    @Input() invalid: boolean;
    @HostBinding('class') elementClass = '';

    ngOnChanges(changes: SimpleChanges) {
        if (changes.invalid && !changes.invalid.firstChange) {
            this.elementClass = this.invalid ? 'required' : '';
        }
    }
}