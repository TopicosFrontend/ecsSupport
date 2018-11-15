import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageLobbyComponent } from './page-lobby/page-lobby.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { StartCensusComponent } from './start-census/start-census.component';
import { ShowCollectorComponent } from './show-collector/show-collector.component';
import { ShowCollectorsComponent } from './show-collectors/show-collectors.component';
import { ShowFormComponent } from './show-form/show-form.component';
import { RegisterCollectorsComponent } from './register-collectors/register-collectors.component'


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: PageLoginComponent },
  { path: 'lobby', component: PageLobbyComponent },
  { path: 'registerSupport', component: PageRegisterComponent },
  { path: 'startCensus', component: StartCensusComponent },
  { path: 'register_collectors', component: RegisterCollectorsComponent },
  { path: 'show_form', component: ShowFormComponent },
  { path: 'show_collector/:username', component: ShowCollectorComponent },
  { path: 'show_collectors', component: ShowCollectorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
