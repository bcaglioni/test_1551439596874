import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SedeEditComponent } from './sede-edit.component';
import { SedeEditRoutingModule } from './sede-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SedeEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SedeEditComponent
  ]
})
export class SedeEditModule { }
