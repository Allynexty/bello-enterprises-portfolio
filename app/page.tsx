import Link from "next/link"
import { SectionContainer } from "@/components/section-container"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-background to-background pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        </div>
        <SectionContainer className="relative z-10 py-12 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-pretty">
              Your Gateway to Global Markets
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
              T. Bello Enterprises connects businesses to international markets through expert import/export services,
              clearing & forwarding, and strategic partnerships. Established 2007, trusted by enterprises worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-center"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/5 transition-colors text-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className="bg-secondary/30 py-12 md:py-16">
        <SectionContainer>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Import & Export Services */}
            <Link href="/services#import" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border border-border hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform"
                    >
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                      <path d="M10 12l2 2 4-4" />
                    </svg>
                    <h3 className="text-xl font-semibold text-foreground">Import & Export</h3>
                    <p className="text-sm text-muted-foreground mt-2">Global sourcing and distribution</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Delivery Services */}
            <Link href="/services#delivery" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 border border-border hover:border-accent/50 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="mx-auto mb-4 text-accent group-hover:scale-110 transition-transform"
                    >
                      <path d="M2 7h19M3 7v7c0 2 1 3 3 3h12c2 0 3-1 3-3V7" />
                      <circle cx="6" cy="16" r="2" />
                      <circle cx="18" cy="16" r="2" />
                      <path d="M8 16h8" />
                    </svg>
                    <h3 className="text-xl font-semibold text-foreground">Delivery & Logistics</h3>
                    <p className="text-sm text-muted-foreground mt-2">Reliable transportation worldwide</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Supply Services */}
            <Link href="/services#supply" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-border hover:border-orange-500/50 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="mx-auto mb-4 text-orange-600 group-hover:scale-110 transition-transform"
                    >
                      <path d="M4 3h16v3H4zm1 4h14v12H5zm4-2v14M10 5v14M15 5v14" />
                      <path d="M3 7h18" />
                    </svg>
                    <h3 className="text-xl font-semibold text-foreground">Supply Services</h3>
                    <p className="text-sm text-muted-foreground mt-2">PPE, OEM, machinery & equipment</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Clearing & Forwarding */}
            <Link href="/services#clearing" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-br from-green-600/10 to-green-600/5 border border-border hover:border-green-600/50 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="mx-auto mb-4 text-green-700 group-hover:scale-110 transition-transform"
                    >
                      <path d="M3 7v10c0 1 1 2 2 2h14c1 0 2-1 2-2V7" />
                      <path d="M3 7h18M9 7V5h6v2" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <h3 className="text-xl font-semibold text-foreground">Clearing & Forwarding</h3>
                    <p className="text-sm text-muted-foreground mt-2">Customs & regulatory expertise</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SectionContainer>
      </section>

      <SectionContainer>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Network</h3>
            <p className="text-muted-foreground">
              Connected to suppliers and buyers across Asia, Europe, Americas, and Africa.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Compliance</h3>
            <p className="text-muted-foreground">
              Full regulatory compliance with international trade regulations and documentation.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Trusted Partner</h3>
            <p className="text-muted-foreground">
              Licensed since 2007 with track record of successful international transactions.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer>
        <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Expand Globally?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact our team to discuss your import/export needs and market expansion strategies.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Start Your Journey
          </Link>
        </div>
      </SectionContainer>
    </div>
  )
}
