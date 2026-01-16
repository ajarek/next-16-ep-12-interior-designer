import Image from "next/image"
import React from "react"

const Marquee = () => {
  const marqueeItems = [
    { id: 1, text: "Domy zbudowane na całe życie" },
    { id: 2, text: "Komfortowe wnętrze do życia" },
    { id: 3, text: "Przestrzenie, które rozwijają się z Tobą" },
    { id: 4, text: "Projektowane do życia na zawsze" },
    { id: 5, text: "Szybkie, modernistyczne projekty" },
  ]

  return (
    <div className='relative flex py-6 overflow-x-hidden bg-transparent border-y border-black/5'>
      <div className='flex animate-marquee whitespace-nowrap gap-10'>
        {/* First set of items */}
        {marqueeItems.map((item) => (
          <div key={item.id} className='flex items-center gap-8 px-4'>
            <h2 className='marquee-text text-5xl font-bold text-transparent [-webkit-text-stroke:1px_var(--color-foreground)]'>
              {item.text}
            </h2>
            <Image
              src='/images/star-shapp.png'
              alt='Icon'
              width={40}
              height={40}
              className='mr-4'
            />
          </div>
        ))}
        {/* Duplicate set of items for seamless looping */}
        {marqueeItems.map((item) => (
          <div key={`dup-${item.id}`} className='flex items-center gap-8 px-4'>
            <h2 className='marquee-text text-5xl font-bold text-transparent [-webkit-text-stroke:1px_var(--color-foreground)]'>
              {item.text}
            </h2>
            <Image
              src='/images/star-shapp.png'
              alt='Icon'
              width={40}
              height={40}
              className='mr-4'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee
