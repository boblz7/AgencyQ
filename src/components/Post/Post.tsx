import { IPosts } from '@interfaces/Posts'
import { IUser } from '@interfaces/Users'
import { IComment } from '@interfaces/Comments'
import { consoleOnRender, getData } from '@utils/sharedFncs'
import { API_URL } from '@config/api'
import styles from './post.module.scss'
import styleVariable from '@styles/variables.module.scss'
import Link from 'next/link'
import AppSvg from '@components/AppSvg/AppSvg'

export default async function Post({
  userId,
  id,
  title,
  body,
  isAlone = false,
  getUser,
  getComments,
  componentMessage,
  componentName = 'Post',
}: IPosts) {
  consoleOnRender(componentMessage, componentName)

  const user: IUser = getUser || (await getData(`${API_URL}/users/${userId}`))
  const comments: IComment[] = getComments || (await getData(`${API_URL}/posts/${id}/comments`))

  const postUrl = !isAlone ? `/post/${id}` : ''

  return (
    <div className={`${styles.postsContainer} ${isAlone ? styles.postsContainerAlternate : ''}`}>
      <div className={styles.postContent}>
        <Link
          href={postUrl}
          style={{
            pointerEvents: isAlone ? 'none' : 'auto',
          }}
        >
          <div className={styles.userNameContainer}>
            <AppSvg
              componentMessage={componentMessage}
              path={'/external-link.svg'}
              color={styleVariable.primaryTextColor}
              size={16}
            />

            <p>{user.name}</p>
          </div>
          <div className={styles.postInfo}>
            <div className={styles.postTitle}>
              <h1>{title}</h1>
            </div>

            <div className={styles.postDesc}>
              <p>{body}</p>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.commentsContainer}>
        {comments.map((comment, i) => (
          <div className={styles.commentsItem} key={`Post${i}`}>
            <div className={styles.commentsItemName}>
              <h2>{comment.name}</h2>
            </div>

            <div className={styles.commentsItemDesc}>
              <p>{comment.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

;<style lang="scss" scoped></style>
