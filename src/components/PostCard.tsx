import Link from "next/link"
import Image from "next/image"
import Post from '@/types/Post'





export default function PostCard(props: Post) {
  const {id: postId, title, body} = props;
  const titleForImage = title.replace(' ', '').slice(0,2).toUpperCase();

    return (
        <li className="rounded-lg shadow-lg bg-neutral-700">
            <Image className="rounded-t-lg" src={`https://via.placeholder.com/600x400?text=${titleForImage}`} width="600" height="400" alt={title} />
          <Link href={`/posts/${postId}`}>
            <div className="p-4"></div>
            <h4 className="text-xl text-neutral-50 font-medium">{title}</h4>
            <p className="text-neutral-300">{body.slice(0,50)}</p>
          </Link>
        </li>
    )
}