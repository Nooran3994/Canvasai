'use client';

import { useState } from 'react';
import { Menu, X, Workflow } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';

export function Header({ onGetStarted, onNavigateToPricing }: { onGetStarted?: () => void; onNavigateToPricing?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ['Home', 'Features', 'Pricing', 'Blog', 'About'];

  const handleMenuClick = (item: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (item === 'Pricing' && onNavigateToPricing) {
      e.preventDefault();
      onNavigateToPricing();
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Workflow className="w-8 h-8 text-[#3B82F6]" />
            <span className="text-[#1F2937]" style={{ fontSize: '20px', fontWeight: 700 }}>
              CanvasFlow AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={
                  item === 'Features' ? '#why-canvasflow' : 
                  item === 'Pricing' ? '/pricing' : 
                  item === 'Blog' ? '#features' :
                  `#${item.toLowerCase()}`
                }
                className="text-[#6B7280] hover:text-[#3B82F6] transition-colors"
                style={{ fontSize: '16px' }}
                onClick={(e) => handleMenuClick(item, e)}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-[#3B82F6]">
              Login
            </Button>
            <Button 
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-[66px]"
              onClick={onGetStarted}
            >
              Sign Up Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#6B7280] hover:text-[#3B82F6]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={item === 'Features' ? '#why-canvasflow' : item === 'Pricing' ? '#pricing' : `#${item.toLowerCase()}`}
                  className="text-[#6B7280] hover:text-[#3B82F6] py-2"
                  onClick={(e) => handleMenuClick(item, e)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <Button variant="ghost" className="text-[#3B82F6] w-full">
                  Login
                </Button>
                <Button 
                  className="bg-[#3B82F6] hover:bg-[#2563EB] text-white w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onGetStarted?.();
                  }}
                >
                  Sign Up Free
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}