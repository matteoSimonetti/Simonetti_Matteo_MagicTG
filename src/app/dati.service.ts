import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DatiService {
  datiCreati = new EventEmitter<any>();
  data:any = [];
  page = 1;
  name = "";
  constructor(private http: HttpClient) {  }
  
  getData(){
    const url = "https://api.magicthegathering.io/v1/cards?page=" + this.page +"&pageSize=25" + "&name=" + this.name;
    this.http.get(url).subscribe((res)=>{
      this.data = res;
      //emetto un evento
      this.datiCreati.emit(this.data);
      console.log(this.page, 'pagina')
    })
  }

}
