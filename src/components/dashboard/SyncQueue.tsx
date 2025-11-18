'use client';

import { Loader2 } from 'lucide-react';

export function SyncQueue() {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="mb-6">
        <h3 className="text-[#1F2937] mb-1" style={{ fontSize: '20px', fontWeight: 600 }}>
          Active Sync Queue
        </h3>
        <p className="text-[#6B7280]" style={{ fontSize: '14px' }}>
          Real-time canvas data synchronization
        </p>
      </div>
      <div className="flex flex-col items-center justify-center py-8">
        <div className="w-16 h-16 rounded-full bg-[#10B981]/10 flex items-center justify-center mb-4">
          <Loader2 className="w-8 h-8 text-[#10B981] animate-spin" />
        </div>
        <div className="text-[#1F2937] mb-1" style={{ fontSize: '24px', fontWeight: 700 }}>
          0 Active
        </div>
        <p className="text-[#6B7280] text-center" style={{ fontSize: '14px' }}>
          All canvases are synchronized
        </p>
      </div>
    </div>
  );
}
