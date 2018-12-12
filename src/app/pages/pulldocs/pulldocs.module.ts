import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './pulldocs.routing';

import { PulldocsComponent } from './pulldocs.component';

import { AdvService } from './pulldocs.service';
import { ApiAdvServices } from './api.pulldocs.service';


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
    PulldocsComponent,

  ],
  providers: [

    AdvService,
    ApiAdvServices

  ]
})
export class PulldocsModule {}







