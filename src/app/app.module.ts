import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageLobbyComponent } from './page-lobby/page-lobby.component';
import { ProviderAuthService } from './provider-services/provider-auth.service';
import { HeaderEcsComponent } from './components/header-ecs/header-ecs.component';
import { FormsModule } from '@angular/forms';
import { StartCensusComponent } from './start-census/start-census.component';
import { ShowFormComponent } from './show-form/show-form.component';
import { ShowCollectorsComponent } from './show-collectors/show-collectors.component';
import { ShowCollectorComponent } from './show-collector/show-collector.component';
import { RegisterCollectorsComponent } from './register-collectors/register-collectors.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageRegisterComponent,
    PageLobbyComponent,
    HeaderEcsComponent,
    StartCensusComponent,
    ShowFormComponent,
    ShowCollectorsComponent,
    ShowCollectorComponent,
    RegisterCollectorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [ProviderAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
