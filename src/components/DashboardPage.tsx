'use client';

import { Sidebar } from './dashboard/Sidebar';
import { DashboardTopBar } from './dashboard/DashboardTopBar';
import { StatsCard } from './dashboard/StatsCard';
import { ActivityChart } from './dashboard/ActivityChart';
import { CanvasTypesChart } from './dashboard/CanvasTypesChart';
import { SyncQueue } from './dashboard/SyncQueue';
import { RecentProjects } from './dashboard/RecentProjects';
import { AIInsightsCard } from './dashboard/AIInsightsCard';
import { DemoBanner } from './dashboard/DemoBanner';
import { FolderKanban, LayoutGrid, TrendingUp, Clock } from 'lucide-react';

const stats = [
  {
    title: 'Total Projects',
    value: '12',
    trend: '+12%',
    trendPositive: true,
    icon: FolderKanban,
    iconColor: '#3B82F6'
  },
  {
    title: 'Analyzed Canvases',
    value: '20',
    trend: '+5%',
    trendPositive: true,
    icon: LayoutGrid,
    iconColor: '#10B981'
  },
  {
    title: 'Avg. Validation Score',
    value: '90%',
    trend: '+3%',
    trendPositive: true,
    icon: TrendingUp,
    iconColor: '#8B5CF6'
  },
  {
    title: 'Avg. Processing Time',
    value: '12 Days',
    trend: '-2 days',
    trendPositive: true,
    icon: Clock,
    iconColor: '#F59E0B'
  }
];

interface DashboardPageProps {
  onNavigate?: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      {/* Sidebar */}
      <Sidebar onNavigate={onNavigate} currentPage="Dashboard" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <DashboardTopBar />

        {/* Dashboard Content */}
        <main className="flex-1 p-8">
          {/* Demo Banner */}
          <DemoBanner />

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <ActivityChart />
            <CanvasTypesChart />
          </div>

          {/* AI Insights */}
          <div className="mb-8">
            <AIInsightsCard />
          </div>

          {/* Queue and Recent Projects */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <SyncQueue />
            </div>
            <div className="lg:col-span-2">
              <RecentProjects />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}