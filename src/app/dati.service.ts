import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DatiService {
  datiCreati = new EventEmitter<any>();
  data:any = [];
  pagina = 1;
  constructor(private http: HttpClient) {  }
  
  getData(){
    const url = "https://api.magicthegathering.io/v1/cards?page=" + this.pagina;
    this.http.get(url).subscribe((res)=>{
      this.data = res;
      //emetto un evento
      this.datiCreati.emit(this.data);
      console.log(this.pagina, 'pagina')
    })
  }

}
