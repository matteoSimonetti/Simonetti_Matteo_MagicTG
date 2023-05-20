import { Component } from '@angular/core';
import { DatiService } from '../dati.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  page: number = 1;
  constructor(private servizioDati: DatiService){
    
  }
  
  paginaPlus(){
    this.servizioDati.pagina++;
    this.servizioDati.getData();
    this.page = this.servizioDati.pagina;
  }
  paginaMinus(){
    if (this.servizioDati.pagina > 0) {
      this.servizioDati.pagina--;
      this.servizioDati.getData();
      this.page = this.servizioDati.pagina;
    } 
  }
}
