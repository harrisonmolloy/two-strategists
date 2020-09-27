import Head from 'next/head'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Two Strategists</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>test paragraph</p>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
