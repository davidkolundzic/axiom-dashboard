import { AppRoute } from "./app-routes.config";

export interface AppNavItem {
    label: string;
    icon: string;
    route: AppRoute;
    exact?: boolean;
    badge?: string;
}
