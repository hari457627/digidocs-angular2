/*import { Routes, RouterModule } from '@angular/router';*/
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'userDashboard',
    loadChildren: 'app/pages/userDashboard/userDashboard.module#UserDashboardModule'
  },
  /*{
    path: 'blueMixServices',
    loadChildren: 'app/pages/blueMixServices/blueMix.module#BlueMixModule'
  },*/
  {
    path: 'profiledetails',
    loadChildren: 'app/pages/profile/profiledetails.module#ProfiledetailsModule'
  },
  {
    path: 'profile',
    loadChildren: 'app/pages/profilepage/profile.module#ProfileModule'
  },
  /*{ path: 'pulldocs', loadChildren: './pulldocs/pulldocs.module#PulldocsModule' },*/


 /* {
    path: 'pulldocs',
    loadChildren: 'app/pages/pulldocs/pulldocs.component.html'
  },*/

  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
      { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
      { path: 'usersManagement', loadChildren: './userManagement/users.module#UsersModule' },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
      { path: 'advertisement', loadChildren: './advertisement/adv.module#AdvModule' },
      { path: 'issuedocs', loadChildren: './issueddocs/issuedocs.module#IssuedocsModule' },
      { path: 'uploaddocs', loadChildren: './uploaddocs/uploaddocs.module#UploaddocsModule' },
      { path: 'activity', loadChildren: './activity/activity.module#ActivityModule' },
      { path: 'issuers', loadChildren: './issuers/issuers.module#IssuersModule' },
      { path: 'requesters', loadChildren: './requesters/requesters.module#RequestersModule' },
      { path: 'shareddocs', loadChildren: './shareddocs/shareddocs.module#ShareddocsModule' },
        { path: 'pulldocs', loadChildren: './pulldocs/pulldocs.module#PulldocsModule' },
      { path: 'calander', loadChildren: './calander/calander.module#CalanderModule' },
      /*{ path: 'visualRecognition', loadChildren: './blueMixServices/VisualRecognitionModule/VisualRecognition.module#VisualRecognitionModule'},
      { path: 'translation', loadChildren: './blueMixServices/languageTranslatorModule/languageTranslator.module#LanguageTranslatorModule' },
      { path: 'fileConverter', loadChildren: './blueMixServices/FileConverter/fileConverter.module#FileConverterModule' },
      { path: 'conversation', loadChildren: './blueMixServices/ConversationModule/conversation.module#ConversationModule'}*/
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
