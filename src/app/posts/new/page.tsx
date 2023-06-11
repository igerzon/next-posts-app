import PostForm from "@/components/PostForm"

export const metadata = {
  title: 'New post | next.js',
  description: 'New post description'
}


export default function NewPostPage() {
    return (
      <>
      <header>
        <h1>New post page</h1>
      </header>
      
      <PostForm />
      </>
    )
  }