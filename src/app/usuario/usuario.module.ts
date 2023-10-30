import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { RouterModule } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterUserPageComponent } from './pages/register-user/register-user-page.component';
import { LayoutUserPageComponent } from './pages/layout-page/layout-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [
    LayoutUserPageComponent,
    ListPageComponent,
    RegisterUserPageComponent
  ],
  imports: [
    CommonModule,
    // MaterialModule,
    UsuarioRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxDatatableModule
  ]
})
export class UsuarioModule { }
