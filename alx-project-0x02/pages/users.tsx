import type React from "react"
import Head from "next/head"
import Header from "@/components/layout/Header"
import UserCard from "@/components/common/UserCard"
import type { User } from "@/interfaces"

/**
 * Fetch users data at build time using getStaticProps().
 */
export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")

    if (!res.ok) {
      throw new Error(`Failed to fetch users. Status: ${res.status}`)
    }

    const users: User[] = await res.json()

    return {
      props: { users },
      revalidate: 60, // Re-generate the page every 60 seconds
    }
  } catch (error) {
    console.error("Error fetching users in getStaticProps:", error)

    return {
      props: { users: [] }, // Return empty list if there’s an error
      revalidate: 60,
    }
  }
}

// Infer props type from return of getStaticProps
type UsersPageProps = {
  users: User[]
}

/**
 * Users Page Component
 */
const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Users Page</title>
        <meta name="description" content="List of users fetched from API at build time." />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Users</h1>

        {users.length === 0 ? (
          <p className="text-xl text-gray-700">
            No users found or an error occurred while fetching.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default UsersPage
