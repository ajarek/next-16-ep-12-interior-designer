import Image from "next/image"
import { Button } from "./ui/button"
import { Star } from "lucide-react"
import SwiperComponent from "./Swiper"

const Faqs = () => {
  return (
    <div className='w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mx-auto px-4'>
      <div className='relative w-full h-[540px]'>
        <Image
          src='/images/testimonials-bg.jpg'
          alt='faq'
          fill
          className='object-cover rounded-lg'
        />
      </div>
      <div className='w-full text-left '>
        <p className='text-xl uppercase'>Nasi klienci mówią</p>
        <h1 className='max-w-2xl text-2xl md:text-4xl '>
          Oto, co mówią:<br /> <span className='text-primary'>ciepłe słowa naszych klientów</span>
        </h1>
        <div className='flex items-center gap-2'>
          <div className="text-5xl">4,80</div>
          <div>
            <Button className='w-fit border-2 rounded-full'>
              <Star strokeWidth={3} className="w-6 h-6 text-white" />
              <Star strokeWidth={3} className="w-6 h-6 text-white" />
              <Star strokeWidth={3} className="w-6 h-6 text-white" />
              <Star strokeWidth={3} className="w-6 h-6 text-white" />
              <Star strokeWidth={3} className="w-6 h-6 text-white" />
            </Button>
          </div>
          <div>Od koncepcji do realizacji, zespół przekształcił moją wizję w zachwycającą, przytulną przestrzeń. Nie mógłbym być bardziej zadowolony!</div>
        </div>
        <SwiperComponent />
      </div>
    </div>
  )
}

export default Faqs
