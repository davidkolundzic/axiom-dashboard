import { ActivityItem } from "./activity-item.model";

import { RecentItem } from "./recent-item.model";
import { StatCard } from "./stat-card.model";

export const STAT_CARD_MOCK = [
    {
      label: 'Total Revenue',
      value: '€48.2k',
      delta: '+12.4%',
      deltaPositive: true,
      icon: 'bi bi-currency-euro'
    },
    {
      label: 'Active Workspaces',
      value: '184',
      delta: '+6.8%',
      deltaPositive: true,
      icon: 'bi bi-buildings'
    },
    {
      label: 'Pending Reviews',
      value: '23',
      delta: '-3.1%',
      deltaPositive: false,
      icon: 'bi bi-hourglass-split'
    },
    {
      label: 'Avg Response Time',
      value: '1.9s',
      delta: '+0.2s',
      deltaPositive: false,
      icon: 'bi bi-lightning-charge'
    }
] as const satisfies readonly  StatCard[];

export const ACTIVITIES_MOCK = [
  {
      title: 'New export generated',
      subtitle: 'VAT Evidence / Workspace EU-01',
      time: '5 min ago',
      icon: 'bi bi-download'
    },
    {
      title: 'Transcript summary completed',
      subtitle: 'Video Summary / Session A12',
      time: '18 min ago',
      icon: 'bi bi-camera-video'
    },
    {
      title: 'Mismatch detected',
      subtitle: 'Billing vs IP country check',
      time: '44 min ago',
      icon: 'bi bi-exclamation-triangle'
    },
    {
      title: 'User invited to workspace',
      subtitle: 'Team access updated',
      time: '1 hour ago',
      icon: 'bi bi-person-plus'
    }
] as const satisfies readonly ActivityItem[];

export const RECENT_ITEMS_MOCK = [
  {
      name: 'Workspace Audit Export',
      category: 'Export',
      status: 'Completed',
      updatedAt: 'Today, 09:12',
      owner: 'David'
    },
    {
      name: 'Q2 Operations Review',
      category: 'Report',
      status: 'Pending',
      updatedAt: 'Today, 08:40',
      owner: 'Mia'
    },
    {
      name: 'Video Summary Batch',
      category: 'AI Processing',
      status: 'Active',
      updatedAt: 'Today, 08:11',
      owner: 'Alex'
    },
    {
      name: 'Stripe Evidence Check',
      category: 'Compliance',
      status: 'Review',
      updatedAt: 'Yesterday, 18:27',
      owner: 'David'
    }
] as const satisfies readonly RecentItem[];