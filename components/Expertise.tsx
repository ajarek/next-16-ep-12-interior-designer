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
import { MoveRight } from "lucide-react"
import Link from "next/link"

const expertiseData = [
  {
    title: "Nowoczesna fasada",
    description: "Eleganckie linie spotykają się ze szkłem odblaskowym",
    image: "/images/expertise-1.jpg",
  },
  {
    title: "Rzemiosło konstrukcyjne",
    description: "Budowanie ram z precyzją i wiedzą specjalistyczną",
    image: "/images/expertise-2.jpg",
  },
  {
    title: "Kierownik projektu",
    description: "Kierowanie wizją poprzez wiedzę specjalistyczną",
    image: "/images/expertise-3.jpg",
  },
]

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
        {expertiseData.map((item, index) => (
          <Card key={index} className='w-full '>
            <CardHeader className='text-center'>
              <CardTitle className='text-xl font-bold'>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className='w-full h-auto'
              />
            </CardContent>
            <CardFooter>
              <CardAction className='w-full '>
                <Button asChild className='w-full text-xl '>
                  <Link href='/#contact'>
                    Dowiedz się więcej <MoveRight className='ml-2' />
                  </Link>
                </Button>
              </CardAction>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Expertise
