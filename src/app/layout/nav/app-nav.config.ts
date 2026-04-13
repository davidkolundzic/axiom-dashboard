import { InjectionToken } from "@angular/core";
import { AppNavItem } from "./app-nav.model";
import { ROUTES } from "./app-routes.config";

const _defaultNavItems: AppNavItem[] = [
    {
        label: 'Home',
        icon: 'bi bi-house',
        route: ROUTES.HOME,
        exact: true
    },
    {
        label: 'Dashboard',
        icon: 'bi bi-grid-1x2',
        route: ROUTES.DASHBOARD,
        exact: true
    },
    {
        label: 'Video Summary',
        icon: 'bi bi-camera-video',
        route: ROUTES.VIDEO_SUMMARY,
        
    }, 
    {
        label: 'VAT Evidence',
        icon: 'bi bi-receipt',
        route: ROUTES.VAT,
    }, 
    {
        label: 'Exports',
        icon: 'bi bi-download',
        route: ROUTES.EXPORTS,
    }, 
    {
        label: 'Settings',
        icon: 'bi bi-gear',
        route: ROUTES.SETTINGS,
    }
] //as const // satisfies readonly AppNavItem[];

export const APP_NAV_ITEMS= new InjectionToken< AppNavItem[]>('APP_NAV_ITEMS', {
    providedIn: 'root',
    factory: () => _defaultNavItems
});
