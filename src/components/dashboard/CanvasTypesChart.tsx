'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Lean Canvas', value: 8, color: '#3B82F6' },
  { name: 'Business Model', value: 5, color: '#10B981' },
  { name: 'Validation', value: 4, color: '#8B5CF6' },
  { name: 'OKR Framework', value: 3, color: '#F59E0B' },
];

export function CanvasTypesChart() {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="mb-6">
        <h3 className="text-[#1F2937] mb-1" style={{ fontSize: '20px', fontWeight: 600 }}>
          Top Canvas Types Used
        </h3>
        <p className="text-[#6B7280]" style={{ fontSize: '14px' }}>
          Distribution of your canvas templates
        </p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              fontSize: '12px'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-[#6B7280]" style={{ fontSize: '12px' }}>
              {item.name}: {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
