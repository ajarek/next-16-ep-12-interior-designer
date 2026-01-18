import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import Countdown from "./Countdown"
import { Plus } from "lucide-react"

const Hero = () => {
  return (
    <section className='relative min-h-screen  md:mb-0 mb-8'>
      <Image
        src='/images/Hero-bg.jpg'
        alt=''
        width={500}
        height={500}
        className='absolute top-0 left-0 w-full h-full object-cover'
      />
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-20'></div>
      <div className='relative w-full min-h-screen grid grid-cols-1 md:grid-cols-2 place-items-center '>
        <div className='text-center mt-24 md:mt-0 md:text-left px-16 space-y-4'>
          <h1 className='md:text-6xl text-4xl font-bold text-white'>
            Mocne fundamenty, trwałe rezultaty
          </h1>
          <p className='text-white text-xl'>
            Nasz zespół tworzy przemyślane, nowoczesne przestrzenie, które łączą
            w sobie piękno, funkcjonalność i zrównoważony rozwój dla każdego
            klienta, któremu służymy.
          </p>
          <Button
            asChild
            className='md:text-xl text-lg md:h-14 h-10 px-8 rounded-full cursor-pointer mb-8'
          >
            <Link href='#contact'>Rozpocznij projekt</Link>
          </Button>
        </div>
        <div className='flex flex-col items-center gap-4 bg-background self-end p-8 rounded-t-lg'>
          <h1 className='text-4xl font-bold'>O naszym studiu</h1>
          <p className='text-xl text-center'>
            Studio architektury i wnętrz, które tworzy wyjątkowe i trwałe
            przestrzenie, w których klienci mogą się rozwijać.
          </p>
          <div className='w-full flex flex-wrap justify-between items-center gap-4'>
            <div className='flex flex-col items-center gap-2'>
              <span className='text-3xl text-primary font-bold flex items-center gap-2'>
                <Countdown count={73} />
                <Plus className='w-8 h-8' />
              </span>{" "}
              <span> Zakończone projekty</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <span className='text-3xl text-primary font-bold flex items-center gap-2'>
                <Countdown count={1685} />
                <Plus className='w-8 h-8' />
              </span>{" "}
              <span> Zadowoleni klienci</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <span className='text-3xl text-primary font-bold flex items-center gap-2'>
                <Countdown count={5000} />
                <Plus className='w-8 h-8' />
              </span>{" "}
              <span> Spełnione marzenia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
