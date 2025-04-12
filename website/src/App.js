import React from 'react';
import Issues from './Issues';

export default function App() {
  return (
    <div className="container mx-auto text-center py-10">
      <h1 className="text-4xl font-bold mb-6">Skittly Unified Platform</h1>
      <p className="text-gray-700 text-lg mb-4">
        Welcome to your unified Skittly landing page! Add or tweak components as needed.
      </p>
      <Issues />
    </div>
  );
}

