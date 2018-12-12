import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './shareddocs.routing';

import { ShareddocsComponent } from './shareddocs.component';

import { AdvService } from './shareddocs.service';
import { ApiAdvServices } from './api.shareddocs.service';


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
    ShareddocsComponent,

  ],
  providers: [

    AdvService,
    ApiAdvServices

  ]
})
export class ShareddocsModule {}







