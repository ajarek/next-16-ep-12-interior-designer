"use client"

import { Menu, Phone, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "./ui/button"

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
      >
        {open ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
      </Button>

      {open && (
        <div className='fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 animate-in fade-in zoom-in-95 duration-200'>
          <nav className='flex flex-col items-center gap-8 text-center'>
            <Link
          href='#expertise'
          className='text-xl hover:text-primary focus:text-primary focus:underline focus:underline-offset-8'
        >
         Ekspertyza
        </Link>
        <Link
          href='#references'
          className='text-xl hover:text-primary focus:text-primary focus:underline focus:underline-offset-8'
        >
          Referencje
        </Link>
        <Link
          href='#faqs'
          className='text-xl hover:text-primary focus:text-primary focus:underline focus:underline-offset-8'
        >
          Pytania
        </Link>
        <Link
          href='#contact'
          className='text-xl hover:text-primary focus:text-primary focus:underline focus:underline-offset-8'
        >
          Kontakt
        </Link>
        <Link
          href='tel:502525252'
          className='flex items-center gap-2 text-xl hover:text-primary focus:text-primary focus:underline focus:underline-offset-8'
        >
          <Phone /><span>502525252</span>
        </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileNavbar
