import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './issuedocs.routing';

import { AdvComponent } from './issuedocs.component';

import { AdvService } from './issuedocs.service';
import { ApiAdvServices } from './api.issuedocs.service';


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
    AdvComponent

  ],
  providers: [

    AdvService,
    ApiAdvServices

  ]
})
export class IssuedocsModule {}







