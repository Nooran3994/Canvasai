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
  Workflow,
  User
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

interface SidebarProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export function Sidebar({ onNavigate, currentPage = 'Dashboard' }: SidebarProps) {
  const [activeItem, setActiveItem] = useState(currentPage);

  const handleNavigation = (label: string) => {
    setActiveItem(label);
    if (onNavigate) {
      onNavigate(label);
    }
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <button 
          onClick={() => handleNavigation('Settings')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity w-full"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <span className="text-[#1F2937]" style={{ fontSize: '18px', fontWeight: 700 }}>
            CanvasFlow AI
          </span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavigation(item.label)}
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