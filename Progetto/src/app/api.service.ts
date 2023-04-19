import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = 'https://api.magicthegathering.io/v1/cards?page=331';
    return this.http.get(url);
  }
}
