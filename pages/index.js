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
          <img style={{borderRadius:"50%", border:"2px solid #ccc"}} src="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-19/s150x150/92373161_211333956788365_8151595336486354944_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_ohc=ShE93RhfmMEAX-ZsUKH&oh=3ac09e452b4466a2d415c098b22855b7&oe=5FAA1F26" alt=""/>
        </div>
        <h1 className={styles.title}>
          Welcome to, {' '}
          <code className={styles.code}>Meishashoes.id!</code>
        </h1>

        <p className={styles.description}>
        👋 Hi Sister & Ladies, Lagi cari tas 👜 & sepatu 👠 branded?! Kami menjual produk ex-counter dari brand terkenal Zara, Charles & Keith, Guess, Pedro, dll dengan harga mulai dari 300 ribuan 🤩💰 dan udah pasti original 💯%. Silahkan klik link yang ada di bawah ini 👇👇 untuk kepoin kita lebih lanjut. Happy Shopping!!🛒 
        </p>

        <div className={styles.grid}>
        <a href="https://bit.ly/meishashoes" className={styles.card}>
            <h4>💬 Pesan Cepat? Chat Kami 💬</h4>
            <div className={styles.hands}></div>
          </a>

          <a href="https://www.instagram.com/meishashoes.id/" className={styles.card}>
            <h4>😍 Produk terbaru 😍</h4>
          </a>

          <a
            href="https://www.instagram.com/stories/highlights/17869167259957944/"
            className={styles.card}
          >
            <h4>❤️ Testimonial Kami ❤️</h4>
          </a>

          <a
            href="https://bit.ly/meishashoes"
            className={styles.card}
          >
            <h4>✔️ Gabung Dropship/Reseller ✔️</h4>
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
