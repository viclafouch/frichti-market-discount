import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-yellow flex-1 bg-frichti-background bg-cover bg-no-repeat bg-center">
      <div className="p-10 flex flex-col items-center gap-y-5">
        <Image src="/logo-frichti.svg" width={100} height={100} alt="Frichti" />
        <Image
          src="/logo-frichti-market.png"
          width={600}
          height={46}
          alt="Frichti Market"
        />
        <div className="w-full max-w-xl">
          <div className="flex flex-col items-center gap-2 border-black border-solid border bg-white px-6 py-7">
            <p className="text-center text-3xl">
              <span className="uppercase font-bold">
                10€ pour votre 1ère commande
              </span>
              <br /> avec le code FRICHTIMARKET
            </p>
            <a
              className="bg-black text-white p-4 rounded-2xl"
              href="https://www.frichtimarket.com/r/NDQyMDE5"
              target="_blank"
              rel="noreferrer"
            >
              Je profite de mes 10€ offerts
            </a>
          </div>
        </div>
      </div>
      <div>
        <h1>Recevez 10euros de réduction sur votre première commande</h1>
      </div>
    </div>
  )
}

export default Home
