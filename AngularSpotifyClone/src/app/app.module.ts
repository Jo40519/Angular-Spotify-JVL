import { appRotas } from './app.routes';
import { RouterModule } from '@angular/router';
import { LoginModule } from './pages/login/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRotas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
