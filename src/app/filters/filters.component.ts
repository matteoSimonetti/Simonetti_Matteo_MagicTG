import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  isCheckedBlack: boolean = false;
  isCheckedWhite: boolean = false;
  isCheckedBlue: boolean = false;
  isCheckedGreen: boolean = false;
  isCheckedRed: boolean = false;
  black() {
    if (this.isCheckedBlack) {
      // La checkbox è stata spuntata
      console.log('Checkbox selezionata');
      // Altri comandi o azioni
    } else {}
  }
  white() {
    if (this.isCheckedWhite) {
      // La checkbox è stata spuntata
      console.log('Checkbox selezionata');
      // Altri comandi o azioni
    } else {}
  }
  blue() {
    if (this.isCheckedBlue) {
      // La checkbox è stata spuntata
      console.log('Checkbox selezionata');
      // Altri comandi o azioni
    } else {}
  }
  green() {
    if (this.isCheckedGreen) {
      // La checkbox è stata spuntata
      console.log('Checkbox selezionata');
      // Altri comandi o azioni
    } else {}
  }
  red() {
    if (this.isCheckedRed) {
      // La checkbox è stata spuntata
      console.log('Checkbox selezionata');
      // Altri comandi o azioni
    } else {}
  }
}
