import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Os livros são digitais ou físicos?",
    answer: "Neste momento, os livros estão disponíveis apenas em formato digital (PDF), prontos para você imprimir e usar em casa, na igreja ou na escola.",
  },
  {
    question: "Para quais idades é indicado?",
    answer: "A coleção foi pensada com carinho para crianças de 4 a 10 anos, com linguagem e ilustrações adaptadas para essa faixa etária.",
  },
  {
    question: "Posso usar em escolas ou na igreja?",
    answer: "Sim! O material é perfeito para aulas bíblicas infantis, escolas dominicais, momentos de catequese e atividades em grupo.",
  },
  {
    question: "Como receberei o material após a compra?",
    answer: "O acesso é imediato! Após a confirmação do pagamento, você receberá um e-mail com o link para baixar todos os ebooks e bônus.",
  },
  {
    question: "E se eu não gostar?",
    answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeito, basta nos enviar um e-mail e devolvemos 100% do seu dinheiro, sem perguntas.",
  }
];

export function Faq() {
  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Perguntas Frequentes
          </h2>
          <p className="max-w-2xl text-muted-foreground md:text-xl">
            Ainda tem alguma dúvida? A gente te ajuda a esclarecer tudo.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
