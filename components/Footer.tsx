import Link from "next/link"
import { Facebook, Instagram, Dribbble, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className='bg-neutral-900 text-white py-16'>
      <div className='container mx-auto px-4 md:px-12 lg:px-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
          {/* Brand Column */}
          <div className='space-y-6'>
            <Link href='/' className='inline-block'>
              <h2 className='text-3xl font-bold tracking-wide'>
                Arch <span className='text-primary'>&Tekt</span>
              </h2>
            </Link>
            <p className='text-gray-400 text-sm leading-relaxed max-w-xs'>
              Form to studio architektoniczno-projektowe, które tworzy
              inspirujące przestrzenie. Tworzymy zrównoważone, szyte na miarę
              środowiska, które odzwierciedlają wartości i wizję klienta.
            </p>
            <div className='flex gap-4'>
              <SocialLink
                href='#'
                icon={<Facebook size={20} />}
                label='Facebook'
              />
              <SocialLink
                href='#'
                icon={<Dribbble size={20} />}
                label='Dribbble'
              />
              <SocialLink
                href='#'
                icon={<Instagram size={20} />}
                label='Instagram'
              />
              <SocialLink
                href='#'
                icon={<Twitter size={20} />}
                label='Twitter'
              />
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className='text-lg font-bold mb-6'>Menu</h3>
            <ul className='space-y-4 text-sm text-gray-400'>
              <li>
                <FooterLink href='/'>Dom</FooterLink>
              </li>
              <li>
                <FooterLink href='#about'>O nas</FooterLink>
              </li>
              <li>
                <FooterLink href='#expertise'>Ekspertyza</FooterLink>
              </li>
              <li>
                <FooterLink href='#testimonials'>Zaświadczenie</FooterLink>
              </li>
              <li>
                <FooterLink href='#contact'>Skontaktuj się z nami</FooterLink>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className='text-lg font-bold mb-6'>Najlepsze produkty</h3>
            <ul className='space-y-4 text-sm text-gray-400'>
              <li>
                <FooterLink href='#'>Krzesła</FooterLink>
              </li>
              <li>
                <FooterLink href='#'>Kredens</FooterLink>
              </li>
              <li>
                <FooterLink href='#'>Sofy</FooterLink>
              </li>
              <li>
                <FooterLink href='#'>Składowanie</FooterLink>
              </li>
              <li>
                <FooterLink href='#'>Tabele</FooterLink>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className='text-lg font-bold mb-6'>Kontakt</h3>
            <div className='space-y-6 text-sm text-gray-400'>
              <p>info@Example.com</p>
              <p>
                Nowy Jork — 245 West
                <br />
                29th Street, Suite 1201, NY
                <br />
                1000
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-neutral-800 text-center text-gray-500 text-sm'>
          <p>
            &copy; 2026. Wszelkie prawa zastrzeżone przez{" "}
            <span className='text-white font-semibold'>Arch &Tekt</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) => {
  return (
    <a
      href={href}
      aria-label={label}
      className='w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black hover:border-primary transition-colors duration-300'
    >
      {icon}
    </a>
  )
}

const FooterLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link
      href={href}
      className='hover:text-primary transition-colors duration-200'
    >
      {children}
    </Link>
  )
}

export default Footer
