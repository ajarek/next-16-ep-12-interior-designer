"use client"

import { Menu, Phone, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "./ui/button"

const links = [
  {
    href: "#expertise",
    label: "Ekspertyza",
  },
  {
    href: "#about",
    label: "O nas",
  },
  {
    href: "#references",
    label: "Referencje",
  },
  {
    href: "#faqs",
    label: "Pytania",
  },
  {
    href: "#contact",
    label: "Kontakt",
  },
  {
    href: "tel:502525252",
    label: (
      <div className='flex items-center gap-2'>
        <Phone className='w-5 h-5' /> 502525252
      </div>
    ),
  },
]

const MobileNavbar = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <div className='lg:hidden'>
      <Button
        variant='ghost'
        size='icon'
        onClick={toggle}
        className='relative z-50'
        aria-label='Toggle menu'
      >
        {open ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
      </Button>

      {open && (
        <div className='fixed top-16 left-0 w-full h-[calc(100vh-4rem)] z-40 bg-background/90 backdrop-blur-sm flex flex-col items-center justify-center gap-8 animate-in fade-in zoom-in-95 duration-200'>
          <nav className='flex flex-col items-center gap-8 text-center'>
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setOpen(false)}
                className='text-xl hover:text-primary focus:text-primary focus:underline focus:underline-offset-8'
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileNavbar
