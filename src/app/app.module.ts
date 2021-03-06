import { NgModule, ApplicationRef, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from './shared/services/api.service';
import { JwtService } from './shared/services/jwt.service';
/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing';
import { Errors } from './shared/models/errors.model';
// App is our top level component
import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';
import { HomeModule } from './home/home.module';
import { UsersModule } from './pages/userManagement/users.module';
import { UserDashboardModule } from './pages/userDashboard/userDashboard.module';
/*import { AdvModule } from './pages/advertisement/adv.module';*/
import { IssuedocsModule } from './pages/issueddocs/issuedocs.module';
import { UploaddocsModule } from './pages/uploaddocs/uploaddocs.module';
import { ActivityModule } from './pages/activity/activity.module';
import { IssuersModule } from './pages/issuers/issuers.module';
import { RequestersModule } from './pages/requesters/requesters.module';
import { ShareddocsModule } from './pages/shareddocs/shareddocs.module';
import { PulldocsModule } from './pages/pulldocs/pulldocs.module';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
/*import { LanguageTranslatorModule } from './pages/blueMixServices/languageTranslatorModule/languageTranslator.module';
import { ConversationModule } from './pages/blueMixServices/ConversationModule/conversation.module';*/

import { VisualRecognitionModule } from './pages/blueMixServices/VisualRecognitionModule/VisualRecognition.module';
import { FileConverterModule } from './pages/blueMixServices/FileConverter/fileConverter.module';
// import { ListerrorModule } from './shared/listerror.module'

// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState
];
export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    PagesModule,
    routing,
    HomeModule,
    UsersModule,
    UserDashboardModule,
    /*AdvModule,*/
    AngularMultiSelectModule,
   /* LanguageTranslatorModule,*/
    FileConverterModule,
    IssuedocsModule,
    UploaddocsModule,
    ActivityModule,
    IssuersModule,
    RequestersModule,
    ShareddocsModule,
    PulldocsModule
   /* ConversationModule*/
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS, ApiService, JwtService, Errors
  ]
})
export class AppModule {

  constructor(public appState: AppState) {
  }
}
