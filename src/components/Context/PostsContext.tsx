'use client'

import { createContext, useContext, useState } from 'react'
import { IUserAndPosts } from '@interfaces/Users'
import { IContext, IPostsContext } from '@interfaces/Context'
import { consoleOnRender } from '@utils/sharedFncs'

export const PostsContext = createContext<IPostsContext | null>(null)

export const usePosts = (): IPostsContext => {
  const context = useContext(PostsContext)

  if (!context) throw new Error('PostsContext cannot be null')

  return context
}

export default function Context({
  users,
  posts,
  comments,
  componentMessage,
  componentName = 'Context',
  children,
}: IContext) {
  consoleOnRender(componentMessage, componentName)

  const filteredUsers = users.map((user): IUserAndPosts => {
    const userPosts = posts.filter((post) => post.userId === user.id)
    const postsWithComments = userPosts.map((post) => ({
      post,
      comments: comments.filter((comment) => comment.postId === post.id),
    }))

    return { ...user, posts: postsWithComments }
  })

  const [searchPosts, setSearchPosts] = useState<IUserAndPosts[]>(filteredUsers)

  const search = (term: string) => {
    const filtered = filteredUsers.filter((item) => item.name.includes(term))

    setSearchPosts([...filtered])
  }

  return <PostsContext.Provider value={{ searchPosts, search, posts, users }}>{children}</PostsContext.Provider>
}
