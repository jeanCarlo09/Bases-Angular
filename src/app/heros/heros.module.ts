import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ListingComponent } from './components/listing/listing.component';

@NgModule({

    declarations: [
        HeroComponent,
        ListingComponent,
    ],

    exports: [
        ListingComponent
    ],
    // Las importaciones son los módulos
    //CommonModule -> proporciona directivas y demás de Angular
    imports: [
        CommonModule
    ],

    providers: [

    ],
})

export class HerosModule {

}