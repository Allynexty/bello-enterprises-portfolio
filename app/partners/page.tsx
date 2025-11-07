import Link from "next/link"
import { SectionContainer } from "@/components/section-container"
import partners from "@/data/partners.json"

export default function PartnersPage() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 md:py-16">
        <SectionContainer>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Partners & Clients</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We work with leading organizations and distributors worldwide to deliver excellence.
          </p>
        </SectionContainer>
      </section>

      {/* Partners Section */}
      <SectionContainer>
        <h2 className="text-3xl font-bold mb-8">Strategic Partners</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {partners.partners.map((partner) => (
            <div
              key={partner.id}
              className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="h-20 mb-4 flex items-center justify-center bg-secondary/30 rounded-lg overflow-hidden">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{partner.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{partner.industry}</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">{partner.region}</span>
              </div>
              <p className="text-xs text-muted-foreground">Partner since {partner.since}</p>
            </div>
          ))}
        </div>

        {/* Clients Section */}
        <div className="bg-secondary/30 rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Who We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.clients.map((client) => (
              <div key={client.id} className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-2">{client.name}</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{client.industry}</span>
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">{client.region}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Opportunities */}
        <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Become Our Partner</h2>
          <p className="text-lg mb-8 opacity-90">
            We actively seek partnerships with distributors, retailers, and resellers to expand our market reach and
            deliver value to more customers worldwide.
          </p>
          <Link
            href="/contact?subject=partnership"
            className="inline-block px-8 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Explore Partnership Opportunities
          </Link>
        </div>
      </SectionContainer>
    </div>
  )
}
