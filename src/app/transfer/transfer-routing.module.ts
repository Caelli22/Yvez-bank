import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferPage } from './transfer.page';

const routes: Routes = [
  {
    path: '',
    component: TransferPage
  },  {
    path: 'send',
    loadChildren: () => import('./send/send.module').then( m => m.SendPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferPageRoutingModule {}
