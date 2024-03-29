import Head from 'next/head'
import InstagramEmbed from 'react-instagram-embed';

import IgEmbed from '../components/igEmbed';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meishashoes.id - WOMAN BRANDED SHOES & BAG AUTHENTIC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logoPro} style={{ textAlign: "center" }}>
          <img style={{ borderRadius: "50%", border: "2px solid #ccc" }} src="/hlimg.jpg" alt="" />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 className={styles.title}>
            Welcome to, {' '}
            <code className={styles.code}>Meishashoes.id!</code>
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>

          <p style={{ fontSize: "1em" }} className={styles.description}>
            👋 Hai Sister, lagi cari tas 👜 dan sepatu 👠 branded ?! Kami menjual produk sisa counter dari brand terkenal Zara, Charles & Keith, Guess, Pedro dengan harga 70% lebih murah dari counter di Mall!! 🤩💰 Harga mulai dari 300 ribuan dan udah pasti dijamin barang original 💯%. Meishashoes.id berdiri sejak Agustus 2019 dan sudah ratusan testimoni yang puas belanja dengan kami. Kalian penasaran sama produk yg kita jual?! Silahkan kunjungi katalog produk kami di <b>Instagram <a onClick={() => { fbq('track', 'ViewContent'); }} href="https://instagram.com/meishashoes.id_produk/" style={{ borderBottom: "1px solid" }} target="_blank" rel="noopener noreferrer">@meishashoes.id_produk</a></b> dan <b>Shopee <a onClick={() => { fbq('track', 'ViewContent'); }} href="https://shopee.co.id/meishashoes.id" style={{ borderBottom: "1px solid" }} target="_blank" rel="noopener noreferrer">meishashoes.id</a></b>. Sister juga bisa tanya dan pesan cepat via <b>Whatsapp <a onClick={() => { fbq('track', 'Contact'); }} href="https://bit.ly/meishashoes" style={{ borderBottom: "1px solid" }} target="_blank" rel="noopener noreferrer">0815-1311-8658</a></b>. Klik link yang ada di bawah ini 👇👇 untuk mengetahui lebih lanjut. Happy Shopping Sis!! 🛒
        </p>
        </div>
        {/* <div style={{ marginBottom: "1.5em", marginTop: "2.5em", textAlign: "center" }}>
          <h2 style={{ textTransform: "uppercase", margin: "0" }}>Our Testimonials</h2>
        </div>
        <div style={{ display: "block" }} >
          <IgEmbed />
        </div> */}
        <div style={{ marginTop: "3em", textAlign: "center" }}>
          <h2 style={{ textTransform: "uppercase", margin: "0" }}>KLIK MENU 👇👇</h2>
        </div>
        <div className={styles.grid}>
          <a onClick={() => { fbq('track', 'Contact'); }}  id="btn-order" href="https://bit.ly/meishashoes" target="_blank" className={styles.card}>
            <h4>💬 Pesan Cepat? Chat Kami 💬</h4>
            <div className={styles.hands}></div>
          </a>

          <a onClick={() => { fbq('track', 'ViewContent'); }}  id="btn-catalogig" href="https://shopee.co.id/meishashoes.id" target="_blank" className={styles.card}>
            <h4>😍 Produk terbaru 😍</h4>
          </a>

          <a onClick={() => { fbq('track', 'ViewContent'); }} id="btn-highlightig"
            href="https://instagram.com/meishashoes.id_produk/"
            className={styles.card} target="_blank"
          >
            <h4>❤️ Testimonial Kami ❤️</h4>
          </a>

          <a id="btn-joinres"
            href="https://bit.ly/meishashoes"
            className={styles.card} target="_blank"
          >
            <h4>✔️ Gabung Dropship/Reseller ✔️</h4>
          </a>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "3em" }}>
          <div style={{ display: "flex", alignContent: "center", alignItems: "center" }}>
            <div style={{ marginRight: "10px" }}>
              Follow Us :
          </div>
            <div style={{ display: "flex", alignItems: "center", alignContent: "center" }}>
              <a onClick={() => { fbq('track', 'ViewContent'); }} href="https://www.instagram.com/meisha_shoes.id" target="_blank">
                <div style={{ marginRight: "10px", background: "white", borderRadius: "50%", width: "45px", height: "45px", display: "flex", alignItems: "center" }}><img style={{ width: "auto", margin: "auto" }} height={"22"} src="/instagram.svg" alt="" /></div>
              </a>
              {/* https://www.flaticon.com/svg/static/icons/svg/145/145802.svg */}
              {/* https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg */}
              <a href="https://shopee.co.id/meishashoes.id" target="_blank">
                <div style={{ marginRight: "10px", background: "white", borderRadius: "50%", width: "45px", height: "45px", display: "flex", alignItems: "center" }}><img style={{ width: "auto", margin: "auto" }} height={"22"} src="/shopee-logo.png" alt="" /></div>
              </a>
              <a onClick={() => { fbq('track', 'Contact'); }} href="https://bit.ly/meishashoes" target="_blank">
                <div style={{ marginRight: "10px", background: "white", borderRadius: "50%", width: "45px", height: "45px", display: "flex", alignItems: "center" }}><img style={{ width: "auto", margin: "auto" }} height={"22"} src="/whatsapp.svg" alt="" /></div>
              </a>
              <a href="https://vt.tiktok.com/ZSxbJMuE/" target="_blank">
                <div style={{ background: "white", borderRadius: "50%", width: "45px", height: "45px", display: "flex", alignItems: "center" }}><img style={{ width: "auto", margin: "auto" }} height={"22"} src="/tik-tok.svg" alt="" /></div>
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by @meishashoes.id - 2021
      </footer>
    </div>
  )
}
