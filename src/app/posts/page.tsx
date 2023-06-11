import PostCard from "@/components/PostCard";
import Link from "next/link"
import Post from '@/types/Post'
import { getPosts } from "@/services/posts";



// const POSTS = Array.from({length: 30});

export const metadata = {
  title: 'Posts | next.js',
  description: 'Posts description'
}


export default async function PostsPage() {
 
  const posts: Post[] = await getPosts();

   

    return (
      <>
      <header className="flex item-center mb-6">
        <h1>Posts page</h1>
        <Link href="/posts/new" className="btn ml-auto">New Post</Link>
      </header>

      <ul className="grid grid-cols-3 gap-3">
        {posts.map((post)=> (
          <PostCard key={post.id} {...post} />
        ))}
      </ul>

      </>
    )
  }