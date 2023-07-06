import style from './../styles/Home.module.css'

import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Head>
      <title>Pagina Principal</title>
      <meta name='keywords' content="Roupas, calçados, bonés"></meta>
      <meta
        name="description"
        content='Encontre seu ideal'
      ></meta>
    </Head> 
    <div>
        <h1 className={style.title}>Hello World Next.js</h1>
        <Image 
          src="/images/city.jpg" 
          width={800}
          height={400}
          alt='City in night'
        />
      </div>
    </>
  )
}
