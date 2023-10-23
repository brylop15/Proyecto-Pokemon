import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { RgisterComponent } from './views/rgister/rgister.component';
import { GetPokemonService } from './services'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RgisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    GetPokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
