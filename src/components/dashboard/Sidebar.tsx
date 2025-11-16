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
  User,
  X
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
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ onNavigate, currentPage = 'Dashboard', isOpen = true, onClose }: SidebarProps) {
  const [activeItem, setActiveItem] = useState(currentPage);

  const handleNavigation = (label: string) => {
    setActiveItem(label);
    if (onNavigate) {
      onNavigate(label);
    }
    // Close sidebar on mobile after navigation
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 
        flex flex-col z-50 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Close button for mobile */}
        <div className="lg:hidden absolute top-4 right-4">
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-[#6B7280]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Section */}
        <div className="p-4 border-b border-gray-200">
          <button
            onClick={() => handleNavigation('Settings')}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-[#1F2937]" style={{ fontSize: '14px', fontWeight: 600 }}>
                Demo User
              </div>
              <div className="text-[#6B7280]" style={{ fontSize: '12px' }}>
                demo@canvasflow.ai
              </div>
            </div>
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
    </>
  );
}