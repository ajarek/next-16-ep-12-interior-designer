import Hero from "@/components/Hero"
import Marquee from "@/components/Marquee"
import About from "@/components/About"
import Vision from "@/components/Vision"
import Expertise from "@/components/Expertise"
import Faqs from "@/components/Faqs"

export default function Home() {
  return (
    <div className=' min-h-screen flex flex-col pb-8'>
      
        
       <Hero />
      
      <Marquee />
      <About />
      <Vision />
      <Expertise />
      <Faqs />
    </div>  
  )
}