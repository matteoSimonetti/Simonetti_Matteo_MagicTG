import { Component, OnInit } from '@angular/core';
import { DatiService } from '../dati.service';

@Component({
  selector: 'app-list-body',
  templateUrl: './list-body.component.html',
  styleUrls: ['./list-body.component.css']
})
export class ListBodyComponent implements OnInit{
  datiDefinitivi:any = [];
  constructor(private servizioDati: DatiService) { servizioDati.datiCreati.subscribe((dati) => {
    //quando i dati sono stati caricati eseguo queste istruzioni
    dati = this.servizioDati.data;
    console.log(dati);
    this.datiDefinitivi = dati
  });
}

  
  ngOnInit(): void {
    //prede i dati e li carica sul componente
    this.servizioDati.getData();
  }
}
