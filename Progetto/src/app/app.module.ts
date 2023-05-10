import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatiService],
  bootstrap: [AppComponent]

})
export class AppModule { }
