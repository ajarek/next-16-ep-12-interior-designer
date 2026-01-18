import Image from "next/image"

const images = [
  {
    src: "/images/gallery-1.jpg",
    alt: "1",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "2",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "3",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "4",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "5",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "6",
  },
]

const Gallery = () => {
  return (
    <div className='relative w-full min-h-[360px] flex flex-col items-center justify-start gap-8 px-4 '>
      <h1 className='text-4xl font-bold text-left lg:text-center'>
        Obserwuj nas na Instagramie
      </h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={500}
            height={500}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
