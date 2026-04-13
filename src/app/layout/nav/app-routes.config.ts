export const ROUTES = {
    HOME: '/',
    DASHBOARD: '/dashboard',
    SETTINGS: '/settings',
    VIDEO_SUMMARY: '/video-summary',
    VAT: '/vat',
    EXPORTS: '/exports'
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];

export const toRoutePath = (route: AppRoute): string =>
    route === '/' ? '' : route.slice(1);