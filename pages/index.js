import Head from 'next/head'
import '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={'container'}>
      <Head>
        <title>Meishashoes.id - WOMAN BRANDED SHOES & BAG AUTHENTIC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'main'}>
        <div>
          <img style={{borderRadius:"50%", border:"2px solid #ccc"}} src="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-19/s150x150/92373161_211333956788365_8151595336486354944_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_ohc=ShE93RhfmMEAX-ZsUKH&oh=3ac09e452b4466a2d415c098b22855b7&oe=5FAA1F26" alt=""/>
        </div>
        <h1 className={'title'}>
          Welcome to, {' '}
          <code className={'code'}>Meishashoes.id!</code>
        </h1>
        <p className={'description'}>
        👋 Hai sisters lagi cari tas 👜, sepatu 👠 branded ?! Kami menjual produk sisa counter dari brand terkenal Zara, Charles & Keith, Guess, Pedro dengan harga 70% lebih murah dari counter di Mall!! 🤩💰 Harga mulai 300 ribuan dan udah pasti dijamin barang original 💯%. Kita trusted seller sejak Agustus 2019, sudah ratusan testimoni yang puas belanja sama kita. Kalian penasaran sama produk yg kita jual?! Silahkan klik link yang ada di bawah ini 👇👇 untuk mengetahui produk lebih lanjut. Happy Shopping Sis!! 🛒 
        </p>
        <div style={{display:"flex", alignContent:"center", alignItems:"center"}}>
          <div style={{marginRight:"10px"}}>
          Follow Us :
          </div>
          <div style={{display:"flex", alignItems:"center", alignContent:"center"}}>
            <a href="https://www.instagram.com/meishashoes.id/" target="_blank">
            <div style={{marginRight:"10px" , background:"white", borderRadius:"50%", width:"45px", height:"45px", display:"flex", alignItems:"center"}}><img style={{width:"auto", margin:"auto"}} height={"22"} src="https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg" alt=""/></div>
            </a>
            <a href="https://vt.tiktok.com/ZSxbJMuE/" target="_blank">
            <div style={{background:"white", borderRadius:"50%", width:"45px", height:"45px", display:"flex", alignItems:"center"}}><img style={{width:"auto", margin:"auto"}} height={"22"} src="https://www.flaticon.com/svg/static/icons/svg/3046/3046121.svg" alt=""/></div>
            </a>
          </div>
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
      </main>

      <footer className={'footer'}>
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
