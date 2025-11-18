'use client';

import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface StatsCardProps {
  title: string;
  value: string | number;
  trend: string;
  trendPositive: boolean;
  icon: LucideIcon;
  iconColor: string;
}

export function StatsCard({ title, value, trend, trendPositive, icon: Icon, iconColor }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${iconColor}15` }}
        >
          <Icon className="w-6 h-6" style={{ color: iconColor }} />
        </div>
        <div className={`px-2 py-1 rounded text-white ${trendPositive ? 'bg-[#10B981]' : 'bg-[#F59E0B]'}`}>
          <span style={{ fontSize: '12px', fontWeight: 600 }}>
            {trend}
          </span>
        </div>
      </div>
      <div className="text-[#6B7280] mb-1" style={{ fontSize: '12px', fontWeight: 500 }}>
        {title}
      </div>
      <div className="text-[#1F2937]" style={{ fontSize: '32px', fontWeight: 700 }}>
        {value}
      </div>
    </motion.div>
  );
}
