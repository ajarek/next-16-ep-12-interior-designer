import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faqs = () => {
  return (
    <div
      id='faqs'
      className='w-full max-w-6xl mx-auto flex flex-col items-center justify-center gap-8 mt-8 px-4 md:px-16 '
    >
      <p className='text-xl uppercase'>Szukasz odpowiedzi?</p>
      <h1 className='text-4xl font-bold'>
        Często zadawane pytania
      </h1>
      <p className='text-xl text-center'>Forma ma za zadanie kształtować przestrzenie, które kochasz, a każdy projekt realizujemy z dbałością, umiejętnościami i otwartym wsparciem klienta, co pozwala nam osiągnąć trwałą doskonałość projektu.</p>
      <Accordion type="single" collapsible className="w-full ">
        <AccordionItem value="item-1">
          <AccordionTrigger>Jak rozpocząć projekt w formularzu?</AccordionTrigger>
          <AccordionContent>
            <p>Aby rozpocząć, skontaktuj się z nami mailowo lub za pomocą formularza na stronie. Umówimy się na rozmowę wstępną, aby poznać Twoje potrzeby i wizję.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Czy mogę spotkać się z zespołem online?</AccordionTrigger>
          <AccordionContent>
            <p>Tak, nasz zespół chętnie spotka się z Tobą wirtualnie, dzięki czemu łatwo będzie Ci nawiązać kontakt i dzielić się pomysłami z dowolnego miejsca.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Jakiego typu przestrzenie projektujesz?</AccordionTrigger>
          <AccordionContent>
            <p>Projektujemy domy, biura i hotele, zawsze dostosowane do Twoich celów, potrzeb i wyjątkowych wartości marki.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Czy Form współpracuje również ze startupami?</AccordionTrigger>
          <AccordionContent>
            <p>Z przyjemnością pomagamy nowym firmom się rozwijać! Nasz zespół tworzy projekty, które wcielą w życie Twoją wizję i wesprą Twój rozwój.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Faqs