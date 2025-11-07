"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { SectionContainer } from "@/components/section-container"
import products from "@/data/products.json"
import { useSearchParams } from "next/navigation"

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)

  const categories = [
    { id: "all", name: "All Products" },
    { id: "office", name: "Office Equipment" },
    { id: "safety", name: "Safety & PPE" },
    { id: "industrial", name: "Industrial Spares" },
  ]

  const filteredProducts = useMemo(() => {
    return selectedCategory === "all"
      ? products.products
      : products.products.filter((p) => p.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div>
      {/* Header Section */}
      <section className="bg-secondary/30 py-12 md:py-16">
        <SectionContainer>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Browse our comprehensive catalog of office equipment, safety & PPE, and industrial spares. All products meet
            international standards and certifications.
          </p>
        </SectionContainer>
      </section>

      {/* Filters & Products */}
      <SectionContainer>
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4 text-sm text-muted-foreground">Showing {filteredProducts.length} products</div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative h-64 bg-muted overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                  {categories.find((c) => c.id === product.category)?.name}
                </p>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-primary mb-3">{product.price}</div>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {product.specifications.slice(0, 2).map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/contact?product=${product.id}`}
                  className="block w-full text-center px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No products found in this category.</p>
            <button
              onClick={() => setSelectedCategory("all")}
              className="text-primary hover:text-primary/80 font-semibold"
            >
              View all products
            </button>
          </div>
        )}
      </SectionContainer>
    </div>
  )
}
