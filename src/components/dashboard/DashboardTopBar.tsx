'use client';

import { Button } from '../ui/button';
import { Database, User, Menu } from 'lucide-react';

interface DashboardTopBarProps {
  onMenuClick?: () => void;
}

export function DashboardTopBar({ onMenuClick }: DashboardTopBarProps) {
  const currentTime = new Date().toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="bg-white border-b border-gray-200 px-4 sm:px-8 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden w-10 h-10 rounded-lg hover:bg-gray-100 flex items-center justify-center text-[#6B7280]"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-[#1F2937] mb-2" style={{ fontSize: '28px sm:36px', fontWeight: 700 }}>
              Startup Growth Dashboard
            </h1>
            <p className="text-[#6B7280]" style={{ fontSize: '14px sm:16px' }}>
              AI-powered insights for your canvases and projects
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
        </div>
      </div>
    </div>
  );
}