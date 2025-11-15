'use client';

import { motion } from 'motion/react';
import { GitBranch, Zap, TrendingUp, Shield } from 'lucide-react';

const features = [
  {
    icon: GitBranch,
    title: 'Unified Canvases',
    description: 'Connect all your startup tools in one place with bidirectional data sync.',
    color: '#10B981'
  },
  {
    icon: Zap,
    title: 'AI-Powered Insights',
    description: 'Get intelligent recommendations and predictions across all your business models.',
    color: '#3B82F6'
  },
  {
    icon: TrendingUp,
    title: 'Growth Analytics',
    description: 'Track metrics, visualize trends, and forecast outcomes with advanced analytics.',
    color: '#8B5CF6'
  },
  {
    icon: Shield,
    title: 'Validated Decisions',
    description: 'Test assumptions systematically and make data-driven pivots with confidence.',
    color: '#10B981'
  }
];

export function ValueProposition() {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#1F2937] mb-4" style={{ fontSize: '36px' }}>
            Why CanvasFlow AI?
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto" style={{ fontSize: '18px' }}>
            Everything you need to build, validate, and scale your startup in one intelligent platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
              </div>
              <h3 className="text-[#1F2937] mb-3" style={{ fontSize: '24px' }}>
                {feature.title}
              </h3>
              <p className="text-[#6B7280]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
