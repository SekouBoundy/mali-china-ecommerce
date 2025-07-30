// src/components/cart/CartSummary.tsx
import React from 'react';
import Link from 'next/link';
import { Shield, Truck } from 'lucide-react';
import { PriceFormatter } from '../common/PriceFormatter';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface CartSummaryProps {
  subtotal: number;
  itemCount: number;
  onCheckout?: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  itemCount,
  onCheckout
}) => {
  return (
    <Card className="h-fit">
      <h3 className="font-semibold text-gray-900 mb-4">
        Résumé de la commande
      </h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Sous-total ({itemCount} article{itemCount > 1 ? 's' : ''})</span>
          <PriceFormatter price={subtotal} />
        </div>
        <div className="flex justify-between">
          <span>Livraison</span>
          <span className="text-green-600 font-medium">Calculée au checkout</span>
        </div>
        <div className="border-t pt-2 flex justify-between font-bold text-lg">
          <span>Total</span>
          <PriceFormatter price={subtotal} />
        </div>
      </div>

      <Link href="/checkout" className="block w-full mb-4">
        <Button className="w-full" size="lg">
          Procéder au paiement
        </Button>
      </Link>

      <div className="space-y-3 text-sm text-gray-500">
        <div className="flex items-center">
          <Shield className="w-4 h-4 mr-2 text-green-500" />
          Paiement 100% sécurisé
        </div>
        <div className="flex items-center">
          <Truck className="w-4 h-4 mr-2 text-blue-500" />
          Livraison suivie depuis la Chine
        </div>
        <p className="text-xs">
          * Les frais de livraison seront calculés en fonction de votre localisation au Mali
        </p>
      </div>
    </Card>
  );
};
