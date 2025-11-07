import Link from "next/link"
import { SectionContainer } from "@/components/section-container"

export default function DownloadsPage() {
  const documents = [
    {
      id: "bill-of-materials",
      title: "Bill of Materials Form",
      description:
        "Template form for listing products and materials you wish to import. Complete this form with product details, quantities, and specifications.",
      category: "Form",
      fileType: "PDF",
      size: "1.2 MB",
    },
    {
      id: "cac-certificate",
      title: "CAC Certificate of Registration",
      description:
        "Our Corporate Affairs Commission (CAC) Certificate proving T. Bello Enterprises is a registered and authorized business entity (BN 2033740).",
      category: "Certificate",
      fileType: "PDF",
      size: "3.5 MB",
    },
    {
      id: "import-guide",
      title: "Import Process Guide",
      description: "Step-by-step guide explaining our import process, documentation requirements, and timelines.",
      category: "Guide",
      fileType: "PDF",
      size: "2.1 MB",
    },
    {
      id: "export-guide",
      title: "Export Process Guide",
      description:
        "Comprehensive guide to exporting goods through T. Bello Enterprises with market connection support.",
      category: "Guide",
      fileType: "PDF",
      size: "2.3 MB",
    },
    {
      id: "customs-guide",
      title: "Customs Clearance Guide",
      description: "Information about clearing and forwarding procedures, documentation, and regulatory requirements.",
      category: "Guide",
      fileType: "PDF",
      size: "1.8 MB",
    },
    {
      id: "letterhead",
      title: "Official Letterhead",
      description: "Official T. Bello Enterprises letterhead with contact information and business details.",
      category: "Company",
      fileType: "PDF",
      size: "1.1 MB",
    },
    {
      id: "price-inquiry",
      title: "Price Inquiry Form",
      description: "Submit inquiries for specific products or services. Our team will provide competitive quotes.",
      category: "Form",
      fileType: "PDF",
      size: "0.8 MB",
    },
    {
      id: "company-profile",
      title: "Company Profile",
      description: "Complete company profile with history, services, capabilities, and key statistics since 2007.",
      category: "Company",
      fileType: "PDF",
      size: "2.4 MB",
    },
  ]

  const categories = ["All", "Form", "Certificate", "Guide", "Company"]

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 md:py-16">
        <SectionContainer>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Downloads & Resources</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Access forms, certificates, guides, and resources for conducting business with T. Bello Enterprises.
          </p>
        </SectionContainer>
      </section>

      {/* Downloads Section */}
      <SectionContainer>
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Available Resources</h2>
          <div className="space-y-4">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-secondary/20 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        {doc.fileType === "PDF" ? (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                            <polyline points="13 2 13 9 20 9" />
                          </svg>
                        ) : (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                          {doc.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">{doc.description}</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs bg-secondary px-2 py-1 rounded">{doc.category}</span>
                          <span className="text-xs bg-secondary px-2 py-1 rounded">{doc.fileType}</span>
                          <span className="text-xs text-muted-foreground">{doc.size}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="flex-shrink-0 px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CAC Certificate Preview */}
        <div className="bg-secondary/30 rounded-lg p-8 border border-border mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Registration & Credentials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3">CAC Certificate (BN 2033740)</h3>
              <p className="text-sm text-muted-foreground mb-4">
                T. Bello Enterprises is fully registered with the Corporate Affairs Commission (CAC) of Nigeria. Our
                business is authorized to conduct imports, exports, and general contracts.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Business Name:</strong> T. BELLO ENTERPRISES INTERNATIONAL
                </p>
                <p>
                  <strong>Registration Number:</strong> BN 2033740
                </p>
                <p>
                  <strong>Date of Registration:</strong> July 12, 2007
                </p>
                <p>
                  <strong>Business Type:</strong> Imports, Exports and General Contracts
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Contact Information</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Reach out to us for any inquiries about our services, partnerships, or import/export requirements.
              </p>
              <div className="space-y-2 text-sm bg-background rounded-lg p-4 border border-border">
                <p>
                  <strong>Email:</strong>
                  <br />
                  <a href="mailto:bellogbemisola181@yahoo.com" className="text-primary hover:underline">
                    bellogbemisola181@yahoo.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>
                  <br />
                  <span>+234 8188133006</span>
                  <br />
                  <span>+234 8033641514</span>
                </p>
                <p>
                  <strong>Address:</strong>
                  <br />
                  21, Princess Street
                  <br />
                  Lagos Island, Lagos State
                  <br />
                  Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-primary/5 rounded-lg p-8 border border-border">
          <h2 className="text-2xl font-bold mb-6">Need More Information?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Import/Export Questions</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about our import and export processes with detailed guides and documentation requirements.
              </p>
              <Link href="/services" className="text-primary hover:underline text-sm font-semibold">
                Explore Services →
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Meet Our Partners</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about our strategic partnerships across global markets and key clients we serve.
              </p>
              <Link href="/partners" className="text-primary hover:underline text-sm font-semibold">
                View Partners →
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Get in Touch</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Contact our team directly with specific inquiries, requests, or partnership opportunities.
              </p>
              <Link href="/contact" className="text-primary hover:underline text-sm font-semibold">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}
