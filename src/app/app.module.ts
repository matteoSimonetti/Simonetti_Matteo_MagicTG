import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DatiService  } from './dati.service';
import { ListBodyComponent } from './list-body/list-body.component';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { FiltersComponent } from './filters/filters.component';
import { FormsModule } from '@angular/forms';
import { SitoComponent } from './sito/sito.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ListBodyComponent,
    PageComponent,
    FiltersComponent,
    SitoComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DatiService],
  bootstrap: [AppComponent]

})
export class AppModule { }
