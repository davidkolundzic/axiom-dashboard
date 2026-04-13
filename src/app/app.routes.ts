import { Routes } from '@angular/router';
import { DashboardShellComponent } from '@layout/dashboard-shell/dashboard-shell';
import { ROUTES, toRoutePath } from '@layout/nav/app-routes.config';
import { DashboardHomeComponent } from './features/dashboard-home/dashboard-home';
import { Home } from './features/home/home';
import { VideoSummaryComponent } from './features/video-summary/video-summary';
import { SettingsComponent } from './features/settings/settings';

export const routes: Routes = [
    {
        path: '',         
        children: [
            { path: '', redirectTo: toRoutePath(ROUTES.HOME), pathMatch: 'full' },
            { path: toRoutePath(ROUTES.HOME), component:  Home },
            { path: toRoutePath(ROUTES.DASHBOARD), component:  DashboardHomeComponent },
            { path: toRoutePath(ROUTES.VIDEO_SUMMARY), component: VideoSummaryComponent },
            { path: toRoutePath(ROUTES.VAT), redirectTo: '', pathMatch: 'full' },
            { path: toRoutePath(ROUTES.EXPORTS), redirectTo: '', pathMatch: 'full' },
            { path: toRoutePath(ROUTES.SETTINGS), component:  SettingsComponent },

        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
