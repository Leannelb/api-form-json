import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './services/http-client.service';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/partials/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	HttpClientModule
  ],
  providers: [ UserService, HttpClientService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
