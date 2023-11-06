import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage } from './sample.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePageRoutingModule {}
