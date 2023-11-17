import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenderPipe } from './gender.pipe';
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { AssignmentTwoBasicComponent } from './assignment-two-basic/assignment-two-basic.component';
import { DeptfilterPipe } from './deptfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GenderPipe,
    AssignmentOneComponent,
    AssignmentTwoComponent,
    FilterPipe,
    AssignmentTwoBasicComponent,
    DeptfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
