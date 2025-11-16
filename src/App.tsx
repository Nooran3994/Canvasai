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
import { ProfilePage } from './components/ProfilePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'dashboard' | 'profile'>('landing');

  const handleNavigate = (page: string) => {
    if (page === 'Settings') {
      setCurrentPage('profile');
    } else if (page === 'Dashboard') {
      setCurrentPage('dashboard');
    }
  };

  const handleGetStarted = () => {
    setCurrentPage('dashboard');
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
  };

  if (currentPage === 'profile') {
    return <ProfilePage onBack={handleBackToDashboard} onNavigate={handleNavigate} />;
  }

  if (currentPage === 'dashboard') {
    return <DashboardPage onNavigate={handleNavigate} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onGetStarted={handleGetStarted} />
      <main>
        <Hero onGetStarted={handleGetStarted} />
        <ValueProposition />
        <Features />
        <AIInsights />
        <Testimonials />
        <Pricing onGetStarted={handleGetStarted} />
        <CTA onGetStarted={handleGetStarted} />
      </main>
      <Footer />
    </div>
  );
}