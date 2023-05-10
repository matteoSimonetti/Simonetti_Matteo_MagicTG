import { Component, OnInit } from '@angular/core';
import { DatiService } from '../dati.service';

@Component({
  selector: 'app-list-body',
  templateUrl: './list-body.component.html',
  styleUrls: ['./list-body.component.css']
})
export class ListBodyComponent implements OnInit{
  public carte:any = []
  constructor(private servizioDati: DatiService) { }
  ngOnInit(): void {
    this.carte = this.servizioDati.getData();
    console.log(this.carte);
  }
}
