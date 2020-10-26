import Head from 'next/head'
import InstagramEmbed from 'react-instagram-embed';
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
          <img style={{ borderRadius: "50%", border: "2px solid #ccc" }} src="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-19/s150x150/92373161_211333956788365_8151595336486354944_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_ohc=ShE93RhfmMEAX-ZsUKH&oh=3ac09e452b4466a2d415c098b22855b7&oe=5FAA1F26" alt="" />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 className={'title'}>
            Welcome to, {' '}
            <code className={'code'}>Meishashoes.id!</code>
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>

          <p className={'description'}>
            👋 Hai Sister, Mau tas 👜 dan sepatu 👠 branded ?! Kami menjual produk sisa counter dari brand terkenal Zara, Charles & Keith, Guess, Pedro dengan harga 70% lebih murah dari counter di Mall!! 🤩💰 Harga mulai dari 300 ribuan dan udah pasti dijamin barang original 💯%. Meishashoes.id berdiri sejak Agustus 2019 dan sudah ratusan testimoni yang puas belanja dengan kami. Kalian penasaran sama produk yg kita jual?! Silahkan hubungi kami di <b>Instagram <a href="https://www.instagram.com/meishashoes.id/" style={{borderBottom:"1px solid"}} target="_blank" rel="noopener noreferrer">@meishashoes.id</a> / Whatsapp <a href="https://bit.ly/meishashoes" style={{borderBottom:"1px solid"}} target="_blank" rel="noopener noreferrer"> 081513118658</a></b> dengan cara klik link yang ada di bawah ini 👇👇 untuk mengetahui lebih lanjut. Happy Shopping Sis!! 🛒
        </p>
        </div>
        <div style={{ marginBottom: "1.5em", marginTop: "2.5em", textAlign: "center" }}>
          <h2 style={{ textTransform: "uppercase", margin: "0" }}>Promo Free Ongkir!!</h2>
        </div>
        <div style={{textAlign:"center"}}>
          <img style={{width:"100%", maxWidth:"420px"}} src="https://instagram.fcgk11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/122179192_811442399416946_985834627244650517_n.jpg?_nc_ht=instagram.fcgk11-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Au1HJm139bUAX8AcB_v&_nc_tp=24&oh=314c5745874f502b49c7ab1211480196&oe=5FC1F58D" />

        </div>

        <div style={{marginTop: "3em", textAlign: "center" }}>
          <h2 style={{ textTransform: "uppercase", margin: "0" }}>KLIK MENU 👇👇</h2>
        </div>
        <div className={'grid'}>
          <a id="btn-order" href="https://bit.ly/meishashoes" target="_blank" className={'card'}>
            <h4>💬 Pesan Cepat? Chat Kami 💬</h4>
            <div className={'hands'}></div>
          </a>

          <a id="btn-catalogig" href="https://www.instagram.com/meishashoes.id/" target="_blank" className={'card'}>
            <h4>😍 Produk terbaru 😍</h4>
          </a>

          <a id="btn-highlightig"
            href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTE5MzE1OTEzNDY1NTY5?igshid=9r6qaprhydv3&story_media_id=2408560414629865886_265873076"
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
        <div style={{ display: "flex", justifyContent: "center", marginTop:"3em" }}>
          <div style={{ display: "flex", alignContent: "center", alignItems: "center" }}>
            <div style={{ marginRight: "10px" }}>
              Follow Us :
          </div>
            <div style={{ display: "flex", alignItems: "center", alignContent: "center" }}>
              <a href="https://www.instagram.com/meishashoes.id/" target="_blank">
                <div style={{ marginRight: "10px", background: "white", borderRadius: "50%", width: "45px", height: "45px", display: "flex", alignItems: "center" }}><img style={{ width: "auto", margin: "auto" }} height={"22"} src="https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg" alt="" /></div>
              </a>
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
          Powered by @meishashoes.id - 2020
      </footer>
    </div>
  )
}
