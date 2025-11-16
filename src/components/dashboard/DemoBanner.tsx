'use client';

import { Button } from '../ui/button';
import { AlertCircle, X } from 'lucide-react';
import { useState } from 'react';

export function DemoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-gradient-to-r from-[#3B82F6]/10 to-[#8B5CF6]/10 border border-[#3B82F6]/30 rounded-xl p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-[#3B82F6] flex items-center justify-center">
            <AlertCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-[#1F2937] mb-1" style={{ fontSize: '16px', fontWeight: 600 }}>
              You're viewing demo data
            </div>
            <p className="text-[#6B7280]" style={{ fontSize: '14px' }}>
              Want real AI analysis? Set up the backend to sync your actual canvas data.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white">
            Set Up Backend
          </Button>
          <button
            onClick={() => setVisible(false)}
            className="w-8 h-8 rounded-lg hover:bg-gray-200 flex items-center justify-center text-[#6B7280]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
