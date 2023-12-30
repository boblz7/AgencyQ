import Post from '@components/Post/Post'
import { API_URL } from '@config/api'
import { IPostsItem } from '@interfaces/Posts'
import postsStyles from '../../posts/page.module.scss'
import styles from './page.module.scss'
import Link from 'next/link'
import AppSvg from '@components/AppSvg/AppSvg'
import { Suspense } from 'react'
import LoadingSkeleton from '@components/Post/LoadingSkeleton'
import { CMessage } from '@constants/main'

export async function generateStaticParams() {
  const posts: Array<IPostsItem> = await fetch(`${API_URL}/posts`).then((res) => res.json())

  return posts.map((post) => ({
    slug: `${post.id}`,
  }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post: IPostsItem = await fetch(`${API_URL}/posts/${params.slug}`).then((res) => res.json())

  return (
    <div className={styles.postContainer}>
      <div className={styles.backContainer}>
        <Link href={`/posts`} scroll={false}>
          <AppSvg componentMessage={CMessage} path={'/chevron-left.svg'} size={20} />
          Back to all posts
        </Link>
      </div>

      <div className={postsStyles.postsContainer}>
        <Suspense fallback={<LoadingSkeleton isAlone componentMessage={CMessage} />}>
          <Post {...post} isAlone componentMessage={CMessage} />
        </Suspense>
      </div>
    </div>
  )
}
