"use client"

import type React from "react"

import Head from "next/head"
import { useEffect, useState } from "react"
import Header from "@/components/layout/Header"
import PostCard from "@/components/common/PostCard"
import type { Post } from "@/interfaces"

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data: Post[] = await response.json()
        setPosts(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-700">Loading posts...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-red-500">Error: {error}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Posts Page</title>
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} title={post.title} content={post.body} userId={post.userId} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default PostsPage
