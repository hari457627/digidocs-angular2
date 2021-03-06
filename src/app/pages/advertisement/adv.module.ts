import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './adv.routing';

import { AdvComponent } from './adv.component';

import { AdvService } from './adv.service';
import { ApiAdvServices } from './api.adv.service';


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
    AdvComponent,

  ],
  providers: [

    AdvService,
    ApiAdvServices

  ]
})
export class AdvModule {}







