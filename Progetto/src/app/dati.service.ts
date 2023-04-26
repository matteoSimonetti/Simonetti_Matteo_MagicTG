import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatiService {

  private data:any = []
  constructor(private http: HttpClient) {
    
  }

  pagina = 1;
  getData(){
    const url ='https://api.magicthegathering.io/v1/cards?page=' + this.pagina;
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

}
