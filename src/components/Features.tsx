'use client';

import { motion } from 'motion/react';
import { LayoutGrid, CheckSquare, Briefcase, Target, DollarSign, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const canvasFeatures = [
  {
    icon: LayoutGrid,
    title: 'Lean Canvas',
    description: 'Map problem-solution fit with AI suggestions.',
    color: '#3B82F6',
    image: 'https://i.imgur.com/kz47zaJ.png'
  },
  {
    icon: CheckSquare,
    title: 'Validation Canvas',
    description: 'Test assumptions and analyze results intelligently.',
    color: '#10B981',
    image: 'https://i.imgur.com/YoLj13I.png'
  },
  {
    icon: Briefcase,
    title: 'Business Model Canvas',
    description: 'Design scalable strategies with revenue simulations.',
    color: '#8B5CF6',
    image: 'https://i.imgur.com/dl9bRi7.png'
  },
  {
    icon: Target,
    title: 'OKR Framework',
    description: 'Set goals and track progress with predictive insights.',
    color: '#3B82F6',
    image: 'https://i.imgur.com/Owuj3Z8.png'
  },
  {
    icon: DollarSign,
    title: 'Unit Economics Dashboard',
    description: 'Monitor financial health with forecasts and benchmarks.',
    color: '#10B981',
    image: 'https://i.imgur.com/cdEDktE.png'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#1F2937] mb-4" style={{ fontSize: '36px' }}>
            Powerful Tools for Every Stage of Your Startup
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto" style={{ fontSize: '18px' }}>
            From ideation to scale, our integrated canvases guide your journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {canvasFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Mockup Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <div className="absolute inset-0 opacity-50">
                  <ImageWithFallback
                    src={feature.image}
                    alt={`${feature.title} interface`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="absolute top-4 left-4 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: feature.color }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[#1F2937] mb-2" style={{ fontSize: '20px' }}>
                  {feature.title}
                </h3>
                <p className="text-[#6B7280] mb-4" style={{ fontSize: '16px' }}>
                  {feature.description}
                </p>
                <a 
                  href="#"
                  className="inline-flex items-center gap-2 text-[#3B82F6] hover:gap-3 transition-all"
                  style={{ fontSize: '14px', fontWeight: 600 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}