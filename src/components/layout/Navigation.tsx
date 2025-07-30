// src/components/layout/Navigation.tsx
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/products', label: 'Produits' },
  { href: '/categories/phones', label: 'Téléphones' },
  { href: '/categories/accessories', label: 'Accessoires' },
  { href: '/categories/electronics', label: 'Électronique' },
  { href: '/about', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={clsx(
            'text-sm font-medium transition-colors hover:text-blue-600',
            pathname === item.href ? 'text-blue-600' : 'text-gray-700'
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
