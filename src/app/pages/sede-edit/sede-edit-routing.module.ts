import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SedeEditComponent } from './sede-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SedeEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SedeEditRoutingModule { }
