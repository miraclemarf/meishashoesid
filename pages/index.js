import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meishashoes.id - WOMAN BRANDED SHOES & BAG AUTHENTIC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <img style={{"border-radius":"50%", border:"2px solid #ccc"}} src="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-19/s150x150/92373161_211333956788365_8151595336486354944_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_ohc=ShE93RhfmMEAX-ZsUKH&oh=3ac09e452b4466a2d415c098b22855b7&oe=5FAA1F26" alt=""/>
        </div>
        <h1 className={styles.title}>
          Welcome to, {' '}
          <code className={styles.code}>Meishashoes.id!</code>
        </h1>

        <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h4>Our Latest Catalogue &rarr;</h4>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h4>Chat us for Fast Order &rarr;</h4>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h4>Join us to be a Reseller &rarr;</h4>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h4>Feels free for Complaints &rarr;</h4>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by @meishashoes.id - 2020
        </a>
      </footer>
    </div>
  )
}
