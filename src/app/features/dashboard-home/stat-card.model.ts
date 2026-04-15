export interface StatCard {
    label: string;
    value: string | number;
    delta: string; // e.g., '+5%' or '-3%'
    deltaPositive: boolean; // true if delta is positive, false if negative
    icon: string; // e.g., 'fa-solid fa-users'
}
