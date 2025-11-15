'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for exploring ideas',
    features: [
      '1 project',
      'Basic AI insights',
      'All canvas templates',
      'Community support',
      'Export to PDF'
    ],
    cta: 'Get Started',
    highlighted: false
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'Best for growing startups',
    features: [
      'Unlimited projects',
      'Advanced AI analytics',
      'All canvas templates',
      'Priority support',
      'Export to PDF & CSV',
      'Team collaboration (up to 5)',
      'Custom integrations',
      'API access'
    ],
    cta: 'Start Free Trial',
    highlighted: true,
    badge: 'Most Popular'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For scaling organizations',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'Dedicated account manager',
      'Custom AI training',
      'Advanced security',
      'SLA guarantee',
      'White-label options',
      'Custom contracts'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

export function Pricing() {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#1F2937] mb-4" style={{ fontSize: '36px' }}>
            Simple Pricing for Every Stage
          </h2>
          <p className="text-[#6B7280]" style={{ fontSize: '18px' }}>
            Start free, scale as you grow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.highlighted 
                  ? 'border-2 border-[#3B82F6] shadow-2xl scale-105' 
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-[#3B82F6] text-white px-4 py-1 rounded-full" style={{ fontSize: '12px', fontWeight: 600 }}>
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-[#1F2937] mb-2" style={{ fontSize: '24px' }}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-[#1F2937]" style={{ fontSize: '48px', fontWeight: 700 }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-[#6B7280]" style={{ fontSize: '16px' }}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-[#6B7280]" style={{ fontSize: '14px' }}>
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#10B981]" />
                    </div>
                    <span className="text-[#1F2937]" style={{ fontSize: '14px' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full ${
                  plan.highlighted 
                    ? 'bg-[#3B82F6] hover:bg-[#2563EB] text-white' 
                    : 'bg-white border border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white'
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
