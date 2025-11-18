'use client';

import { Brain, TrendingUp, AlertCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const insights = [
  {
    icon: TrendingUp,
    title: 'Growth Opportunity Detected',
    description: 'Your LTV:CAC ratio improved by 25% this month. Consider scaling acquisition.',
    type: 'success'
  },
  {
    icon: Sparkles,
    title: 'AI Recommendation',
    description: 'Based on validation data, pivot to B2B segment shows 40% higher conversion.',
    type: 'info'
  },
  {
    icon: AlertCircle,
    title: 'Risk Alert',
    description: 'Unit economics show burn rate increasing. Review cost structure in next sprint.',
    type: 'warning'
  }
];

export function AIInsightsCard() {
  return (
    <div className="bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
          <Brain className="w-6 h-6" />
        </div>
        <div>
          <h3 style={{ fontSize: '20px', fontWeight: 600 }}>
            AI Insights & Recommendations
          </h3>
          <p className="text-purple-100" style={{ fontSize: '14px' }}>
            Real-time intelligence across your canvases
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <insight.icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="mb-1" style={{ fontSize: '14px', fontWeight: 600 }}>
                  {insight.title}
                </div>
                <p className="text-purple-100" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                  {insight.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
