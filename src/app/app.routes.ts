import { Routes } from '@angular/router';
import { DashboardShellComponent } from '@layout/dashboard-shell/dashboard-shell';
import { ROUTES, toRoutePath } from '@layout/nav/app-routes.config';

export const routes: Routes = [
    {
        path: '',
         
        children: [
            { path: toRoutePath(ROUTES.DASHBOARD), redirectTo: '', pathMatch: 'full' },
            { path: toRoutePath(ROUTES.VIDEO_SUMMARY), redirectTo: '', pathMatch: 'full' },
            { path: toRoutePath(ROUTES.VAT), redirectTo: '', pathMatch: 'full' },
            { path: toRoutePath(ROUTES.EXPORTS), redirectTo: '', pathMatch: 'full' },
            { path: toRoutePath(ROUTES.SETTINGS), redirectTo: '', pathMatch: 'full' },

        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
