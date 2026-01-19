"use client"

import Logo from "./Logo"
import Link from "next/link"
import { ModeToggle } from "@/components/ModeToggle"
import MobileNavbar from "./MobileNavbar"
import { Phone } from "lucide-react"
import { motion } from "framer-motion"

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

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='fixed top-0 z-50 w-full h-16 flex items-center justify-between px-8 max-sm:px-4 bg-background/50 backdrop-blur-sm  '
    >
      <Logo />

      <div className='flex items-center gap-8 max-lg:hidden'>
        {links.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
          >
            <Link
              href={item.href}
              className='text-xl hover:text-primary transition-colors focus:text-primary focus:underline focus:underline-offset-8'
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </div>

      <div className='flex items-center gap-8'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className='flex items-center gap-4'
        >
          <MobileNavbar />
          <ModeToggle />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Navbar
