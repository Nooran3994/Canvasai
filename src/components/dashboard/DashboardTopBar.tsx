'use client';

import { Button } from '../ui/button';
import { Database, User } from 'lucide-react';

export function DashboardTopBar() {
  const currentTime = new Date().toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="bg-white border-b border-gray-200 px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#1F2937] mb-2" style={{ fontSize: '36px', fontWeight: 700 }}>
            Startup Growth Dashboard
          </h1>
          <p className="text-[#6B7280]" style={{ fontSize: '16px' }}>
            AI-powered insights for your canvases and projects
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="gap-2 border-[#3B82F6] text-[#3B82F6]">
            <Database className="w-4 h-4" />
            Connect External Data
          </Button>
          <div className="flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-lg">
            <User className="w-5 h-5 text-[#6B7280]" />
            <div className="text-right">
              <div className="text-[#1F2937]" style={{ fontSize: '12px', fontWeight: 600 }}>
                Demo User
              </div>
              <div className="text-[#6B7280]" style={{ fontSize: '10px' }}>
                {currentTime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
