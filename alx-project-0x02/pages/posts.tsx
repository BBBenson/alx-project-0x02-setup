import type React from "react"
import Head from "next/head"
import Header from "@/components/layout/Header"
import PostCard from "@/components/common/PostCard"
import type { Post } from "@/interfaces"
import type { GetStaticProps, InferGetStaticPropsType } from "next"

type PostsPageProps = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (!res.ok) {
      throw new Error(`Failed to fetch posts, status: ${res.status}`)
    }
    const posts: Post[] = await res.json()
    return {
      props: {
        posts,
      },
      revalidate: 60, // Re-generate the page every 60 seconds
    }
  } catch (error) {
    console.error("Error fetching posts in getStaticProps:", error)
    return {
      props: {
        posts: [], // Return empty array on error
      },
      revalidate: 60,
    }
  }
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Posts Page</title>
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Posts</h1>
        {posts.length === 0 ? (
          <p className="text-xl text-gray-700">No posts found or an error occurred while fetching.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} title={post.title} content={post.body} userId={post.userId} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default PostsPage
