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
        <div style={{ textAlign: "center" }}>
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
            👋 Hai sisters lagi cari tas 👜, sepatu 👠 branded ?! Kami menjual produk sisa counter dari brand terkenal Zara, Charles & Keith, Guess, Pedro dengan harga 70% lebih murah dari counter di Mall!! 🤩💰 Harga mulai dari 300 ribuan dan udah pasti dijamin barang original 💯%. Meishashoes.id berdiri sejak Agustus 2019 dan sudah ratusan testimoni yang puas belanja dengan kami. Kalian penasaran sama produk yg kita jual?! Silahkan hubungi kami di <b>IG / WA dengan cara klik link yang ada di bawah ini</b> 👇👇 untuk mengetahui produk lebih lanjut. Happy Shopping Sis!! 🛒
        </p>
        </div>
        <div style={{ marginBottom: "2em", marginTop: "2.5em", textAlign: "center" }}>
          <h2 style={{ textTransform: "uppercase", margin: "0" }}>Testimonial Partner</h2>
        </div>
        <div className={'sliders'} style={{ display: "flex", alignContent: "center", margin: "auto", maxWidth: "1024px"}}>
          <div id="ig-zas" style={{ margin: "0", display:"none"}}>
            <InstagramEmbed
              url='https://www.instagram.com/p/CGqE3_4h03m/'
              maxWidth={320}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => { }}
              onSuccess={() => { }}
              onAfterRender={() => { setTimeout(function(){document.querySelector('#ig-zas').style.display = "block" }, 2000) }}
              onFailure={() => { }}
            />
          </div>
          <div id="ig-syah" style={{ margin: "0 1.5em", display:"none" }}>
            <InstagramEmbed
              url='https://www.instagram.com/p/CGqEUoABYW3/'
              maxWidth={320}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => { }}
              onSuccess={() => { }}
              onAfterRender={() => { setTimeout(function(){document.querySelector('#ig-syah').style.display = "block" }, 2000) }}
              onFailure={() => { }}
            />
          </div>
          <div id="ig-nis" style={{ margin: "0", display:"none" }}>
            <InstagramEmbed
              url='https://www.instagram.com/p/CGqAnAjhGpX/'
              maxWidth={320}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => { }}
              onSuccess={() => { }}
              onAfterRender={() => { setTimeout(function(){document.querySelector('#ig-nis').style.display = "block" }, 2000) }}
              onFailure={() => { }}
            />
          </div>
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
