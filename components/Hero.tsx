import Image from "next/image"
import React from "react"
import { Button } from "./ui/button"
import Link from "next/link"
import Navbar from "./Navbar"

const Hero = () => {
  return (
    <section className='relative h-[650px]'>
      <Navbar />
      <Image
        src='/images/Hero-bg.jpg'
        alt=''
        width={500}
        height={500}
        className='absolute top-0 left-0 w-full h-full object-cover'
      />
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-20'></div>
      <div className='absolute top-0 left-0 w-full h-full grid grid-cols-1 md:grid-cols-2 place-items-center '>
        <div className='text-center md:text-left px-16 space-y-4'>
          <h1 className='text-6xl font-bold text-white'>
            Mocne fundamenty, trwałe rezultaty
          </h1>
          <p className='text-white text-xl'>
            Nasz zespół tworzy przemyślane, nowoczesne przestrzenie, które łączą
            w sobie piękno, funkcjonalność i zrównoważony rozwój dla każdego
            klienta, któremu służymy.
          </p>
          <Button asChild className='text-xl h-14 px-8 rounded-full cursor-pointer'>
            <Link href="#contact">Rozpocznij projekt</Link>
          </Button>
        </div>
        <div className="flex flex-col items-center gap-4 bg-background self-end p-8 rounded-t-lg">
          <h1 className="text-4xl font-bold">O naszym studiu</h1>
          <p className='text-xl text-center'>
            Studio architektury i wnętrz, które tworzy wyjątkowe i trwałe
            przestrzenie, w których klienci mogą się rozwijać.
          </p>
          <div className="w-full flex flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center gap-2"><span className="text-3xl text-primary font-bold">73 +</span> <span> Zakończone projekty</span></div>
            <div className="flex flex-col items-center gap-2"><span className="text-3xl text-primary font-bold">1685+</span> <span> Zadowoleni klienci</span></div>
            <div className="flex flex-col items-center gap-2"><span className="text-3xl text-primary font-bold">5 tysięcy</span> <span> Spełnione marzenia</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
