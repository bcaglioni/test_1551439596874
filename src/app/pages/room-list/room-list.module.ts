import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list.component';
import { RoomListRoutingModule } from './room-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RoomListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    RoomListComponent
  ]
})
export class RoomListModule { }
