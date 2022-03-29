import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { loginRotas } from './login.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRotas)
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
