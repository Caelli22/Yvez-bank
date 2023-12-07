import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginRealPageRoutingModule } from './login-real-routing.module';

import { LoginRealPage } from './login-real.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRealPageRoutingModule
  ],
  declarations: [LoginRealPage]
})
export class LoginRealPageModule {}
