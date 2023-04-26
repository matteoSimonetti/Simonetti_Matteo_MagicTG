import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DatiService } from './dati.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Progetto';

  constructor(private servizioDati:DatiService){}
  
  ngOnInit() {
    this.servizioDati.getData();
    console.warn('api iniziale');
  }
}


