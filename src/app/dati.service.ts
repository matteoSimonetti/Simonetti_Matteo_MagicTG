import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatiService {

  private data:any = []
  constructor() {
    
  }
  
  pagina = 1;
  url ='https://api.magicthegathering.io/v1/cards?page=' + this.pagina;

  getData(){
    fetch(this.url)
      .then ((response) => response.json())
      .then (console.log);
  }

}
