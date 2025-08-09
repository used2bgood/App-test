// src/pages/Layout.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";

export default function Layout({ children, currentPageName, embed: embedProp }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect embed via prop, URL, or being inside an iframe
  const isEmbed =
    !!embedProp ||
    location.pathname.startsWith("/embed") ||
    (typeof window !== "undefined" && window.self !== window.top);

  const logoUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8ca7dc197_apprasure-transparent1.png";

  const partnerLogos = [
    { src: "https://apprasure.com/wp-content/uploads/2024/05/InterNACHI-CPI-Certified-Professional-Inspector-logo.png", alt: "InterNACHI Certified Professional Inspector" },
    { src: "https://apprasure.com/wp-content/uploads/2024/05/HAAG-certified-logo-1.png", alt: "HAAG Certified Inspector" },
    { src: "https://apprasure.com/wp-content/uploads/2024/05/IICRC-logo.png", alt: "IICRC Certified" },
    { src: "https://apprasure.com/wp-content/uploads/2024/05/PSA-logo-1.png", alt: "PSA Certified" },
    { src: "https://apprasure.com/wp-content/uploads/2024/05/R_I_logo-1.png", alt: "R&I Certified" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* inline style kept from your original */}
      <style>{`/* (unchanged CSS from your post) */`}</style>

      {/* Hide header/nav when embedded */}
      {!isEmbed && (
        <>
          <header className="app-header">
            <Link to={createPageUrl("Onboarding")}>
              <img src={logoUrl} alt="AppraSure"/>
            </Link>
          </header>

          <nav className="app-nav hidden md:block">
            <Link to={createPageUrl("Onboarding")}>Get Started</Link>
            <Link to={createPageUrl("Dashboard")}>Dashboard</Link>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden fixed top-5 right-5 z-[1001] p-2 bg-black/50 rounded-md text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {mobileMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-black/80 z-[1000] flex flex-col items-center justify-center space-y-6">
              <Link to={createPageUrl("Onboarding")} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white">Get Started</Link>
              <Link to={createPageUrl("Dashboard")} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white">Dashboard</Link>
            </div>
          )}
        </>
      )}

      <main className="flex-grow">
        <section style={{
          padding: '2rem 1rem',
          maxWidth: '950px',
          margin: isEmbed ? '0 auto' : '2rem auto',
          background: 'rgba(250, 250, 245, .85)',
          borderRadius: '12px',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(0,0,0,0.05)'
        }}>
          {children}
        </section>
      </main>

      {/* Hide footer when embedded */}
      {!isEmbed && (
        <footer className="mt-auto">
          <div className="pre-footer py-8">
            <div className="logo-strip flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              {partnerLogos.map(logo => <img key={logo.src} src={logo.src} alt={logo.alt} className="max-h-[50px] w-auto"/>)}
            </div>
          </div>

          <div className="footer-bottom" style={{backgroundImage: 'linear-gradient(to right, #3b5f41, #324c37)', color: 'var(--accent)'}}>
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-8 px-6 gap-8">
              <div className="footer-column">
                <img src={logoUrl} alt="AppraSure" className="w-[200px] h-auto mb-2"/>
                <p>A Veteran-Owned Public Adjusting Firm</p>
              </div>
              <div className="footer-column">
                <h4 className="font-bold text-lg mb-2 text-white">Contact</h4>
                <p>2300 S. 2300 E. <br/>Salt Lake City, UT 84109</p>
                <p>info@apprasure.com</p>
              </div>
              <div className="footer-column">
                <h4 className="font-bold text-lg mb-2 text-white">Navigation</h4>
                <Link to={createPageUrl("Onboarding")} className="block hover:underline">Get Started</Link>
                <Link to={createPageUrl("Dashboard")} className="block hover:underline">Dashboard</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom-bar bg-[#2c2c2c] text-[#ccc] text-center p-2 text-sm">
            &copy; {new Date().getFullYear()} AppraSure. All rights reserved.
          </div>
        </footer>
      )}
    </div>
  );
}
