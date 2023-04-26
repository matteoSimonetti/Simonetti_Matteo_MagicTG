import { Component } from '@angular/core';
import { DatiService } from '../dati.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(private servizioDati:DatiService){}

}
