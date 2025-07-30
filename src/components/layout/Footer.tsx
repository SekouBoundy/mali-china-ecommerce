// src/components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export const ContactInfo: React.FC = () => (
  <div className="space-y-4">
    <h3 className="font-semibold text-gray-900">Contact</h3>
    <div className="space-y-2 text-sm">
      <div className="flex items-center space-x-2">
        <Phone className="w-4 h-4 text-gray-400" />
        <span>+223 XX XX XX XX</span>
      </div>
      <div className="flex items-center space-x-2">
        <Mail className="w-4 h-4 text-gray-400" />
        <span>contact@malichinashop.ml</span>
      </div>
      <div className="flex items-center space-x-2">
        <MapPin className="w-4 h-4 text-gray-400" />
        <span>Bamako, Mali</span>
      </div>
    </div>
  </div>
);

export const Links: React.FC = () => (
  <div className="grid grid-cols-2 gap-8">
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="/products" className="text-gray-600 hover:text-blue-600">Produits</Link></li>
        <li><Link href="/categories/phones" className="text-gray-600 hover:text-blue-600">Téléphones</Link></li>
        <li><Link href="/categories/accessories" className="text-gray-600 hover:text-blue-600">Accessoires</Link></li>
        <li><Link href="/about" className="text-gray-600 hover:text-blue-600">À propos</Link></li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="/shipping" className="text-gray-600 hover:text-blue-600">Livraison</Link></li>
        <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
        <li><Link href="/privacy" className="text-gray-600 hover:text-blue-600">Confidentialité</Link></li>
      </ul>
    </div>
  </div>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-xl font-bold text-blue-400 mb-4">MaliChina Store</h2>
            <p className="text-gray-400 text-sm mb-4">
              Votre plateforme de confiance pour des produits de qualité de Chine, 
              livrés directement au Mali.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          {/* Links */}
          <Links />
          
          {/* Contact Info */}
          <ContactInfo />
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 MaliChina Store. Tous droits réservés.
          </p>
          <p className="text-gray-400 text-sm">
            Livraison de Chine au Mali • 7-14 jours
          </p>
        </div>
      </div>
    </footer>
  );
};
