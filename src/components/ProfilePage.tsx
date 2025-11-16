'use client';

import { Sidebar } from './dashboard/Sidebar';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { User, Mail, Building2, MapPin, Globe, Save, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProfilePageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export function ProfilePage({ onBack, onNavigate }: ProfilePageProps) {
  const [formData, setFormData] = useState({
    fullName: 'Demo User',
    email: 'demo@canvasflow.ai',
    company: 'My Startup',
    role: 'Founder & CEO',
    location: 'San Francisco, CA',
    website: 'https://mystartup.com',
    bio: 'Building the next big thing with CanvasFlow AI. Passionate about creating scalable businesses and validating ideas quickly.'
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // In a real app, this would save to backend
    alert('Profile updated successfully!');
  };

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      {/* Sidebar */}
      <Sidebar onNavigate={onNavigate} currentPage="Settings" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="w-10 h-10 rounded-lg hover:bg-gray-100 flex items-center justify-center text-[#6B7280]"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-[#1F2937] mb-1" style={{ fontSize: '36px', fontWeight: 700 }}>
                Profile Settings
              </h1>
              <p className="text-[#6B7280]" style={{ fontSize: '16px' }}>
                Manage your account and startup information
              </p>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            {/* Profile Header Card */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm mb-6">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#3B82F6] text-white flex items-center justify-center hover:bg-[#2563EB] transition-colors">
                    <span style={{ fontSize: '16px' }}>+</span>
                  </button>
                </div>
                <div className="flex-1">
                  <h2 className="text-[#1F2937] mb-2" style={{ fontSize: '24px', fontWeight: 600 }}>
                    {formData.fullName}
                  </h2>
                  <p className="text-[#6B7280] mb-4" style={{ fontSize: '14px' }}>
                    {formData.email}
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#3B82F6]/10 text-[#3B82F6]" style={{ fontSize: '12px', fontWeight: 500 }}>
                      Pro Plan
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981]" style={{ fontSize: '12px', fontWeight: 500 }}>
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Form */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-[#1F2937] mb-6" style={{ fontSize: '20px', fontWeight: 600 }}>
                Personal Information
              </h3>

              <div className="space-y-6">
                {/* Full Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="text-[#1F2937] mb-2 block" style={{ fontSize: '14px', fontWeight: 500 }}>
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[#1F2937] mb-2 block" style={{ fontSize: '14px', fontWeight: 500 }}>
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Company & Role */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company" className="text-[#1F2937] mb-2 block" style={{ fontSize: '14px', fontWeight: 500 }}>
                      Company / Startup Name
                    </Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="role" className="text-[#1F2937] mb-2 block" style={{ fontSize: '14px', fontWeight: 500 }}>
                      Role / Title
                    </Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => handleChange('role', e.target.value)}
                    />
                  </div>
                </div>

                {/* Location & Website */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="location" className="text-[#1F2937] mb-2 block" style={{ fontSize: '14px', fontWeight: 500 }}>
                      Location
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleChange('location', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="website" className="text-[#1F2937] mb-2 block" style={{ fontSize: '14px', fontWeight: 500 }}>
                      Website
                    </Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                      <Input
                        id="website"
                        type="url"
                        value={formData.website}
                        onChange={(e) => handleChange('website', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <Label htmlFor="bio" className="text-[#1F2937] mb-2 block" style={{ fontSize: '14px', fontWeight: 500 }}>
                    Bio
                  </Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => handleChange('bio', e.target.value)}
                    rows={4}
                    className="resize-none"
                    placeholder="Tell us about yourself and your startup journey..."
                  />
                  <p className="text-[#9CA3AF] mt-2" style={{ fontSize: '12px' }}>
                    {formData.bio.length} / 500 characters
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <Button
                    variant="outline"
                    onClick={onBack}
                    className="text-[#6B7280]"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    className="bg-[#3B82F6] hover:bg-[#2563EB] text-white gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>

            {/* Account Settings */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm mt-6">
              <h3 className="text-[#1F2937] mb-6" style={{ fontSize: '20px', fontWeight: 600 }}>
                Account Settings
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <div>
                    <div className="text-[#1F2937] mb-1" style={{ fontSize: '14px', fontWeight: 500 }}>
                      Change Password
                    </div>
                    <p className="text-[#6B7280]" style={{ fontSize: '12px' }}>
                      Update your password to keep your account secure
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Update
                  </Button>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <div>
                    <div className="text-[#1F2937] mb-1" style={{ fontSize: '14px', fontWeight: 500 }}>
                      Two-Factor Authentication
                    </div>
                    <p className="text-[#6B7280]" style={{ fontSize: '12px' }}>
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Enable
                  </Button>
                </div>
                <div className="flex items-center justify-between py-4">
                  <div>
                    <div className="text-[#1F2937] mb-1" style={{ fontSize: '14px', fontWeight: 500 }}>
                      Delete Account
                    </div>
                    <p className="text-[#6B7280]" style={{ fontSize: '12px' }}>
                      Permanently delete your account and all data
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
