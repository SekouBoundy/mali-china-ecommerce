// src/components/layout/Footer.tsx
import React from 'react';
import { Phone, Mail, MapPin, Truck, Shield, Clock, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust Banner */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4" />
              <span>Livraison 7-14 jours</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Produits garantis</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Mali<span className="text-red-500">China</span> Store
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Votre plateforme de confiance pour des produits de qualité de Chine, 
              livrés directement au Mali.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="/produits" className="text-gray-300 hover:text-white transition-colors">Produits</a></li>
              <li><a href="/telephones" className="text-gray-300 hover:text-white transition-colors">Téléphones</a></li>
              <li><a href="/accessoires" className="text-gray-300 hover:text-white transition-colors">Accessoires</a></li>
              <li><a href="/a-propos" className="text-gray-300 hover:text-white transition-colors">À propos</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-2">
              <li><a href="/livraison" className="text-gray-300 hover:text-white transition-colors">Livraison</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/confidentialite" className="text-gray-300 hover:text-white transition-colors">Confidentialité</a></li>
              <li><a href="/retours" className="text-gray-300 hover:text-white transition-colors">Retours</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-green-500" />
                <span className="text-gray-300">+223 XX XX XX XX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="text-gray-300">contact@malichinashop.ml</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-red-500" />
                <span className="text-gray-300">Bamako, Mali</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 MaliChina Store. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Paiement sécurisé</span>
              <div className="flex gap-2">
                <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs">Orange Money</div>
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs">Moov Money</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};