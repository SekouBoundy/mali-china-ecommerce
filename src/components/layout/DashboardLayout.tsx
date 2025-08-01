// src/components/layout/DashboardLayout.tsx - REPLACE with this simplified version
import React, { useState } from 'react';
import { HorizontalHeader } from './HorizontalHeader';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  breadcrumb?: string[];
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  title = "Accueil", 
  breadcrumb = [] 
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Horizontal Header */}
      <HorizontalHeader />
      
      {/* Main Content - Full Width */}
      <main className="w-full">
        {children}
      </main>
    </div>
  );
};