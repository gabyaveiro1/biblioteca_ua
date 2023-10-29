import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { RegisterCareerPageComponent } from './pages/register-career/register-career-page.component';




const routes: Routes = [
  {
    path: '',
    children: [
      
      {
        path: 'list',
        component: ListPageComponent,
        data: {
          title: 'Lista Carreras'
        }
      },
      {
        path: 'new-user',
        component: RegisterCareerPageComponent,
        data: {
          title: 'Crear Carrera'
        }
      },
      {
        path: 'edit/:id',
        component: RegisterCareerPageComponent,
        data: {
          title: 'Editar Carrera'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule { }
