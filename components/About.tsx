import Image from "next/image"

const About = () => {
  return (
    <div
      id='about'
      className='flex flex-col items-center justify-center gap-8 mt-8 px-4 md:px-16 '
    >
      <p className='text-xl uppercase'>Projektowanie przestrzeni do życia</p>
      <h1 className='text-4xl font-bold'>
        Tworzymy przestrzenie z intencją i troską
      </h1>
      <div className='relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 place-items-center'>
        <div className='absolute hidden md:block left-1/2 top-0 h-full w-px bg-gray-300 -translate-x-1/2' />
        <div className=''>
          <Image
            src='/images/About-1.jpg'
            alt='about'
            width={728}
            height={552}
            className='rounded-lg'
          />
        </div>
        <div className='w-full flex flex-col items-center gap-4 p-4'>
          <h2 className='text-3xl font-bold text-left'>
            Przekształcanie przestrzeni za pomocą kreatywnej wizji
          </h2>
          <p>
            Forma łączy wizję z detalem, aby każda przestrzeń była wyjątkowa i
            przemyślana. Nasz zespół kieruje się pasją tworzenia miejsc, w
            których ludzie mogą się rozwijać, nawiązywać kontakty i wspólnie się
            rozwijać.
          </p>
        </div>
        <div className='w-full flex flex-col items-center gap-4 p-4'>
          <h2 className='text-3xl font-bold text-left'>
            Podnoszenie standardu przestrzeni dzięki przemyślanemu projektowi
          </h2>
          <p>
            W Form wierzymy w budowanie z myślą o ludziach i planecie. Nasza
            praca łączy zrównoważone idee z ponadczasowym pięknem, tworząc
            miejsca, które przetrwają lata.
          </p>
        </div>
        <div className='w-full flex flex-col items-center gap-4 p-4'>
          <Image
            src='/images/About-2.jpg'
            alt='about'
            width={728}
            height={552}
            className='rounded-lg'
          />
        </div>
        <div>
          <Image
            src='/images/About-3.jpg'
            alt='about'
            width={728}
            height={552}
            className='rounded-lg'
          />
        </div>
        <div className='w-full flex flex-col items-center gap-4 p-4'>
          <h2 className='text-3xl font-bold text-left'>
            Wymyślanie nowych sposobów kształtowania przyszłości
          </h2>
          <p>
            Cenimy ścisłą współpracę i otwarte, kreatywne umysły. Nasi
            projektanci i architekci ściśle współpracują z klientami, aby
            tworzyć przestrzenie, które emanują świeżością i trwałością.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
