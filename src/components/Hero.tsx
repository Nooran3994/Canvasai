'use client';

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from 'figma:asset/79098a4dadb59ee957bd90976b8af1653bb51722.png';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-white mb-6" style={{ fontSize: '48px', lineHeight: '1.1' }}>
              From Idea to Scale with AI-Powered Precision
            </h1>
            <p className="text-blue-100 mb-8" style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Unify your Lean Canvas, Business Model, Validation, OKRs, and Unit Economics in one intelligent platform. 
              Get seamless data flow and growth insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-[#3B82F6] hover:bg-gray-100 gap-2"
              >
                Start Building Your Startup
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 gap-2"
              >
                <Play className="w-5 h-5" />
                Watch 2-Min Demo 🎬
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={heroImage}
                alt="AI-powered canvas integration visualization"
                className="w-full h-auto"
              />
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
              >
                <div className="text-[#10B981]" style={{ fontSize: '14px', fontWeight: 600 }}>
                  AI Insights
                </div>
                <div className="text-[#1F2937]" style={{ fontSize: '12px' }}>
                  +25% Growth
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
    </section>
  );
}