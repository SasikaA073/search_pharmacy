import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PharmaciesComponent } from './components/pharmacies/pharmacies.component';
import { AddPharmacyComponent } from './components/add-pharmacy/add-pharmacy.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
// import { HttpClient, HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    PharmaciesComponent,
    AddPharmacyComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
