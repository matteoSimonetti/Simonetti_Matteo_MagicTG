import { Component } from '@angular/core';
import { DatiService } from '../dati.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  constructor(private servizioDati: DatiService) {}

  //filtri per colore
  isCheckedBlack: boolean = false;
  isCheckedWhite: boolean = false;
  isCheckedBlue: boolean = false;
  isCheckedGreen: boolean = false;
  isCheckedRed: boolean = false;
  black() {
    if (this.isCheckedBlack) {
      this.servizioDati.color += 'B,';
    } else if (this.servizioDati.color.includes('B,')) {
      this.servizioDati.color = this.servizioDati.color.replace('B,', '');
    }
    this.servizioDati.getData();
  }
  white() {
    if (this.isCheckedWhite) {
      this.servizioDati.color += 'W,';
    } else if (this.servizioDati.color.includes('W,')) {
      this.servizioDati.color = this.servizioDati.color.replace('W,', '');
    }
    this.servizioDati.getData();
  }
  blue() {
    if (this.isCheckedBlue) {
      this.servizioDati.color += 'U,';
    } else if (this.servizioDati.color.includes('U,')) {
      this.servizioDati.color = this.servizioDati.color.replace('U,', '');
    }
    this.servizioDati.getData();
  }
  green() {
    if (this.isCheckedGreen) {
      this.servizioDati.color += 'G,';
    } else if (this.servizioDati.color.includes('G,')) {
      this.servizioDati.color = this.servizioDati.color.replace('G,', '');
    }
    this.servizioDati.getData();
  }
  red() {
    if (this.isCheckedRed) {
      this.servizioDati.color += 'R,';
    } else if (this.servizioDati.color.includes('R,')) {
      this.servizioDati.color = this.servizioDati.color.replace('R,', '');
    }
    this.servizioDati.getData();
  }

  //filtri per tipo
  isCheckedCreature: boolean = false;
  isCheckedSorcery: boolean = false;
  isCheckedInstant: boolean = false;
  isCheckedEnchantment: boolean = false;
  isCheckedArtifact: boolean = false;
  isCheckedLand: boolean = false;
  creature() {
    if (this.isCheckedCreature) {
      this.servizioDati.type = 'Creature';
      this.isCheckedSorcery = false;
      this.isCheckedInstant = false;
      this.isCheckedEnchantment = false;
      this.isCheckedArtifact = false;
      this.isCheckedLand = false;
    } else if ((this.servizioDati.type = 'Creature')) {
      this.servizioDati.type = this.servizioDati.type.replace('Creature', '');
    }
    this.servizioDati.getData();
  }
  sorcery() {
    if (this.isCheckedSorcery) {
      this.servizioDati.type = 'Sorcery';
      this.isCheckedCreature = false;
      this.isCheckedInstant = false;
      this.isCheckedEnchantment = false;
      this.isCheckedArtifact = false;
      this.isCheckedLand = false;
    } else if ((this.servizioDati.type = 'Sorcery')) {
      this.servizioDati.type = this.servizioDati.type.replace('Sorcery', '');
    }
    this.servizioDati.getData();
  }
  instant() {
    if (this.isCheckedInstant) {
      this.servizioDati.type = 'Instant';
      this.isCheckedCreature = false;
      this.isCheckedSorcery = false;
      this.isCheckedEnchantment = false;
      this.isCheckedArtifact = false;
    } else if ((this.servizioDati.type = 'Instant')) {
      this.servizioDati.type = this.servizioDati.type.replace('Instant', '');
    }
    this.servizioDati.getData();
  }
  enchantment(){
    if (this.isCheckedEnchantment) {
      this.servizioDati.type = 'Enchantment';
      this.isCheckedCreature = false;
      this.isCheckedSorcery = false;
      this.isCheckedInstant = false;
      this.isCheckedArtifact = false;
      this.isCheckedLand = false;
    } else if ((this.servizioDati.type = 'Enchantment')) {
      this.servizioDati.type = this.servizioDati.type.replace('Enchantment', '');
    }
    this.servizioDati.getData();
  }
  artifact(){
    if (this.isCheckedArtifact) {
      this.servizioDati.type = 'Artifact';
      this.isCheckedCreature = false;
      this.isCheckedSorcery = false;
      this.isCheckedInstant = false;
      this.isCheckedEnchantment = false;
      this.isCheckedLand = false;
    } else if ((this.servizioDati.type = 'Artifact')) {
      this.servizioDati.type = this.servizioDati.type.replace('Artifact', '');
    }
    this.servizioDati.getData();
  }
  land(){
    if (this.isCheckedLand) {
      this.servizioDati.type = 'Land';
      this.isCheckedCreature = false;
      this.isCheckedSorcery = false;
      this.isCheckedInstant = false;
      this.isCheckedEnchantment = false;
      this.isCheckedArtifact = false;
    } else if ((this.servizioDati.type = 'Land')) {
      this.servizioDati.type = this.servizioDati.type.replace('Land', '');
    }
    this.servizioDati.getData();
  }
}
