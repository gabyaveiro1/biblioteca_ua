import { Routes } from '@angular/router';
import { UsuarioModule } from '../../usuario/usuario.module';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        path: 'user',
        loadChildren: () => import('../../usuario/usuario.module').then(m => m.UsuarioModule)
    },
    {
        path: 'career',
        loadChildren: () => import('../../carrera/carrera.module').then(m => m.CarreraModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'components',
        loadChildren: () => import('../../components/components.module').then(m => m.ComponentsModule)
    }
];