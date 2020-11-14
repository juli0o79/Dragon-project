import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componente/login/login.component';
import { ListaComponent } from './componente/lista/lista.component';

import { NewComponent } from './componente/new/new.component';
import {FormsModule} from '@angular/forms'

import {DragonServiceService} from './service/dragon-service.service'
import {HttpClientModule} from '@angular/common/http'

import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DragonServiceService, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
