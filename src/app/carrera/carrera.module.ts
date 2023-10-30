import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterCareerPageComponent } from './pages/register-career/register-career-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CareerRoutingModule } from './carrera-routing.module';



@NgModule({
  declarations: [
    ListPageComponent,
    RegisterCareerPageComponent
  ],
  imports: [
    CommonModule,
    // MaterialModule,
    CareerRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxDatatableModule
  ]
})
export class CarreraModule { }
