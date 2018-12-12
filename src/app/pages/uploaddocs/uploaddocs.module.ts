import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './uploaddocs.routing';

import { UploaddocsComponent } from './uploaddocs.component';

import { AdvService } from './uploaddocs.service';
import { ApiAdvServices } from './api.uploaddocs.service';


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
    UploaddocsComponent,

  ],
  providers: [

    AdvService,
    ApiAdvServices

  ]
})
export class UploaddocsModule {}







