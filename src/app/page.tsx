// UPDATE src/app/page.tsx - Replace the top part with this:
'use client';
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { CategoriesShowcase } from '../components/sections/CategoriesShowcase';
import { ValuePropositions } from '../components/sections/ValuePropositions';
import { NewsletterSignup } from '../components/sections/NewsletterSignup';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';


export default function HomePage() {
  return (
    <DashboardLayout title="Accueil" breadcrumb={[]}>
      {/* Add the new HeroSection FIRST */}
      <HeroSection />
      
      {/* Your existing components below */}
      <FeaturedProducts />
      <CategoriesShowcase />
      <ValuePropositions />
      {/* <NewsletterSignup /> */}
      <Footer />
    </DashboardLayout>
  );
}