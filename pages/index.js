import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kogecoin API endpoint</title>
        <meta name="description" content="Kogecoin API endpoint" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://kogecoin.io">Kogecoin</a> API Endpoint!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>api/stats.js</code>
        </p>

      </main>

    </div>
  )
}
