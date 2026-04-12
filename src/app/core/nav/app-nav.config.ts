import { AppNavItem } from "./app-nav.model";

export const APP_NAV_ITEMS: AppNavItem[] = [
    {
        label: 'Home',
        icon: 'bi bi-house',
        route: '/',
        exact: true
    },
    {
        label: 'Dashboard',
        icon: 'bi bi-speedometer2',
        route: '/dashboard'
    }
] as const;