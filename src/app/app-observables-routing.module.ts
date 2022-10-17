import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeObservablesComponent } from './home-observables/home-observables.component';
import { UserObservablesComponent } from './user-observables/user-observables.component';

const routes: Routes = [
  {path: '', component: HomeObservablesComponent},
  {path: 'user/:id', component: UserObservablesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
