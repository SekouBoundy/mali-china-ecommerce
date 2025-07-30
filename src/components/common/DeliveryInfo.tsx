// src/components/common/DeliveryInfo.tsx
import React from 'react';
import { Truck, MapPin, Clock } from 'lucide-react';

interface DeliveryInfoProps {
  deliveryTime: string;
  source?: string;
  destination?: string;
  className?: string;
}

export const DeliveryInfo: React.FC<DeliveryInfoProps> = ({
  deliveryTime,
  source = 'Chine',
  destination = 'Mali',
  className = ''
}) => {
  return (
    <div className={space-y-2 }>
      <div className="flex items-center text-sm text-gray-600">
        <Truck className="w-4 h-4 mr-2" />
        <span>Livraison estimée: {deliveryTime}</span>
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <MapPin className="w-4 h-4 mr-2" />
        <span>Expédié de {source} vers {destination}</span>
      </div>
      <div className="flex items-center text-xs text-gray-500">
        <Clock className="w-3 h-3 mr-2" />
        <span>Commande traitée sous 24h</span>
      </div>
    </div>
  );
};
