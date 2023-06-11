import PostForm from "@/components/PostForm"

export const metadata = {
  title: 'Edit post | next.js',
  description: 'Edit post description'
}


interface PostEdit {
    params :{
      postId: string,
    }
    }
    
    
    export default function PostViewPage(props: PostEdit) {
        
        
        return (
          <>
          <header>
            <h1>PostView {props.params.postId} page</h1>
          </header>
          <PostForm />
          </>
        )
      }