import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SedeComponent } from './sede.component';
import { SedeRoutingModule } from './sede-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SedeRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SedeComponent
  ]
})
export class SedeModule { }
