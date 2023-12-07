import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepositPageRoutingModule } from './deposit-routing.module';

import { DepositPage } from './deposit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepositPageRoutingModule
  ],
  declarations: [DepositPage]
})
export class DepositPageModule {}
