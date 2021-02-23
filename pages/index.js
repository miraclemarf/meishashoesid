import Head from 'next/head'
import InstagramEmbed from 'react-instagram-embed';

import IgEmbed from '../components/igEmbed';
import '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={'container'}>
      <Head>
        <title>Meishashoes.id - WOMAN BRANDED SHOES & BAG AUTHENTIC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'main'}>
        <div className={'logoPro'} style={{ textAlign: "center" }}>
          <img style={{ borderRadius: "50%", border: "2px solid #ccc" }} src="/hlimg.jpg" alt="" />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 className={'title'}>
            Welcome to, {' '}
            <code className={'code'}>Meishashoes.id!</code>
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>

          <p style={{ fontSize: "1em" }} className={'description'}>
            👋 Hai Sister, lagi cari tas 👜 dan sepatu 👠 branded ?! Kami menjual produk sisa counter dari brand terkenal Zara, Charles & Keith, Guess, Pedro dengan harga 70% lebih murah dari counter di Mall!! 🤩💰 Harga mulai dari 300 ribuan dan udah pasti dijamin barang original 💯%. Meishashoes.id berdiri sejak Agustus 2019 dan sudah ratusan testimoni yang puas belanja dengan kami. Kalian penasaran sama produk yg kita jual?! Silahkan hubungi kami di <b>Facebook <a href="https://bit.ly/fb-meishashoesid" style={{ borderBottom: "1px solid" }} target="_blank" rel="noopener noreferrer">Meishashoes.id</a> / Whatsapp <a onClick={() => { fbq('track', 'Contact'); }} href="https://bit.ly/meishashoes" style={{ borderBottom: "1px solid" }} target="_blank" rel="noopener noreferrer"> 081513118658</a></b> dengan cara klik link yang ada di bawah ini 👇👇 untuk mengetahui lebih lanjut. Happy Shopping Sis!! 🛒
        </p>
        </div>
        <div style={{ marginBottom: "1.5em", marginTop: "2.5em", textAlign: "center" }}>
          <h2 style={{ textTransform: "uppercase", margin: "0" }}>PROMO FEBRUARY!!</h2>
        </div>
        <div style={{ textAlign: "center" }}>
          <a onClick={() => { fbq('track', 'Contact'); }} href="https://bit.ly/meishashoes" target="_blank" rel="noopener noreferrer">
            <img className={'promo'} src="/promo-feb.gif" style={{ maxWidth: "40%" }} />
          </a>
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
        <div className={'grid'}>
          <a id="btn-order" href="https://bit.ly/meishashoes" target="_blank" className={'card'}>
            <h4>💬 Pesan Cepat? Chat Kami 💬</h4>
            <div className={'hands'}></div>
          </a>

          <a id="btn-catalogig" href="https://bit.ly/fb-meishashoesid" target="_blank" className={'card'}>
            <h4>😍 Produk terbaru 😍</h4>
          </a>

          <a id="btn-highlightig"
            href="https://bit.ly/fb-meishashoesid"
            className={'card'} target="_blank"
          >
            <h4>❤️ Testimonial Kami ❤️</h4>
          </a>

          <a id="btn-joinres"
            href="https://bit.ly/meishashoes"
            className={'card'} target="_blank"
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
              <a href="https://bit.ly/fb-meishashoesid" target="_blank">
                <div style={{ marginRight: "10px", background: "white", borderRadius: "50%", width: "45px", height: "45px", display: "flex", alignItems: "center" }}><img style={{ width: "auto", margin: "auto" }} height={"22"} src="https://www.flaticon.com/svg/static/icons/svg/145/145802.svg" alt="" /></div>
              </a>
              {/* https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg */}
              <a href="https://vt.tiktok.com/ZSxbJMuE/" target="_blank">
                <div style={{ marginRight: "10px", background: "white", borderRadius: "50%", width: "45px", height: "45px", display: "flex", alignItems: "center" }}><img style={{ width: "auto", margin: "auto" }} height={"22"} src="https://www.flaticon.com/svg/static/icons/svg/3046/3046121.svg" alt="" /></div>
              </a>
              <a href="https://bit.ly/meishashoes" target="_blank">
                <div style={{ background: "white", borderRadius: "50%", width: "45px", height: "45px", display: "flex", alignItems: "center" }}><img style={{ width: "auto", margin: "auto" }} height={"22"} src="https://www.flaticon.com/svg/static/icons/svg/1384/1384055.svg" alt="" /></div>
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className={'footer'}>
        Powered by @meishashoes.id - 2021
      </footer>
    </div>
  )
}
