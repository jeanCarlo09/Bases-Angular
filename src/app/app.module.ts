import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HerosModule } from './heros/heros.module';
import { ContadorModule } from './contador/contador.module';

//Decorador
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HerosModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Declarations -> components
//imports -> otros components
//providers -> services en módulos
//bootstrap -> el módulo principal y el que inica al correr la app

