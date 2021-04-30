import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './components/contador.component';

@NgModule({

    declarations: [
        ContadorComponent
    ],

    exports: [
        ContadorComponent
    ],

    imports: [
        CommonModule
    ],

    providers: []

})
export class ContadorModule { }