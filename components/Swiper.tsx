"use client"

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const swiperData = [
  {
    id: 1,
    name: "Jan Kowalski",
    profession: "Inżynier wnętrz",
    message:
      "Uwielbiam mój nowoczesny salon. Czyste linie, naturalne barwy i minimalistyczne wnętrza - jest piękny i spokojny.",
    image: "/images/testimonials-1.jpg",
  },
  {
    id: 2,
    name: "Anna Nowak",
    profession: "Projektantka",
    message:
      "Projekt przeszedł moje najśmielsze oczekiwania. Terminowość i profesjonalizm na najwyższym poziomie.",
    image: "/images/testimonials-2.jpg",
  },
  {
    id: 3,
    name: "Piotr Wiśniewski",
    profession: "Architekt",
    message:
      "Współpraca była czystą przyjemnością. Efekt końcowy zachwyca każdego, kto odwiedza moje biuro.",
    image: "/images/testimonials-1.jpg",
  },
]

const SwiperComponent = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className='pb-12' // Add padding bottom for pagination/scrollbar if needed
    >
      {swiperData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Card className='mx-auto max-w-2xl border-none shadow-none bg-transparent'>
            <CardContent className='flex flex-col items-center text-center gap-6 p-6'>
              <p className='text-lg text-muted-foreground italic'>
                &quot;{slide.message}&quot;
              </p>
              <div className='flex flex-col items-center gap-3'>
                <Image
                  src={slide.image}
                  alt={slide.name}
                  width={60}
                  height={60}
                  className='object-cover rounded-full aspect-square'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold text-foreground'>{slide.name}</p>
                  <p className='text-sm text-muted-foreground'>
                    {slide.profession}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperComponent
