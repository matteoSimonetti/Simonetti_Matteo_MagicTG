import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DatiService  } from './dati.service';
import { ListBodyComponent } from './list-body/list-body.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ListBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DatiService],
  bootstrap: [AppComponent]

})
export class AppModule { }
