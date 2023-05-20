import { Component } from '@angular/core';
import { DatiService } from '../dati.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  pagina: number = 1;
  constructor(private servizioDati: DatiService){  }
  
  paginaPlus(){
    this.servizioDati.page++;
    this.servizioDati.getData();
    this.pagina = this.servizioDati.page;
  }
  paginaMinus(){
    if (this.servizioDati.page > 0) {
      this.servizioDati.page--;
      this.servizioDati.getData();
      this.pagina = this.servizioDati.page;
    } 
  }
}
