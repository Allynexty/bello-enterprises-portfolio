"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/section-container";

/**
 * app/page.tsx
 *
 * Interactive hero with Nigerian & Chinese market backgrounds and an animated SVG globe
 * - External image links (Unsplash queries) are used for quick testing. Replace with local files for production.
 * - Click globe nodes to scroll to service cards.
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
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-28">
        {/* Background split images: left = Nigeria (market), right = China (port/city) */}
        <div className="absolute inset-0 -z-10 flex">
          {/* Right (China) */}
          <div className="w-1/2 h-full overflow-hidden">
            <img
              src="/guangzhou_port.jpg"
              alt="Guangzhou port"
              className="w-full h-full object-cover filter saturate-95 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Decorative overlays */}
        <div className="absolute inset-0 -z-5 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

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

            {/* Globe animation overlay */}
            <div className="mt-4 flex justify-center">
              <div
                className="relative w-[360px] h-[360px] md:w-[460px] md:h-[460px] rounded-full"
                aria-hidden="false"
                role="img"
                aria-label="Animated globe showing connections between Nigeria and China"
              >
                {/* SVG globe */}
                <svg
                  viewBox="0 0 600 600"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Slow rotating group */}
                  <g
                    className="globe-rotate"
                    style={{ transformOrigin: "300px 300px", animation: "spin 28s linear infinite" }}
                  >
                    {/* Globe circle */}
                    <circle cx="300" cy="300" r="198" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />

                    {/* Lat/Long grid (simple) */}
                    {[...Array(5)].map((_, i) => {
                      const lat = 60 - i * 30;
                      const r = 198 * Math.cos((lat * Math.PI) / 180);
                      return (
                        <ellipse
                          key={`lat-${i}`}
                          cx="300"
                          cy="300"
                          rx={r}
                          ry={12 + (i * 1)}
                          fill="none"
                          stroke="rgba(255,255,255,0.06)"
                          strokeWidth="0.8"
                        />
                      );
                    })}

                    {/* Longitudes */}
                    {[...Array(8)].map((_, i) => {
                      const angle = (i * 360) / 8;
                      return (
                        <g key={`long-${i}`} transform={`rotate(${angle} 300 300)`}>
                          <path d="M300 102 C 300 102, 320 140 300 498" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
                        </g>
                      );
                    })}

                    {/* Arcs connecting Nigeria <-> China (animated stroke-draw) */}
                    {/* arc 1 */}
                    <path
                      className="arc arc-1"
                      d="M190,330 C 230,200 370,150 430,260"
                      fill="none"
                      stroke="rgba(255,255,255,0.9)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      style={{ strokeDasharray: 800, strokeDashoffset: 800, animation: "draw 2s ease-out 0.4s forwards, pulseArc 3s ease-in-out 1s infinite" }}
                    />

                    {/* arc 2 */}
                    <path
                      className="arc arc-2"
                      d="M210,360 C 240,300 360,220 420,300"
                      fill="none"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      style={{ strokeDasharray: 600, strokeDashoffset: 600, animation: "draw 2s ease-out 0.6s forwards, pulseArc 4s ease-in-out 1.2s infinite" }}
                    />
                  </g>

                  {/* Nodes for services (Nigeria-side roughly left, China-side right) */}
                  {/* Import & Export node (Nigeria) */}
                  <g
                    onClick={() => scrollTo(importRef)}
                    role="button"
                    aria-label="Import and Export (click to view)"
                    tabIndex={0}
                    className="cursor-pointer"
                    transform="translate(180 320)"
                    style={{ outline: "none" }}
                  >
                    <circle cx="0" cy="0" r="8" fill="#FFB000" />
                    <circle cx="0" cy="0" r="16" fill="none" stroke="#FFB000" strokeWidth="1.6" style={{ animation: "pulse 2s infinite" }} />
                  </g>

                  {/* Delivery node (mid / route) */}
                  <g
                    onClick={() => scrollTo(deliveryRef)}
                    role="button"
                    aria-label="Delivery and Logistics (click to view)"
                    tabIndex={0}
                    className="cursor-pointer"
                    transform="translate(320 250)"
                  >
                    <circle cx="0" cy="0" r="7" fill="#60A5FA" />
                    <circle cx="0" cy="0" r="14" fill="none" stroke="#60A5FA" strokeWidth="1.4" style={{ animation: "pulse 2.6s infinite" }} />
                  </g>

                  {/* Clearing node (China) */}
                  <g
                    onClick={() => scrollTo(clearingRef)}
                    role="button"
                    aria-label="Clearing and Forwarding (click to view)"
                    tabIndex={0}
                    className="cursor-pointer"
                    transform="translate(430 300)"
                  >
                    <circle cx="0" cy="0" r="8" fill="#34D399" />
                    <circle cx="0" cy="0" r="18" fill="none" stroke="#34D399" strokeWidth="1.6" style={{ animation: "pulse 3s infinite" }} />
                  </g>

                  {/* Labels (small) */}
                  <text x="155" y="295" fontSize="12" fill="rgba(255,255,255,0.9)">Nigeria </text>
                  <text x="405" y="320" fontSize="12" fill="rgba(255,255,255,0.9)">China </text>
                </svg>
              </div>
            </div>

            <p className="text-sm text-white/70 mt-6">
              Click a node to jump to the matching service.
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
              <h3 className="text-xl font-semibold mb-2">Procurement and Supply</h3>
              <p className="text-sm text-muted-foreground mb-4">Direct sourcing and supply of specialized products</p>
              <Link href="/services#clearing" className="text-sm font-semibold text-primary">Learn more →</Link>
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

      {/* Small features (office equipment etc.) */}
      <SectionContainer>
        <div className="grid md:grid-cols-3 gap-8 my-12">
          <div className="text-center">
            <div className="w-20 h-20 rounded-lg overflow-hidden mx-auto mb-4">
              <img src="/office_2.jpg" alt="Office desk (Nigeria)" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Local Office Support</h3>
            <p className="text-muted-foreground text-sm">On-the-ground teams in Lagos and West Africa for inspections and procurement.</p>
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

      {/* Inline CSS for animations (Tailwind can't express keyframes here easily) */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.35); opacity: 0.35; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes pulseArc {
          0% { stroke-opacity: 0.6; }
          50% { stroke-opacity: 1; transform: translateY(-1px); }
          100% { stroke-opacity: 0.6; }
        }

        /* ensure globe group uses transform-style for smooth rotation */
        .globe-rotate { transform-box: fill-box; transform-origin: 50% 50%; }

        /* Make the arcs slightly glowing */
        .arc {
          filter: drop-shadow(0 0 8px rgba(255,255,255,0.06));
        }

        /* enhance focus outlines for SVG interactive nodes */
        g[role="button"]:focus circle { stroke: white; stroke-width: 1; }
      `}</style>
    </div>
  );
}
