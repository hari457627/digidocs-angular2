import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './issuers.routing';

import { IssuersComponent } from './issuers.component';

import { AdvService } from './issuers.service';
import { ApiAdvServices } from './api.issuers.service';


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
    IssuersComponent,

  ],
  providers: [

    AdvService,
    ApiAdvServices

  ]
})
export class IssuersModule {}







