'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data = [
  { month: 'Jan', projects: 12 },
  { month: 'Feb', projects: 19 },
  { month: 'Mar', projects: 15 },
  { month: 'Apr', projects: 25 },
  { month: 'May', projects: 32 },
  { month: 'Jun', projects: 38 },
];

export function ActivityChart() {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="mb-6">
        <h3 className="text-[#1F2937] mb-1" style={{ fontSize: '20px', fontWeight: 600 }}>
          Monthly Project Activity
        </h3>
        <p className="text-[#6B7280]" style={{ fontSize: '14px' }}>
          Track your startup projects over time
        </p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorProjects" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis 
            dataKey="month" 
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              fontSize: '12px'
            }}
          />
          <Area
            type="monotone"
            dataKey="projects"
            stroke="#3B82F6"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorProjects)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
