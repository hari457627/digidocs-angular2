import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './activity.routing';

import { ActivityComponent } from './activity.component';

import { AdvService } from './activity.service';
import { ApiAdvServices } from './api.activity.service';


@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    ActivityComponent,

  ],
  providers: [

    AdvService,
    ApiAdvServices

  ]
})
export class ActivityModule {}







