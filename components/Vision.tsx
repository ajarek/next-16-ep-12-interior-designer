import Image from "next/image"

const partners = [
  {
    src: "/images/partner-1.webp",
    alt: "Vision",
  },
  {
    src: "/images/partner-2.webp",
    alt: "Vision",
  },
  {
    src: "/images/partner-3.webp",
    alt: "Vision",
  },
  {
    src: "/images/partner-4.webp",
    alt: "Vision",
  },
  {
    src: "/images/partner-5.webp",
    alt: "Vision",
  },
  {
    src: "/images/partner-6.webp",
    alt: "Vision",
  },
]

const Vision = () => {
  return (
    <div className='container mx-auto'>
      <div className='relative w-full h-[500px]  mt-8 flex items-center justify-center'>
        <Image
          src='/images/work-banner-bg.jpg'
          alt='Vision'
          fill
          sizes='100vw'
          className='w-full h-full object-cover'
        />

        <h1 className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-8xl font-bold text-white text-center z-10'>
          Zmień swoją wizję dzięki doświadczeniu Partnerów
        </h1>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30'></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6'>
        {partners.map((partner, index) => (
          <div
            key={index}
            className='relative w-full h-[50px] md:h-[100px] border-b-2 border-r-2 border-secondary opacity-50 hover:opacity-100 transition-opacity duration-300'
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              fill
              className='w-full h-full object-contain'
              sizes='(max-width: 768px) 100vw, 33vw'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Vision
