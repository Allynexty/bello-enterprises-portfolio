import Link from "next/link"
import { SectionContainer } from "@/components/section-container"

export default function ServicesPage() {
  const importExportServices = [
    {
      id: "import-1",
      title: "Import Sourcing",
      description:
        "We identify and source quality products from vetted international suppliers. Our team handles supplier verification, product sampling, and quality assurance.",
      features: ["Supplier identification", "Product sampling", "Quality verification", "Negotiation support"],
    },
    {
      id: "import-2",
      title: "Import Documentation",
      description:
        "Complete handling of import documentation including bills of lading, commercial invoices, and customs declarations.",
      features: ["Documentation handling", "Invoice preparation", "Customs forms", "Certificate of Origin"],
    },
    {
      id: "import-3",
      title: "Customs Clearance",
      description: "Expert customs clearance services ensuring smooth entry of goods with full regulatory compliance.",
      features: ["Duty assessment", "Tariff classification", "Regulatory compliance", "Expedited clearance"],
    },
    {
      id: "export-1",
      title: "Export Preparation",
      description:
        "We prepare your products for export, ensuring compliance with international standards and regulations.",
      features: ["Product certification", "Packaging standards", "Export documentation", "Market research"],
    },
    {
      id: "export-2",
      title: "Market Connection",
      description:
        "Connect with buyers in target markets through our established network of international contacts and distributors.",
      features: ["Buyer identification", "Market analysis", "Price negotiation", "Contract support"],
    },
    {
      id: "export-3",
      title: "Export Logistics",
      description:
        "End-to-end management of product shipment to international destinations with proper insurance and tracking.",
      features: ["Freight arrangement", "Shipping coordination", "Insurance management", "Real-time tracking"],
    },
    {
      id: "clearing-1",
      title: "Port Clearing",
      description:
        "Professional clearing and forwarding services at major ports including Port Authority liaison and warehouse coordination.",
      features: ["Port documentation", "Authority liaison", "Warehouse coordination", "Cargo handling"],
    },
    {
      id: "clearing-2",
      title: "Last-Mile Delivery",
      description: "Reliable final delivery to your destination with proper handling and verification at each step.",
      features: ["Final delivery coordination", "Signature verification", "Damage inspection", "Delivery confirmation"],
    },
    {
      id: "clearing-3",
      title: "Regulatory Compliance",
      description:
        "Ensure all imports and exports meet local and international regulatory requirements with our compliance expertise.",
      features: ["Compliance review", "License acquisition", "Risk assessment", "Documentation audit"],
    },
  ]

  const supplyServices = [
    {
      id: "supply-1",
      title: "Personal Protective Equipment (PPE)",
      description:
        "Comprehensive sourcing and supply of certified PPE including masks, gloves, safety gear, and protective clothing from international manufacturers.",
      features: ["Certified suppliers", "Bulk ordering", "Quality assurance", "Compliance standards"],
    },
    {
      id: "supply-2",
      title: "OEM Parts & Components",
      description:
        "Direct access to Original Equipment Manufacturer parts and components for industrial, automotive, and mechanical applications with full warranty support.",
      features: ["Direct OEM partnerships", "Warranty coverage", "Technical documentation", "Quick delivery"],
    },
    {
      id: "supply-3",
      title: "Machinery & Industrial Equipment",
      description:
        "Supply of new and refurbished machinery, equipment, and spare parts for manufacturing, construction, and industrial operations.",
      features: ["Equipment sourcing", "Installation support", "Maintenance parts", "Technical assistance"],
    },
    {
      id: "supply-4",
      title: "Corporate Clothing & Uniforms",
      description:
        "Customized corporate clothing, workwear, and uniforms from quality manufacturers with bulk order capabilities and branding options.",
      features: ["Custom designs", "Bulk ordering", "Branding options", "Quick turnaround"],
    },
    {
      id: "supply-5",
      title: "Executive Furniture",
      description:
        "Premium office furniture, executive desks, ergonomic seating, and conference room solutions from international suppliers.",
      features: ["Design consultation", "Bulk discounts", "Delivery & assembly", "Warranty support"],
    },
  ]

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 md:py-16">
        <SectionContainer>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive import/export, clearing, forwarding, and supply solutions to connect your business with global
            markets and products.
          </p>
        </SectionContainer>
      </section>

      {/* Import Services Section */}
      <SectionContainer>
        <div id="import" className="mb-20">
          <h2 className="text-3xl font-bold mb-2">Import Services</h2>
          <p className="text-muted-foreground mb-12">
            Source quality products from international suppliers with full support and compliance.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {importExportServices.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Export Services Section */}
        <div id="export" className="mb-20">
          <h2 className="text-3xl font-bold mb-2">Export Services</h2>
          <p className="text-muted-foreground mb-12">
            Expand your reach to international markets with our comprehensive export solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {importExportServices.slice(3, 6).map((service) => (
              <div
                key={service.id}
                className="border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Clearing & Forwarding Section */}
        <div id="clearing" className="mb-20">
          <h2 className="text-3xl font-bold mb-2">Clearing & Forwarding</h2>
          <p className="text-muted-foreground mb-12">
            Expert customs clearance and logistics support for seamless international trade.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {importExportServices.slice(6, 9).map((service) => (
              <div
                key={service.id}
                className="border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Supply Services Section */}
        <div id="supply" className="mb-20">
          <h2 className="text-3xl font-bold mb-2">Supply Services</h2>
          <p className="text-muted-foreground mb-12">
            Direct sourcing and supply of specialized products including PPE, OEM parts, machinery, clothing, and
            corporate furniture.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {supplyServices.map((service) => (
              <div
                key={service.id}
                className="border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer>
        <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="text-lg mb-8 opacity-90">
            Our team can tailor services to meet your specific import/export and supply requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </SectionContainer>
    </div>
  )
}
