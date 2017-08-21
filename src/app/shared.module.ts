import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TouchableDirective } from './directives/touchable.directive';
import { AutoTextareaElement } from './elements/auto-textarea.element';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        TouchableDirective,
        AutoTextareaElement
    ],
    providers: [
    ],
    exports: [
        AutoTextareaElement
    ]
})
export class SharedModule { }