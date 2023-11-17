import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';

const routes: Routes = [
  { path: 'assignment-1', component: AssignmentOneComponent },
  { path: 'assignment-2', component: AssignmentTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
