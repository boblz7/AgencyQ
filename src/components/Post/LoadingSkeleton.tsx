import { consoleOnRender } from '@utils/sharedFncs'
import styles from './post.module.scss'
import { ILoadingPostSkeleton } from '@interfaces/LoadingSkeleton'

const commentsArray: undefined[] = [...Array(5)]

export default function LoadingSkeleton({
  isAlone = false,
  postNumber = 1,
  componentMessage,
  componentName = 'Loading Skeleton',
}: ILoadingPostSkeleton) {
  consoleOnRender(componentMessage, componentName)

  const postsArray: undefined[] = [...Array(postNumber)]

  return postsArray.map((post, i) => (
    <div
      key={`skeletonPost${i}`}
      className={`${styles.postsContainer} ${isAlone ? styles.postsContainerAlternate : ''} ${styles.skeletonLoader}`}
    >
      <div className={styles.postContent}>
        <div>
          <div className={styles.userNameContainer}>
            <p></p>
          </div>
          <div className={styles.postInfo}>
            <div className={styles.postTitle}>
              <h1></h1>
            </div>

            <div className={styles.postDesc}>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.commentsContainer}>
        {commentsArray.map((comment, i) => (
          <div key={`skeletonComment${i}`} className={styles.commentsItem}>
            <div className={styles.commentsItemName}>
              <h2></h2>
            </div>

            <div className={styles.commentsItemDesc}>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))
}
