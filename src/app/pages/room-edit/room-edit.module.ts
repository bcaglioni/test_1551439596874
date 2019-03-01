import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomEditComponent } from './room-edit.component';
import { RoomEditRoutingModule } from './room-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RoomEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    RoomEditComponent
  ]
})
export class RoomEditModule { }
