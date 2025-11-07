import Link from "next/link"
import { SectionContainer } from "@/components/section-container"

export default function ProjectsPage() {
  const projects = [
    {
      id: "seacon",
      title: "Seacon Barge Maintenance Supply Project",
      client: "Seacon",
      category: "Marine & Industrial Equipment",
      description:
        "Comprehensive sourcing and supply of 117+ spare parts and maintenance items for Seacon's barge maintenance operations.",
      overview:
        "T. Bello Enterprises successfully supplied specialized maintenance items for Seacon's maritime equipment. This project demonstrates our expertise in sourcing complex industrial components including hydraulic systems, electrical components, maintenance chemicals, and emergency equipment.",
      scope: [
        "Sourced 117+ maintenance items across multiple categories",
        "Nose masks, deck equipment, cleaning supplies",
        "Chlorine treatment systems and portable water treatment",
        "Hydraulic oils, compressor oils, and gear lubricants",
        "Electrical components including fuses, relays, and circuit breakers",
        "Batteries, emergency lighting, and safety equipment",
        "Specialized fasteners, tubes, and industrial chemicals",
      ],
      results: [
        "Successfully delivered all items on schedule",
        "100% regulatory compliance with maritime standards",
        "Competitive pricing with bulk quantity discounts",
        "Established ongoing supply relationship",
      ],
      featured: true,
    },
  ]

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 md:py-16">
        <SectionContainer>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects & Case Studies</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore successful supply projects and partnerships that showcase our expertise in global trade and
            specialized sourcing.
          </p>
        </SectionContainer>
      </section>

      {/* Projects List */}
      <SectionContainer>
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-8 md:p-10">
                {/* Project Header */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                      <p className="text-muted-foreground">
                        <span className="font-semibold">Client:</span> {project.client}
                      </p>
                    </div>
                    <div className="px-4 py-2 bg-primary/10 rounded-lg">
                      <p className="text-sm font-semibold text-primary">{project.category}</p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground">{project.description}</p>
                </div>

                {/* Project Overview */}
                <div className="mb-8 pb-8 border-b border-border">
                  <h3 className="text-xl font-bold mb-3">Project Overview</h3>
                  <p className="text-muted-foreground">{project.overview}</p>
                </div>

                {/* Project Scope */}
                <div className="grid md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-border">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Scope of Work</h3>
                    <ul className="space-y-2">
                      {project.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-1 text-lg">✓</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Results */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Results & Outcomes</h3>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-accent font-bold mt-1 text-lg">★</span>
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Discuss Similar Project
                  </Link>
                  <Link
                    href="/downloads"
                    className="px-6 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
                  >
                    Download Case Study
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="mt-16 p-12 bg-secondary/30 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-3">Have a Project in Mind?</h3>
          <p className="text-muted-foreground mb-6">
            We've handled complex supply projects across multiple industries. Let's discuss how we can help with yours.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </SectionContainer>
    </div>
  )
}
