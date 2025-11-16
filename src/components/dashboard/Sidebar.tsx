'use client';

import { 
  LayoutDashboard, 
  FolderKanban, 
  LayoutGrid, 
  Brain, 
  FlaskConical, 
  BarChart3, 
  Settings,
  PlayCircle,
  Workflow
} from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: FolderKanban, label: 'Projects', active: false },
  { icon: LayoutGrid, label: 'Canvases', active: false },
  { icon: Brain, label: 'AI Insights', active: false },
  { icon: FlaskConical, label: 'Experiments', active: false },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Workflow className="w-8 h-8 text-[#3B82F6]" />
          <span className="text-[#1F2937]" style={{ fontSize: '18px', fontWeight: 700 }}>
            CanvasFlow AI
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              activeItem === item.label
                ? 'bg-[#3B82F6] text-white'
                : 'text-[#6B7280] hover:bg-gray-100'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span style={{ fontSize: '14px', fontWeight: 500 }}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Demo Mode */}
      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6] hover:bg-[#8B5CF6]/20 transition-all">
          <PlayCircle className="w-5 h-5" />
          <span style={{ fontSize: '14px', fontWeight: 500 }}>
            Demo Mode
          </span>
        </button>
      </div>
    </aside>
  );
}
