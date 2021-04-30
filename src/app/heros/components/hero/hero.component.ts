import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html'
})

export class HeroComponent {
    name: string = 'Iron';
    old: number = 45;

    //básicamente se convierte en propiedad, no es un método
    get nameUpperCase(): string {
        return this.name.toUpperCase();
    }

    getName(): string {
        return `${this.name} - ${this.old}`;
    }
}
