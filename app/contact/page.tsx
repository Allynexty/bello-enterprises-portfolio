"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { SectionContainer } from "@/components/section-container"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    inquiryType: "general",
    productId: "",
    message: "",
    oemAuthorization: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        inquiryType: "general",
        productId: "",
        message: "",
        oemAuthorization: false,
      })
    }, 3000)
  }

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 md:py-16">
        <SectionContainer>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have questions or ready to start your import/export journey? Our team is here to help.
          </p>
        </SectionContainer>
      </section>

      {/* Contact Form & Info */}
      <SectionContainer>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:bellogbemisola181@yahoo.com" className="text-primary hover:underline">
                  bellogbemisola181@yahoo.com
                </a>
                <p className="text-sm text-muted-foreground mt-1">Response within 24 hours</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+2348188133006" className="text-primary hover:underline">
                  +234 8188133006
                </a>
                <br />
                <a href="tel:+2348033641514" className="text-primary hover:underline">
                  +234 8033641514
                </a>
                <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9AM-5PM WAT</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Head Office</h3>
                <p className="text-muted-foreground">
                  21 Princess Street
                  <br />
                  Lagos Island
                  <br />
                  Lagos State
                  <br />
                  Nigeria
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Business Registration:</strong> BN 2033740
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 3:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services" className="text-primary hover:underline">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-primary hover:underline">
                    Our Partners
                  </Link>
                </li>
                <li>
                  <Link href="/downloads" className="text-primary hover:underline">
                    Download Resources
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-secondary/30 rounded-lg p-8 border border-border">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Inquiry Type *</label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="import">Import Services</option>
                        <option value="export">Export Services</option>
                        <option value="clearing">Clearing & Forwarding</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="oemAuthorization"
                        checked={formData.oemAuthorization}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded border-border"
                      />
                      <span className="text-sm">
                        I am authorized to represent an OEM (Original Equipment Manufacturer) and require specialized
                        pricing and support.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}
