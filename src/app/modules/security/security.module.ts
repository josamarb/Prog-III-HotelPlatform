import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    LogoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SecurityModule { }
