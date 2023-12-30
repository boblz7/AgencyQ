import styles from './page.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <div>
        <h1>Welcome</h1>

        <p>Click the link below to continue</p>
      </div>

      <Link href={'/posts'}>Go to Posts</Link>
    </div>
  )
}
