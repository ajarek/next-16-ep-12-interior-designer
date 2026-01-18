import Hero from "@/components/Hero"
import Marquee from "@/components/Marquee"
import About from "@/components/About"
import Vision from "@/components/Vision"
import Expertise from "@/components/Expertise"
import Faqs from "@/components/Faqs"
import References from "@/components/References"
import Contact from "@/components/Contact"
import Gallery from "@/components/Gallery"

export default function Home() {
  return (
    <div className=' min-h-screen flex flex-col gap-8 pb-8'>
      <Hero />
      <Marquee />
      <About />
      <Vision />
      <Expertise />
      <References />
      <Faqs />
      <Contact />
      <Gallery />
    </div>
  )
}
