'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const insights = [
  'Cross-canvas correlations',
  'Growth forecasts',
  'Risk alerts',
  'Automated pivot suggestions',
  'Competitive benchmarking'
];

export function AIInsights() {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#1F2937] mb-6" style={{ fontSize: '36px' }}>
              AI That Drives Real Growth
            </h2>
            <h3 className="text-[#1F2937] mb-4" style={{ fontSize: '24px' }}>
              Intelligent Correlations and Recommendations
            </h3>
            <p className="text-[#6B7280] mb-8" style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Our AI analyzes data across canvases to spot opportunities, predict outcomes, and suggest pivots.
            </p>
            
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <motion.div
                  key={insight}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#1F2937]" style={{ fontSize: '16px' }}>
                    {insight}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736545-5c33b6255dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzYzMTg3ODg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI dashboard with insights"
                className="w-full h-auto rounded-lg"
              />
              
              {/* Floating Insight Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-8 left-8 right-8 bg-white rounded-lg p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#6B7280] mb-1" style={{ fontSize: '12px', fontWeight: 600 }}>
                      LTV:CAC RATIO
                    </div>
                    <div className="text-[#1F2937]" style={{ fontSize: '20px', fontWeight: 700 }}>
                      Improving by 25%
                    </div>
                  </div>
                  <div className="text-[#10B981]" style={{ fontSize: '24px' }}>
                    ↑
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
