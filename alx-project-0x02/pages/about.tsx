"use client"

import type React from "react"

import Head from "next/head"
import Header from "../components/layout/Header"
import Button from "../components/common/Button"

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>About Page</title>
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          This is the about page, demonstrating basic routing and reusable components.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-6">Button Examples</h2>
        <div className="flex flex-wrap gap-4">
          <Button size="small" shape="rounded-sm" onClick={() => alert("Small Button Clicked!")}>
            Small Button
          </Button>
          <Button size="medium" shape="rounded-md" onClick={() => alert("Medium Button Clicked!")}>
            Medium Button
          </Button>
          <Button size="large" shape="rounded-full" onClick={() => alert("Large Button Clicked!")}>
            Large Button
          </Button>
          <Button size="medium" shape="rounded-md" className="bg-green-500 hover:bg-green-600">
            Custom Color
          </Button>
        </div>
      </main>
    </div>
  )
}

export default AboutPage
