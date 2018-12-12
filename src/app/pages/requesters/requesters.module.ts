import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './requesters.routing';

import { RequestersComponent } from './requesters.component';

import { AdvService } from './requesters.service';
import { ApiAdvServices } from './api.requesters.service';


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
    RequestersComponent,

  ],
  providers: [

    AdvService,
    ApiAdvServices

  ]
})
export class RequestersModule {}







