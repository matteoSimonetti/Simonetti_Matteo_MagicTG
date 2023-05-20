import { Component, OnInit } from '@angular/core';
import { DatiService } from '../dati.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit{
  constructor(private servizioDati: DatiService){  }

  search(nome: string) {
    // Assegna il valore dell'input alla tua variabile
    console.log(nome);
    // Esegui la ricerca
    this.servizioDati.name = nome;
    this.servizioDati.getData();
  }

  ngOnInit(): void {

    }
  }

