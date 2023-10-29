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
    },
    {
        path: 'ui-elements',
        loadChildren: () => import('../../ui-elements/ui-elements.module').then(m => m.UIElementsModule)
    },
    {
        path: 'charts',
        loadChildren: () => import('../../charts/charts.module').then(m => m.ChartsNg2Module)

    },
    {
        path: 'widgets',
        loadChildren: () => import('../../widgets/widgets.module').then(m => m.WidgetsModule)

    },
    {
        path: 'form',
        loadChildren: () => import('../../form/form.module').then(m => m.FormModule)
    },
    {
        path: 'calendar',
        loadChildren: () => import('../../fullcalendar/fullcalendar.module').then(m => m.FullcalendarModule)

    },
    {
        path: 'table',
        loadChildren: () => import('../../tables/tables.module').then(m => m.TablesModule)

    },
    {
        path: 'datatable',
        loadChildren: () => import('../../datatable/datatable.module').then(m => m.DatatableModule)

    },
    {
        path: 'ui-icons',
        loadChildren: () => import('../../ui-icons/ui-icons.module').then(m => m.UiIconsModule)

    },
    {
        path: 'maps',
        loadChildren: () => import('../../maps/maps.module').then(m => m.MapsModule)

    },
    {
        path: 'pages',
        loadChildren: () => import('../../pages/full-pages/full-pages.module').then(m => m.FullPagesModule)

    }
];