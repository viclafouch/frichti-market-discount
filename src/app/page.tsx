import React from 'react'
import Image from 'next/image'
import Script from 'next/script'

const LINK = 'https://www.frichtimarket.com/r/NDQyMDE5'
const AMOUNT_IN_EUROS = 10

const Home = () => {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-GJGLYTKB81" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GJGLYTKB81');
        `}
      </Script>
      <div className="flex flex-col justify-center items-center bg-yellow flex-1 bg-frichti-background bg-cover bg-no-repeat bg-center">
        <div>
          <div className="px-10 flex flex-col items-center gap-y-2">
            <Image
              src="/logo-frichti.svg"
              width={100}
              height={100}
              alt="Frichti"
            />
            <Image
              src="/logo-frichti-market.png"
              width={600}
              height={46}
              alt="Frichti Market"
            />
          </div>
          <div className="px-10 w-full mt-10">
            <div className="w-full max-w-xl mx-auto relative">
              <span className="absolute w-full h-full bg-black" />
              <div className="flex flex-col items-center gap-4 border-black border-solid border bg-white px-6 py-7 z-10 relative right-2 bottom-2">
                <p className="text-center text-2xl">
                  <span className="uppercase font-bold">
                    {AMOUNT_IN_EUROS}€ pour votre 1ère commande
                  </span>
                  <br /> en cliquant sur le bouton ci-dessous
                </p>
                <a
                  className="text-center bg-black text-white p-4 rounded-full block"
                  href={LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  Je profite de mes {AMOUNT_IN_EUROS}€ offerts
                </a>
              </div>
            </div>
          </div>
          <p className="text-center italic text-black mt-10">
            Un bandeau noir apparaîtra sur le site vous indiquant que <br /> le
            bon de <b>{AMOUNT_IN_EUROS}€ a bien été pris en compte</b>.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
