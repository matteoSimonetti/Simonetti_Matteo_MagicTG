import { Component } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Progetto';
  constructor(private api:ApiService){
    this.api.getData().subscribe(data=>{
      console.log(data); 
      for (let i = 0; i < 101; i++) {
        
        
      }
    })
  }
}


