import Link from "next/link"
import { SectionContainer } from "@/components/section-container"

export default function AboutPage() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 md:py-16">
        <SectionContainer>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About T. Bello Enterprises</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A trusted global distributor of industrial solutions since our establishment.
          </p>
        </SectionContainer>
      </section>

      {/* About Content */}
      <SectionContainer>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              T. Bello Enterprises was founded with a mission to provide high-quality industrial products and solutions
              to businesses worldwide. Over the years, we have built strong relationships with manufacturers and clients
              across multiple continents.
            </p>
            <p className="text-muted-foreground mb-4">
              Our commitment to excellence, reliability, and customer service has made us a preferred partner for
              organizations seeking dependable office equipment, safety & PPE, and industrial spares. We continue to
              innovate and expand our product offerings to meet evolving market demands.
            </p>
            <p className="text-muted-foreground">
              Today, T. Bello Enterprises operates as an international distributor with a diverse portfolio of premium
              products, supported by expert teams dedicated to customer success.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-border">
            <img src="/modern-office-building.png" alt="T. Bello Enterprises" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary/30 p-8 rounded-lg border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                Every product meets rigorous international standards and certifications ensuring maximum reliability.
              </p>
            </div>
            <div className="bg-secondary/30 p-8 rounded-lg border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Focused</h3>
              <p className="text-muted-foreground">
                We prioritize understanding and exceeding our clients' expectations through dedicated support.
              </p>
            </div>
            <div className="bg-secondary/30 p-8 rounded-lg border border-border">
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation Driven</h3>
              <p className="text-muted-foreground">
                We continuously explore new products and solutions to stay ahead of industry trends.
              </p>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="bg-primary text-primary-foreground rounded-lg p-12 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">20</div>
              <p className="opacity-90">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <p className="opacity-90">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="opacity-90">Active Clients</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Partnerships?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We welcome inquiries from distributors, resellers, and business partners looking to collaborate with a
            trusted global supplier.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </SectionContainer>
    </div>
  )
}
