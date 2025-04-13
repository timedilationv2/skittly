import React from 'react';
import Issues from './Issues';

export default function App() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">🚀 Skittly Unified Platform</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Frontend */}
        <div className="bg-gray-50 rounded shadow p-6">
          <h2 className="text-xl font-semibold">🌐 Frontend (React)</h2>
          <a
            className="text-blue-500 underline"
            href="https://github.com/timedilationv2/skittly-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Skittly Frontend Repo
          </a>
        </div>

        {/* Backend / Hub */}
        <div className="bg-gray-50 rounded shadow p-6">
          <h2 className="text-xl font-semibold">⚙️ Backend & Hub</h2>
          <a
            className="text-blue-500 underline"
            href="https://github.com/timedilationv2/skittly-hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Skittly Backend Hub Repo
          </a>
        </div>

        {/* Packages */}
        <div className="bg-gray-50 rounded shadow p-6">
          <h2 className="text-xl font-semibold">📦 Packages</h2>
          <a
            className="text-blue-500 underline"
            href="https://github.com/timedilationv2?tab=packages"
            target="_blank"
            rel="noopener noreferrer"
          >
            Skittly Packages
          </a>
        </div>

        {/* Wiki */}
        <div className="bg-gray-50 rounded shadow p-6">
          <h2 className="text-xl font-semibold">📚 Wiki & Documentation</h2>
          <a
            className="text-blue-500 underline"
            href="https://github.com/timedilationv2/skittly/wiki"
            target="_blank"
            rel="noopener noreferrer"
          >
            Skittly Wiki
          </a>
        </div>

        {/* Badges & CI/CD */}
        <div className="bg-gray-50 rounded shadow p-6">
          <h2 className="text-xl font-semibold">🛠️ CI/CD & Status Badges</h2>
          <img src="https://github.com/timedilationv2/skittly/actions/workflows/ci.yml/badge.svg" alt="CI/CD status badge" />
        </div>

        {/* OpenAccess Branding */}
        <div className="bg-gray-50 rounded shadow p-6 flex items-center justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/149242430?s=200&v=4"
            alt="OpenAccess"
            className="h-20 w-20 rounded-full shadow"
          />
        </div>
      </div>

      {/* Dynamic Issues */}
      <Issues />
    </div>
  );
}

