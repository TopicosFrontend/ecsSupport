import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageLobbyComponent } from './page-lobby/page-lobby.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { StartCensusComponent } from './start-census/start-census.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: PageLoginComponent },
  { path: 'lobby', component: PageLobbyComponent },
  { path: 'registerSupport', component: PageRegisterComponent },
  { path: 'startCensus', component: StartCensusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
