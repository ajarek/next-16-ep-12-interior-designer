import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Button } from "./ui/button"

const Expertise = () => {
  return (
    <div
      id='expertise'
      className='flex flex-col items-center justify-center gap-8 mt-8 px-4 md:px-16 '
    >
      <p className='text-xl uppercase'>
        Nasza wyjątkowa wiedza specjalistyczna
      </p>
      <h1 className='max-w-2xl text-4xl md:text-6xl text-center font-bold'>
        Projektowanie i kształtowanie wyjątkowych przestrzeni
      </h1>
      <div className='w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8'>
        <Card className='w-full '>
          <CardHeader className='text-center'>
            <CardTitle className='text-xl font-bold'>Nowoczesna fasada</CardTitle>
            <CardDescription>Eleganckie linie spotykają się ze szkłem odblaskowym</CardDescription>
            
          </CardHeader>
          <CardContent>
            <Image src='/images/expertise-1.jpg' alt='nowoczesna fasada' width={500} height={500} className='w-full h-auto' />
          </CardContent>
          <CardFooter>
           <CardAction className='w-full'><Button className='w-full'>Dowiedz się więcej</Button></CardAction>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className='text-center'>
            <CardTitle className='text-xl font-bold'>Rzemiosło konstrukcyjne</CardTitle>
            <CardDescription>Budowanie ram z precyzją i wiedzą specjalistyczną</CardDescription>
                
          </CardHeader>
          <CardContent>
            <Image src='/images/expertise-2.jpg' alt='nowoczesna fasada' width={500} height={500} className='w-full h-auto' />
          </CardContent>
          <CardFooter>
           <CardAction className='w-full'><Button className='w-full'>Dowiedz się więcej</Button></CardAction>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className='text-center'>
            <CardTitle className='text-xl font-bold'>Kierownik projektu</CardTitle>
            <CardDescription>Kierowanie wizją poprzez wiedzę specjalistyczną</CardDescription>

          </CardHeader>
          <CardContent>
            <Image src='/images/expertise-3.jpg' alt='nowoczesna fasada' width={500} height={500} className='w-full h-auto' />
          </CardContent>
          <CardFooter className=''>
           <CardAction className='w-full'><Button className='w-full'>Dowiedz się więcej</Button></CardAction>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Expertise
