import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageLobbyComponent } from './page-lobby/page-lobby.component';
import { ProviderAuthService } from './provider-services/provider-auth.service';
import { HeaderEcsComponent } from './components/header-ecs/header-ecs.component';
import { FormsModule } from '@angular/forms';
import { StartCensusComponent } from './start-census/start-census.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageRegisterComponent,
    PageLobbyComponent,
    HeaderEcsComponent,
    StartCensusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProviderAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
