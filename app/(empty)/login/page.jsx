'use client';

import React from 'react'
import { WelcomeUser } from './components/WelcomeUser';
import { Login } from './components/Login';

export default function LoginPage() {

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      <WelcomeUser />
      <Login />
    </div>
  );
}