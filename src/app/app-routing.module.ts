import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from 'app/pages/home/home.page';

const routes: Routes = [
  {
      path: 'home',
      component: HomePage
  },
  {
      path: '**',
      redirectTo: 'home' 
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
