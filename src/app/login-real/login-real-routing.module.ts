import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRealPage } from './login-real.page';

const routes: Routes = [
  {
    path: '',
    component: LoginRealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRealPageRoutingModule {}
