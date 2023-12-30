'use client'

import Post from '@components/Post/Post'
import styles from './page.module.scss'
import Search from '@components/Search/Search'
import { usePosts } from '../../components/Context/PostsContext'
import LoadingSkeleton from '@components/Post/LoadingSkeleton'
import { Suspense } from 'react'
import { CMessage } from '@constants/main'

export default function Page() {
  const context = usePosts()

  const orgPosts = context.searchPosts.map((x) => x.posts).flat()

  const posts = orgPosts.map((post) => ({
    ...post.post,
    getUser: context.users && context.users.find((user) => user.id === post.post.userId),
    getComments: post.comments,
  }))

  return (
    <div className={styles.postsContainer}>
      <Search componentMessage={CMessage} />

      <Suspense fallback={<LoadingSkeleton postNumber={2} componentMessage={CMessage} />}>
        {posts && posts.map((item, i) => <Post {...item} key={`PostsItem${i}`} componentMessage={CMessage} />)}
      </Suspense>
    </div>
  )
}
