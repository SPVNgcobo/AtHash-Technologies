// pages/index.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      {/* Hero Section */}
      <section className="container mx-auto py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">AtHash Technologies</h1>
            <p className="text-lg text-gray-300 mt-4 max-w-md">Attach systems, Automate workflows, and Advance compliance. POPIA-ready automation for Subject Access Requests and enterprise workflow.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/contact" className="px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1" role="button">Request a Demo</a>
              <a href="/solutions" className="px-6 py-3 rounded-md border border-gray-600 hover:bg-gray-800 transition-colors" role="button">View Solutions</a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                <div className="font-semibold text-white">POPIA SAR</div>
                <div className="text-xs text-gray-400 mt-1">Automate Subject Access Requests in <strong>&lt;60s</strong>.</div>
              </div>
              <div className="p-4 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                <div className="font-semibold text-white">Secure Connectors</div>
                <div className="text-xs text-gray-400 mt-1">Zero-config connectors with enterprise auth.</div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-xl p-8 bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl border border-gray-700">
              <div className="w-full h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-6 py-3 rounded-lg font-bold text-lg">AtHash</div>
                  <div className="mt-4 text-sm text-gray-400">POPIA & SOC 2 focused automation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="container mx-auto py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-white mb-8">How We Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-all">
            <div className="font-semibold text-white">Attach</div>
            <div className="mt-2 text-gray-400">Connect with ERPs, CRMs, databases & cloud apps using secure, auditable connectors.</div>
          </div>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-all">
            <div className="font-semibold text-white">Automate</div>
            <div className="mt-2 text-gray-400">Visual workflow engine featuring audit trails and role-based approvals.</div>
          </div>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-all">
            <div className="font-semibold text-white">Advance</div>
            <div className="mt-2 text-gray-400">Reduce compliance cost and time-to-fulfilment with automation and AI-ready tooling.</div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="container mx-auto py-16 px-6 md:px-12 border-t border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white">Trusted by Security-First Teams</h3>
            <p className="mt-4 text-gray-400">We focus on controls-first engineering and auditable systems designed for regulated industries in South Africa.</p>
          </div>
          <div>
            <div className="p-6 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm">
              <div className="font-semibold text-white">Ready for Pilots</div>
              <div className="mt-2 text-gray-400">Book a pilot and get a compliance assessment aligned to POPIA requirements.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-700 text-gray-500">
        <p>© {new Date().getFullYear()} AtHash Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
