'use client';

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-white mb-4" style={{ fontSize: '36px' }}>
            Ready to Accelerate Your Startup?
          </h2>
          <p className="text-blue-100 mb-8" style={{ fontSize: '18px' }}>
            Join 2,500+ founders building smarter businesses.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-[#3B82F6] hover:bg-gray-100 gap-2"
          >
            Sign Up Free Today
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
    </section>
  );
}
