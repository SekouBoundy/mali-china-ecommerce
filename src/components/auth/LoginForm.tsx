// src/components/auth/LoginForm.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void;
  loading?: boolean;
  error?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  loading = false,
  error
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email, password);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Connexion</h1>
        <p className="text-gray-600 mt-2">
          Connectez-vous à votre compte MaliChina Store
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Adresse email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          required
        />

        <div className="relative">
          <Input
            label="Mot de passe"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Votre mot de passe"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-8 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
            <span className="ml-2 text-sm text-gray-600">Se souvenir de moi</span>
          </label>
          <Link 
            href="/auth/forgot-password"
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            Mot de passe oublié?
          </Link>
        </div>

        <Button 
          type="submit" 
          className="w-full"
          isLoading={loading}
          disabled={!email || !password}
        >
          Se connecter
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Pas encore de compte?{' '}
          <Link 
            href="/auth/register"
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Créer un compte
          </Link>
        </p>
      </div>
    </Card>
  );
};
