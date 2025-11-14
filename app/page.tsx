"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/section-container";
import partners from "@/data/partners.json"


/**
 * app/page.tsx
 *
 * Interactive hero with full-width Guangzhou port background and enhanced 3D globe
 */

export default function HomePage() {
  const importRef = useRef<HTMLElement | null>(null);
  const deliveryRef = useRef<HTMLElement | null>(null);
  const clearingRef = useRef<HTMLElement | null>(null);
  const supplyRef = useRef<HTMLElement | null>(null);

  function scrollTo(ref: React.RefObject<HTMLElement | null>) {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
        {/* Full-width Guangzhou port background */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/guangzhou_port.jpg"
            alt="Guangzhou port"
            className="w-full h-full object-cover filter saturate-90 brightness-75"
          />
          {/* Enhanced gradient overlays for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 pointer-events-none" />
        </div>

        <SectionContainer className="relative z-10 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 drop-shadow-md">
              Bridging Markets and Buyers — Sourcing & Procurement, Shipping, Compliance
            </h1>
            <p className="text-md md:text-lg text-white/90 mb-8">
              Since 2007 we connect African and Asian markets — procurement and supply, clearing and forwarding, and logistics handled end-to-end.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/services"
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-center"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg border border-white/25 text-white font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Get in Touch
              </Link>
            </div>

            {/* Enhanced Globe animation with 3D effect */}
            <div className="mt-8 flex justify-center">
              <div
                className="relative w-[380px] h-[380px] md:w-[500px] md:h-[500px]"
                aria-hidden="false"
                role="img"
                aria-label="Interactive globe showing connections between Nigeria and China"
              >
                {/* Glow effect behind globe */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl opacity-60 animate-pulse" />
                
                {/* Enhanced SVG globe */}
                <svg
                  viewBox="0 0 600 600"
                  className="w-full h-full relative z-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Gradient for globe sphere */}
                    <radialGradient id="globeGradient" cx="40%" cy="40%">
                      <stop offset="0%" stopColor="rgba(96, 165, 250, 0.15)" />
                      <stop offset="50%" stopColor="rgba(59, 130, 246, 0.08)" />
                      <stop offset="100%" stopColor="rgba(37, 99, 235, 0.02)" />
                    </radialGradient>
                    
                    {/* Glow filter for arcs */}
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Rotating globe group */}
                  <g
                    className="globe-rotate"
                    style={{ transformOrigin: "300px 300px", animation: "spin 40s linear infinite" }}
                  >
                    {/* Main globe sphere with gradient */}
                    <circle 
                      cx="300" 
                      cy="300" 
                      r="200" 
                      fill="url(#globeGradient)" 
                      stroke="rgba(255,255,255,0.25)" 
                      strokeWidth="1.5" 
                    />

                    {/* Latitude lines with 3D perspective */}
                    {[...Array(7)].map((_, i) => {
                      const lat = 90 - i * 30;
                      const r = 200 * Math.cos((lat * Math.PI) / 180);
                      const yOffset = 200 * Math.sin((lat * Math.PI) / 180);
                      return (
                        <ellipse
                          key={`lat-${i}`}
                          cx="300"
                          cy={300 - yOffset}
                          rx={r}
                          ry={r * 0.25}
                          fill="none"
                          stroke="rgba(255,255,255,0.12)"
                          strokeWidth="1"
                          opacity={i === 3 ? 0.25 : 0.15}
                        />
                      );
                    })}

                    {/* Longitude lines */}
                    {[...Array(12)].map((_, i) => {
                      const angle = (i * 360) / 12;
                      return (
                        <g key={`long-${i}`} transform={`rotate(${angle} 300 300)`}>
                          <ellipse
                            cx="300"
                            cy="300"
                            rx="200"
                            ry="200"
                            fill="none"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="1"
                            transform="scale(0.3, 1)"
                          />
                        </g>
                      );
                    })}

                    {/* Continental landmasses (simplified) */}
                    {/* Africa outline */}
                    <path
                      d="M260,280 Q255,260 265,245 Q275,235 280,250 Q285,265 275,285 Q265,295 260,280"
                      fill="rgba(34, 197, 94, 0.15)"
                      stroke="rgba(34, 197, 94, 0.4)"
                      strokeWidth="1.5"
                    />
                    
                    {/* Asia outline */}
                    <path
                      d="M340,260 Q350,245 365,250 Q380,255 385,270 Q390,285 380,295 Q365,300 350,285 Q340,275 340,260"
                      fill="rgba(59, 130, 246, 0.15)"
                      stroke="rgba(59, 130, 246, 0.4)"
                      strokeWidth="1.5"
                    />
                  </g>

                  {/* Animated connection arcs (non-rotating) */}
                  <g filter="url(#glow)">
                    {/* Primary arc - Nigeria to China */}
                    <path
                      className="arc arc-main"
                      d="M240,290 Q300,180 380,275"
                      fill="none"
                      stroke="#FFB000"
                      strokeWidth="3"
                      strokeLinecap="round"
                      style={{ 
                        strokeDasharray: 400, 
                        strokeDashoffset: 400, 
                        animation: "draw 2s ease-out 0.5s forwards, flowArc 3s ease-in-out 2.5s infinite" 
                      }}
                    />

                    {/* Secondary arc */}
                    <path
                      className="arc arc-secondary"
                      d="M255,305 Q310,220 370,290"
                      fill="none"
                      stroke="#60A5FA"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      style={{ 
                        strokeDasharray: 350, 
                        strokeDashoffset: 350, 
                        animation: "draw 2s ease-out 0.8s forwards, flowArc 3.5s ease-in-out 2.8s infinite" 
                      }}
                    />

                    {/* Tertiary arc */}
                    <path
                      className="arc arc-tertiary"
                      d="M250,280 Q295,200 365,270"
                      fill="none"
                      stroke="#34D399"
                      strokeWidth="2"
                      strokeLinecap="round"
                      style={{ 
                        strokeDasharray: 320, 
                        strokeDashoffset: 320, 
                        animation: "draw 2s ease-out 1.1s forwards, flowArc 4s ease-in-out 3.1s infinite" 
                      }}
                    />

                    {/* Animated particles along arcs */}
                    <circle className="particle particle-1" r="3" fill="#FFB000">
                      <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        path="M240,290 Q300,180 380,275"
                        begin="2.5s"
                      />
                    </circle>
                    <circle className="particle particle-2" r="2.5" fill="#60A5FA">
                      <animateMotion
                        dur="4.5s"
                        repeatCount="indefinite"
                        path="M255,305 Q310,220 370,290"
                        begin="2.8s"
                      />
                    </circle>
                  </g>

                  {/* Interactive service nodes with enhanced styling */}
                  {/* Import & Export node (Nigeria) */}
                  <g
                    onClick={() => scrollTo(importRef)}
                    role="button"
                    aria-label="Import and Export (click to view)"
                    tabIndex={0}
                    className="cursor-pointer transition-transform hover:scale-110"
                    transform="translate(240 290)"
                  >
                    <circle cx="0" cy="0" r="10" fill="#FFB000" />
                    <circle cx="0" cy="0" r="18" fill="none" stroke="#FFB000" strokeWidth="2" 
                      style={{ animation: "pulse 2s infinite" }} />
                    <circle cx="0" cy="0" r="25" fill="none" stroke="#FFB000" strokeWidth="1" opacity="0.3"
                      style={{ animation: "pulse 2s 0.5s infinite" }} />
                    <text x="0" y="-35" fontSize="11" fontWeight="600" fill="#FFB000" textAnchor="middle">
                      Import/Export
                    </text>
                  </g>

                  {/* Delivery node (mid route) */}
                  <g
                    onClick={() => scrollTo(deliveryRef)}
                    role="button"
                    aria-label="Delivery and Logistics (click to view)"
                    tabIndex={0}
                    className="cursor-pointer transition-transform hover:scale-110"
                    transform="translate(310 230)"
                  >
                    <circle cx="0" cy="0" r="9" fill="#60A5FA" />
                    <circle cx="0" cy="0" r="16" fill="none" stroke="#60A5FA" strokeWidth="2" 
                      style={{ animation: "pulse 2.3s infinite" }} />
                    <circle cx="0" cy="0" r="23" fill="none" stroke="#60A5FA" strokeWidth="1" opacity="0.3"
                      style={{ animation: "pulse 2.3s 0.5s infinite" }} />
                    <text x="0" y="-32" fontSize="11" fontWeight="600" fill="#60A5FA" textAnchor="middle">
                      Logistics
                    </text>
                  </g>

                  {/* Clearing node (China) */}
                  <g
                    onClick={() => scrollTo(clearingRef)}
                    role="button"
                    aria-label="Clearing and Forwarding (click to view)"
                    tabIndex={0}
                    className="cursor-pointer transition-transform hover:scale-110"
                    transform="translate(375 285)"
                  >
                    <circle cx="0" cy="0" r="10" fill="#34D399" />
                    <circle cx="0" cy="0" r="18" fill="none" stroke="#34D399" strokeWidth="2" 
                      style={{ animation: "pulse 2.6s infinite" }} />
                    <circle cx="0" cy="0" r="25" fill="none" stroke="#34D399" strokeWidth="1" opacity="0.3"
                      style={{ animation: "pulse 2.6s 0.5s infinite" }} />
                    <text x="0" y="-35" fontSize="11" fontWeight="600" fill="#34D399" textAnchor="middle">
                      Clearing
                    </text>
                  </g>

                  {/* Procurement node */}
                  <g
                    onClick={() => scrollTo(supplyRef)}
                    role="button"
                    aria-label="Procurement and Supply (click to view)"
                    tabIndex={0}
                    className="cursor-pointer transition-transform hover:scale-110"
                    transform="translate(330 315)"
                  >
                    <circle cx="0" cy="0" r="8" fill="#A78BFA" />
                    <circle cx="0" cy="0" r="15" fill="none" stroke="#A78BFA" strokeWidth="2" 
                      style={{ animation: "pulse 2.9s infinite" }} />
                    <circle cx="0" cy="0" r="22" fill="none" stroke="#A78BFA" strokeWidth="1" opacity="0.3"
                      style={{ animation: "pulse 2.9s 0.5s infinite" }} />
                    <text x="0" y="40" fontSize="11" fontWeight="600" fill="#A78BFA" textAnchor="middle">
                      Procurement
                    </text>
                  </g>

                  {/* Location labels with icons */}
                  <g transform="translate(200, 320)">
                    <circle cx="0" cy="0" r="4" fill="#22C55E" />
                    <text x="8" y="5" fontSize="13" fontWeight="700" fill="rgba(255,255,255,0.95)">
                      🇳🇬 Nigeria
                    </text>
                  </g>
                  
                  <g transform="translate(390, 310)">
                    <circle cx="0" cy="0" r="4" fill="#3B82F6" />
                    <text x="-70" y="5" fontSize="13" fontWeight="700" fill="rgba(255,255,255,0.95)">
                      🇨🇳 China
                    </text>
                  </g>
                </svg>
              </div>
            </div>

            <p className="text-sm text-white/80 mt-8 font-medium">
              Click any node to explore our services
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* SERVICES GRID */}
      <SectionContainer>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Import & Export */}
          <article ref={importRef} className="group relative rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
            <img
              src="/port_pic.jpg"
              alt="Containers at a port serving import and export"
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="p-6 bg-background">
              <h3 className="text-xl font-semibold mb-2">Import & Export</h3>
              <p className="text-sm text-muted-foreground mb-4">Sourcing, supplier checks and cross-border trade between Different markets.</p>
              <Link href="/services#import" className="text-sm font-semibold text-primary">Learn more →</Link>
            </div>
          </article>

          {/* Delivery & Logistics */}
          <article ref={deliveryRef} className="group relative rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
            <img
              src="/trucks_freight.png"
              alt="Freight truck on highway and port logistics"
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="p-6 bg-background">
              <h3 className="text-xl font-semibold mb-2">Delivery & Logistics</h3>
              <p className="text-sm text-muted-foreground mb-4">Reliable transportation, multimodal freight and ship scheduling.</p>
              <Link href="/services#delivery" className="text-sm font-semibold text-primary">Learn more →</Link>
            </div>
          </article>

          {/* Procurement & Supply */}
          <article ref={supplyRef} className="group relative rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
            <img
              src="/office__new.jpg"
              alt="Office Supplies and equipment"
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="p-6 bg-background">
              <h3 className="text-xl font-semibold mb-2">Procurement & Supply</h3>
              <p className="text-sm text-muted-foreground mb-4">Direct sourcing and supply of specialized products</p>
              <Link href="/services#supply" className="text-sm font-semibold text-primary">Learn more →</Link>
            </div>
          </article>

          {/* Clearing & Forwarding */}
          <article ref={clearingRef} className="group relative rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
            <img
              src="/customs.jpg"
              alt="Customs paperwork and inspections"
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="p-6 bg-background">
              <h3 className="text-xl font-semibold mb-2">Clearing & Forwarding</h3>
              <p className="text-sm text-muted-foreground mb-4">Customs documentation, duties and regulatory compliance for imports/exports.</p>
              <Link href="/services#clearing" className="text-sm font-semibold text-primary">Learn more →</Link>
            </div>
          </article>
        </div>
      </SectionContainer>

      {/* MINI PARTNERS STRIP */}
      <SectionContainer>
        <div className="py-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">Selected Partners</h3>
      
          <div className="flex flex-wrap items-center justify-center gap-6">
            {(() => {
              // partners is imported as an alias 'partners'
              // ensure we have an array to slice/map (supports both array or { partners: [...] } shapes)
              const list = Array.isArray(partners)
                ? partners
                : Array.isArray(partners?.partners)
                ? partners.partners
                : [];
      
              const visible = list.slice(0, 6);
      
              if (visible.length === 0) {
                return (
                  <div className="text-sm text-muted-foreground">No partners added yet.</div>
                );
              }
      
              return visible.map((p) => (
                <div
                  key={p.id}
                  className="w-36 flex-shrink-0 flex flex-col items-center bg-background rounded-lg p-3 border border-border shadow-sm"
                >
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={p.name ?? "Partner logo"}
                      className="h-10 object-contain mb-2"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-10 w-full flex items-center justify-center bg-secondary/10 rounded mb-2 text-xs">
                      {p.name}
                    </div>
                  )}
      
                  <div className="text-sm font-medium text-center truncate">{p.name}</div>
                </div>
              ));
            })()}
          </div>
      
          <div className="mt-6 text-center">
            <Link href="/partners" className="text-sm font-semibold text-primary">
              View all partners →
            </Link>
          </div>
        </div>
      </SectionContainer>

      {/* Small features (office equipment etc.) */}
      <SectionContainer>
        <div className="grid md:grid-cols-3 gap-8 my-12">
          <div className="text-center">
            <div className="w-20 h-20 rounded-lg overflow-hidden mx-auto mb-4">
              <img src="/office_2.jpg" alt="Office desk (Nigeria)" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Local region Support</h3>
            <p className="text-muted-foreground text-sm">Inspections and procurement specifications.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 rounded-lg overflow-hidden mx-auto mb-4">
              <img src="/stationery__1.jpg" alt="Office equipment" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Documentation & Compliance</h3>
            <p className="text-muted-foreground text-sm">Accurate paperwork, certificates and shipping documentation.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 rounded-lg overflow-hidden mx-auto mb-4">
              <img src="PPE3.jpg" alt="Stationery and office supplies" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Office Supplies & PPE</h3>
            <p className="text-muted-foreground text-sm">PPE, office equipment and spare parts procurement.</p>
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer>
        <div className="bg-primary text-primary-foreground rounded-lg p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Procure, Supply or Distribute goods or services?</h2>
          <p className="mb-6 opacity-90">Talk to our team about your needs.</p>
          <Link href="/contact" className="inline-block px-6 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition-colors">
            Contact Us
          </Link>
        </div>
      </SectionContainer>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.5); opacity: 0.2; }
        }
        @keyframes flowArc {
          0%, 100% { 
            stroke-opacity: 0.7;
            filter: drop-shadow(0 0 4px currentColor);
          }
          50% { 
            stroke-opacity: 1;
            filter: drop-shadow(0 0 12px currentColor);
          }
        }

        .globe-rotate { 
          transform-box: fill-box; 
          transform-origin: 50% 50%; 
        }

        .arc {
          filter: drop-shadow(0 0 6px rgba(255,255,255,0.4));
          transition: all 0.3s ease;
        }

        .particle {
          filter: drop-shadow(0 0 8px currentColor);
          opacity: 0.9;
        }

        /* Enhanced hover effects for nodes */
        g[role="button"]:hover circle:first-child {
          transform: scale(1.2);
          transition: transform 0.2s ease;
        }
        
        g[role="button"]:focus {
          outline: 2px solid white;
          outline-offset: 4px;
          border-radius: 50%;
        }

        g[role="button"]:focus circle {
          stroke: white;
          stroke-width: 2.5;
        }

        /* Text animations */
        g[role="button"] text {
          opacity: 0.9;
          transition: opacity 0.2s ease;
        }
        
        g[role="button"]:hover text {
          opacity: 1;
          filter: drop-shadow(0 0 8px currentColor);
        }
      `}</style>
    </div>
  );
}
