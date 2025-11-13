import Link from "next/link" import { SectionContainer } from "@/components/section-container"

export default function HomePage() { return ( <div> {/* Hero Section with external background image /} <section className="relative overflow-hidden bg-gradient-to-br from-primary via-background to-background pt-20 pb-24 md:pt-32 md:pb-32"> {/ Background image (external link for quick testing) /} <div className="absolute inset-0 -z-10"> <img
src="https://source.unsplash.com/1600x900/?container,ship"
alt="Aerial container ship"
className="w-full h-full object-cover"
/> {/ soft overlay so text stays readable */} <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" /> </div>

<SectionContainer className="relative z-10 py-12 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-pretty">
          Your Gateway to Global Markets
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
          Established in 2007, T. Bello Enterprises connects businesses to global markets with
          end-to-end procurement and trade services. We handle sourcing, logistics and customs so
          you can focus on growth.
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

  {/* Services grid with image backgrounds (external links for quick testing) */}
  <section className="bg-secondary/30 py-12 md:py-16">
    <SectionContainer>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Services</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {/* Import & Export */}
        <Link href="/services#import" className="group">
          <div className="relative h-64 rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
            <img
              src="https://source.unsplash.com/1200x800/?container,port"
              alt="Container port"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6 text-white">
                <h3 className="text-xl font-semibold">Import & Export</h3>
                <p className="text-sm mt-2">Global sourcing and distribution</p>
              </div>
            </div>
          </div>
        </Link>

        {/* Delivery & Logistics */}
        <Link href="/services#delivery" className="group">
          <div className="relative h-64 rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
            <img
              src="https://source.unsplash.com/1200x800/?truck,highway"
              alt="Logistics truck on highway"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6 text-white">
                <h3 className="text-xl font-semibold">Delivery & Logistics</h3>
                <p className="text-sm mt-2">Reliable transportation worldwide</p>
              </div>
            </div>
          </div>
        </Link>

        {/* Procurement & Supply */}
        <Link href="/services#supply" className="group">
          <div className="relative h-64 rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
            <img
              src="https://source.unsplash.com/1200x800/?warehouse,forklift"
              alt="Warehouse with forklift"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6 text-white">
                <h3 className="text-xl font-semibold">Procurement & Supply</h3>
                <p className="text-sm mt-2">PPE, OEM, machinery & office equipment</p>
              </div>
            </div>
          </div>
        </Link>

        {/* Clearing & Forwarding */}
        <Link href="/services#clearing" className="group">
          <div className="relative h-64 rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
            <img
              src="https://source.unsplash.com/1200x800/?customs,inspection,port"
              alt="Customs inspection"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6 text-white">
                <h3 className="text-xl font-semibold">Clearing & Forwarding</h3>
                <p className="text-sm mt-2">Customs & regulatory expertise</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </SectionContainer>
  </section>

  {/* Feature highlights with small office images */}
  <SectionContainer>
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <div className="text-center">
        <div className="w-24 h-24 rounded-lg overflow-hidden mx-auto mb-4">
          <img src="https://source.unsplash.com/800x600/?office,desk" alt="Office desk" className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Global Network</h3>
        <p className="text-muted-foreground">
          Connected to suppliers and buyers across Asia, Europe, Americas, and Africa.
        </p>
      </div>
      <div className="text-center">
        <div className="w-24 h-24 rounded-lg overflow-hidden mx-auto mb-4">
          <img src="https://source.unsplash.com/800x600/?office,printer" alt="Office printer" className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Expert Compliance</h3>
        <p className="text-muted-foreground">
          Full regulatory compliance with international trade regulations and documentation.
        </p>
      </div>
      <div className="text-center">
        <div className="w-24 h-24 rounded-lg overflow-hidden mx-auto mb-4">
          <img src="https://source.unsplash.com/800x600/?stationery,flatlay" alt="Office supplies" className="w-full h-full object-cover" />
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
    <div className="relative rounded-lg p-12 text-center overflow-hidden">
      {/* subtle decorative background image for CTA */}
      <img
        src="https://source.unsplash.com/1600x900/?office,team"
        alt="Office team"
        className="absolute inset-0 w-full h-full object-cover opacity-30 -z-10"
      />
      <div className="bg-primary text-primary-foreground rounded-lg p-12 relative">
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
    </div>
  </SectionContainer>
</div>

) }
