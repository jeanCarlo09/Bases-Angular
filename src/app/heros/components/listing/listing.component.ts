import { Component } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
})
export class ListingComponent {

  // constructor() { }

  // //inicializar cosas, peticiones. Se ejecuta después del constructor
  // ngOnInit(): void {
  // }

  heros: string[] = ['Spiderman', 'Hulk', 'Thor'];
  heroDeleted: string = '';

  deleteHero(): void {
    this.heroDeleted = this.heros.pop() || '';
  }

}
