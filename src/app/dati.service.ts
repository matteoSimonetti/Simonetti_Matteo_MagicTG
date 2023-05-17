import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DatiService {
  datiCreati = new EventEmitter<any>();
  data:any = [];
  private pagina = 1;
  private url = "https://api.magicthegathering.io/v1/cards?page=" + this.pagina;
  constructor(private http: HttpClient) {  }
  
  getData(){
    this.http.get(this.url).subscribe((res)=>{
      this.data = res;
      console.log(this.data);
      //emetto un evento
      this.datiCreati.emit(this.data);
    })
  }
}
