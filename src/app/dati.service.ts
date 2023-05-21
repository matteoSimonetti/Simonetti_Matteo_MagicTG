import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DatiService {
  datiCreati = new EventEmitter<any>();
  data: any = [];
  page = 1;
  name = '';
  color = '';
  type = '';
  constructor(private http: HttpClient) {}

  getData() {
    const url ='https://api.magicthegathering.io/v1/cards?page=' 
    + this.page + '&pageSize=25' + '&name=' + this.name + '&colors=' + this.color + '&type=' + this.type;
    console.log(url);
    this.http.get(url).subscribe(
      (res) => {
        this.data = res;
        //emetto un evento
        this.datiCreati.emit(this.data);
        console.log(this.page, 'pagina');
      },
      //gestisco errori
      (error) => {
        if (error.status === 500) {
          console.warn('gestendo errore 500');
          this.getData();
        } else {
          // Gestisco altri tipi di errori
          console.error(error);
        }
      }
    );
  }
}
