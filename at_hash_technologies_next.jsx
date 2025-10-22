// pages/index.tsx
import React from 'react';

/**
 * AtHash Technologies - Home Page (robust logo handling)
 *
 * Problem addressed:
 * - Earlier builds failed when the logo file was missing from `/public` and
 *   Next's Image component or a static import caused a build/runtime error.
 *
 * Fix implemented here:
 * - Use a plain `<img>` tag that points to a root-relative public path (`/logo-option1.png`).
 * - Provide an inline SVG data-URI as an immediate client-side fallback when the
 *   requested image cannot be loaded (missing file or 404). This prevents the
 *   app from throwing and ensures the site still displays a branded fallback.
 * - Avoids server-only imports and Next.js image optimization pitfalls during
 *   early development. You can swap back to `next/image` later once the asset
 *   is present and you're comfortable with Next's optimizer.
 *
 * Action for you:
 * - Place your chosen logo file in the project's `public/` folder and name it
 *   `logo-option1.png` (or change the `logoPath` constant below to match).
 */

const logoPath = '/logo-option1.png'; // update if your file has a different name

const fallbackSvg = encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'>
    <rect width='100%' height='100%' rx='20' fill='#1A428A' />
    <g fill='white' font-family='Inter, Arial, sans-serif' font-weight='700' font-size='28'>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'>AtHash</text>
    </g>
  </svg>
`);

const fallbackDataUri = `data:image/svg+xml;charset=UTF-8,${fallbackSvg}`;

const Home: React.FC = () => {
  // imgOnError: sets the fallback data-uri when the image fails to load
  function imgOnError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    const img = e.currentTarget;
    if (img.src !== fallbackDataUri) {
      img.onerror = null; // prevent infinite loop
      img.src = fallbackDataUri;
      img.alt = 'AtHash Technologies (fallback logo)';
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-blue-50 text-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              {/* Use plain <img> with a client-side onError fallback to avoid build-time failures */}
              <img
                src={logoPath}
                onError={imgOnError}
                alt="AtHash Technologies Logo"
                width={64}
                height={64}
                style={{ borderRadius: 12 }}
                className="shadow-md"
              />

              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-blue-900">AtHash Technologies</h1>
            </div>

            <p className="text-lg text-gray-700 mt-4 max-w-md">Attach systems, Automate workflows, and Advance compliance. POPIA-ready automation for Subject Access Requests and enterprise workflow.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/contact" className="px-6 py-3 rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1" role="button">Request a Demo</a>
              <a href="/solutions" className="px-6 py-3 rounded-md border border-blue-200 hover:bg-blue-100 transition-colors text-blue-800 font-medium" role="button">View Solutions</a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 border border-blue-100 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
                <div className="font-semibold text-blue-900">POPIA SAR</div>
                <div className="text-xs text-gray-600 mt-1">Automate Subject Access Requests in <strong>&lt;60s</strong>.</div>
              </div>
              <div className="p-4 border border-blue-100 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
                <div className="font-semibold text-blue-900">Secure Connectors</div>
                <div className="text-xs text-gray-600 mt-1">Zero-config connectors with enterprise auth.</div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-xl p-8 bg-gradient-to-br from-blue-50 to-white shadow-lg border border-blue-100">
              <div className="w-full h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-6 py-3 rounded-lg font-bold text-lg shadow">AtHash</div>
                  <div className="mt-4 text-sm text-gray-500">POPIA & SOC 2 focused automation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="container mx-auto py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">How We Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-blue-100 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
            <div className="font-semibold text-blue-900">Attach</div>
            <div className="mt-2 text-gray-600">Connect with ERPs, CRMs, databases & cloud apps using secure, auditable connectors.</div>
          </div>
          <div className="p-6 border border-blue-100 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
            <div className="font-semibold text-blue-900">Automate</div>
            <div className="mt-2 text-gray-600">Visual workflow engine featuring audit trails and role-based approvals.</div>
          </div>
          <div className="p-6 border border-blue-100 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
            <div className="font-semibold text-blue-900">Advance</div>
            <div className="mt-2 text-gray-600">Reduce compliance cost and time-to-fulfilment with automation and AI-ready tooling.</div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="container mx-auto py-16 px-6 md:px-12 border-t border-blue-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-blue-900">Trusted by Security-First Teams</h3>
            <p className="mt-4 text-gray-600">We focus on controls-first engineering and auditable systems designed for regulated industries in South Africa.</p>
          </div>
          <div>
            <div className="p-6 border border-blue-100 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
              <div className="font-semibold text-blue-900">Ready for Pilots</div>
              <div className="mt-2 text-gray-600">Book a pilot and get a compliance assessment aligned to POPIA requirements.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-blue-100 text-gray-600 bg-white/80 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} AtHash Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
