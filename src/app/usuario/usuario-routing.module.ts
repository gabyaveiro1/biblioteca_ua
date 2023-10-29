import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { RegisterUserPageComponent } from './pages/register-user/register-user-page.component';




const routes: Routes = [
  {
    path: '',
    children: [
      
      {
        path: 'list',
        component: ListPageComponent,
        data: {
          title: 'Lista Usuarios'
        }
      },
      {
        path: 'new-user',
        component: RegisterUserPageComponent,
        data: {
          title: 'Full Screen Data Table'
        }
      },
      {
        path: 'edit/:id',
        component: RegisterUserPageComponent,
        data: {
          title: 'Editing Data Table'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
