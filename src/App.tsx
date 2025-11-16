'use client';

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Features } from './components/Features';
import { AIInsights } from './components/AIInsights';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { DashboardPage } from './components/DashboardPage';

export default function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <DashboardPage />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onGetStarted={() => setShowDashboard(true)} />
      <main>
        <Hero onGetStarted={() => setShowDashboard(true)} />
        <ValueProposition />
        <Features />
        <AIInsights />
        <Testimonials />
        <Pricing onGetStarted={() => setShowDashboard(true)} />
        <CTA onGetStarted={() => setShowDashboard(true)} />
      </main>
      <Footer />
    </div>
  );
}