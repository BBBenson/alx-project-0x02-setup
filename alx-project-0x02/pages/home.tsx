"use client"

import type React from "react"

import Head from "next/head"
import { useState } from "react"
import Header from "../components/layout/Header"
import Card from "../components/common/Card"
import PostModal from "../components/common/PostModal"
import type { CardProps } from "../interfaces"

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [posts, setPosts] = useState<CardProps[]>([])

  const handleSavePost = (title: string, content: string) => {
    setPosts((prevPosts) => [...prevPosts, { title, content }])
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Home Page</title>
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Home Page</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card title="Welcome Card" content="This is a reusable card component." />
          <Card title="Another Card" content="You can pass different content to this card." />
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
        >
          Open Post Modal
        </button>

        {posts.length > 0 && (
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <Card key={index} title={post.title} content={post.content} />
              ))}
            </div>
          </div>
        )}
      </main>

      {isModalOpen && <PostModal onClose={() => setIsModalOpen(false)} onSave={handleSavePost} />}
    </div>
  )
}

export default HomePage
