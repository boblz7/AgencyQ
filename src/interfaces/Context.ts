import { IComment } from './Comments'
import { IPostsItem } from './Posts'
import { IUser, IUserAndPosts } from './Users'

export interface IPostsContext {
  users?: IUser[]
  posts?: IPostsItem[]
  comments?: IComment[]
  searchPosts: IUserAndPosts[] | []
  search(search: string): void
}

export interface IContext {
  users: IUser[]
  posts: IPostsItem[]
  comments: IComment[]
  componentMessage: string
  componentName?: string
  children: React.ReactNode
}
