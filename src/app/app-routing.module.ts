import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './screens/heroes/heroes.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { HeroDetailComponent } from './screens/hero-detail/hero-detail.component';
import { Fcm109Component } from './screens/fcm109/fcm109.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'fcm109', component: Fcm109Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
