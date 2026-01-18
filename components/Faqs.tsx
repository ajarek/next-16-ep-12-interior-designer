import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Jak rozpocząć projekt w formularzu?",
    answer:
      "Aby rozpocząć, skontaktuj się z nami mailowo lub za pomocą formularza na stronie. Umówimy się na rozmowę wstępną, aby poznać Twoje potrzeby i wizję.",
  },
  {
    question: "Czy mogę spotkać się z zespołem online?",
    answer:
      "Tak, nasz zespół chętnie spotka się z Tobą wirtualnie, dzięki czemu łatwo będzie Ci nawiązać kontakt i dzielić się pomysłami z dowolnego miejsca.",
  },
  {
    question: "Jakiego typu przestrzenie projektujesz?",
    answer:
      "Projektujemy domy, biura i hotele, zawsze dostosowane do Twoich celów, potrzeb i wyjątkowych wartości marki.",
  },
  {
    question: "Czy Form współpracuje również ze startupami?",
    answer:
      "Z przyjemnością pomagamy nowym firmom się rozwijać! Nasz zespół tworzy projekty, które wcielą w życie Twoją wizję i wesprą Twój rozwój.",
  },
]

const Faqs = () => {
  return (
    <section
      id='faqs'
      className='w-full max-w-6xl mx-auto flex flex-col items-center justify-center gap-8 mt-8 px-4 md:px-16 '
    >
      <p className='text-xl uppercase'>Szukasz odpowiedzi?</p>
      <h1 className='text-4xl font-bold'>Często zadawane pytania</h1>
      <p className='text-xl text-center'>
        Forma ma za zadanie kształtować przestrzenie, które kochasz, a każdy
        projekt realizujemy z dbałością, umiejętnościami i otwartym wsparciem
        klienta, co pozwala nam osiągnąć trwałą doskonałość projektu.
      </p>
      <Accordion type='single' collapsible className='w-full '>
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export default Faqs
