"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")
    console.log({ name, email, subject, message })
    toast.success("Wiadomość wysłana!", {
      description: "Dziękujemy za kontakt. Odezwiemy się wkrótce.",
    })
    e.currentTarget.reset()
  }
  return (
    <section id="contact" className='relative w-full min-h-[800px] flex items-center justify-center lg:justify-end px-4  lg:px-24 '>
      <Image
        src='/Images/contact.bg.jpg'
        alt='Contact Background'
        fill
        className='object-cover -z-10'
        priority
      />
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/20 -z-10" /> */}

      <Card className='relative z-10 w-full max-w-lg bg-white text-black border-none shadow-2xl p-2'>
        <CardHeader className='pb-2'>
          <CardTitle className='text-4xl font-bold leading-tight tracking-tight'>
            Masz pytania? <br />
            Skontaktuj się z nami!
          </CardTitle>
        </CardHeader>
        <CardContent className='pt-6'>
          <form className='space-y-5 pb-5' onSubmit={handleSubmit}>
            <Input
              placeholder='Nazwa'
              className='bg-transparent border-gray-400/50 h-12 px-4 placeholder:text-gray-500 text-base'
              name='name'
              required
            />
            <Input
              placeholder='E-mail'
              type='email'
              className='bg-transparent border-gray-400/50 h-12 px-4 placeholder:text-gray-500 text-base'
              name='email'
              required
            />
            <Input
              placeholder='Temat'
              className='bg-transparent border-gray-400/50 h-12 px-4 placeholder:text-gray-500 text-base'
              name='subject'
              required
            />
            <Textarea
              placeholder='Wiadomość'
              className='bg-transparent border-gray-400/50 min-h-[150px] p-4 placeholder:text-gray-500 text-base resize-none'
              name='message'
              required
            />
            <Button className='w-full bg-[#cfa554] hover:bg-[#b58f44] text-white font-bold text-lg h-12 transition-colors mt-2'>
              Wyślij wiadomość
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

export default Contact
