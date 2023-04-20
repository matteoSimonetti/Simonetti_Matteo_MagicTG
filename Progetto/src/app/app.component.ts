import { Component } from '@angular/core';
import { Cards } from 'scryfall-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Progetto';

}

let card = await Cards.bySet("dgm", 22);
console.log(card.name, card.printed_name);