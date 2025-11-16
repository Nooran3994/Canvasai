'use client';

import { Button } from '../ui/button';
import { Eye, TrendingUp } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'TechVenture MVP',
    date: 'Nov 14, 2025',
    completion: 92,
    type: 'Lean Canvas',
    status: 'active'
  },
  {
    id: 2,
    name: 'SaaS Growth Strategy',
    date: 'Nov 12, 2025',
    completion: 78,
    type: 'Business Model',
    status: 'active'
  },
  {
    id: 3,
    name: 'Market Validation Test',
    date: 'Nov 10, 2025',
    completion: 100,
    type: 'Validation Canvas',
    status: 'completed'
  },
];

export function RecentProjects() {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-[#1F2937] mb-1" style={{ fontSize: '20px', fontWeight: 600 }}>
            Recent Projects
          </h3>
          <p className="text-[#6B7280]" style={{ fontSize: '14px' }}>
            Your latest canvas work
          </p>
        </div>
        <Button variant="outline" size="sm" className="text-[#3B82F6] border-[#3B82F6]">
          View All
        </Button>
      </div>
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-[#3B82F6] hover:shadow-md transition-all"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-[#1F2937]" style={{ fontSize: '16px', fontWeight: 600 }}>
                  {project.name}
                </h4>
                <span className={`px-2 py-1 rounded text-white ${
                  project.status === 'completed' ? 'bg-[#10B981]' : 'bg-[#3B82F6]'
                }`} style={{ fontSize: '10px', fontWeight: 600 }}>
                  {project.status.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center gap-4 text-[#6B7280]" style={{ fontSize: '12px' }}>
                <span>{project.type}</span>
                <span>•</span>
                <span>{project.date}</span>
                <span>•</span>
                <span>{project.completion}% Complete</span>
              </div>
              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-gray-200 rounded-full mt-3 overflow-hidden">
                <div 
                  className="h-full bg-[#10B981] rounded-full transition-all"
                  style={{ width: `${project.completion}%` }}
                />
              </div>
            </div>
            <Button variant="ghost" size="sm" className="ml-4 text-[#3B82F6]">
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
