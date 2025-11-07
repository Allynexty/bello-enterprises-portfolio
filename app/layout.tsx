import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Link from "next/link"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "900"] })

export const metadata: Metadata = {
  title: "T. Bello Enterprises - Import, Export & Clearing Services",
  description: "Global import/export, clearing and forwarding services. Connect to international markets since 2007.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                  TB
                </div>
                <span className="font-display font-bold hidden sm:inline">T. Bello</span>
              </Link>
              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/projects"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/partners"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Partners
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Contact
                </Link>
              </div>
              <div className="md:hidden">
                <button className="p-2 text-foreground hover:bg-secondary rounded-lg transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t border-border bg-secondary/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/about" className="hover:text-foreground transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/partners" className="hover:text-foreground transition-colors">
                      Partners & Clients
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-foreground transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/services#import" className="hover:text-foreground transition-colors">
                      Import Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#export" className="hover:text-foreground transition-colors">
                      Export Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#clearing" className="hover:text-foreground transition-colors">
                      Clearing & Forwarding
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/projects" className="hover:text-foreground transition-colors">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-foreground transition-colors">
                      Documentation
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Email:{" "}
                  <a href="mailto:bellogbemisola181@yahoo.com" className="hover:text-foreground transition-colors">
                    bellogbemisola181@yahoo.com
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  Phone:{" "}
                  <a href="tel:+2348188133006" className="hover:text-foreground transition-colors">
                    +234 8188133006
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  21 Princess Street
                  <br />
                  Lagos Island, Lagos State
                  <br />
                  Nigeria
                </p>
              </div>
            </div>
            <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2025 T. Bello Enterprises. All rights reserved. Business Registration: BN 2033740</p>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
