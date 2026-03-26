import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Qué recibiré al comprar este producto?",
    a: "Acceso inmediato a un pack digital con más de 300 recetas exclusivas, guías de métodos de extracción, y 8 bonos premium de regalo. Todo en formato PDF descargable.",
  },
  {
    q: "¿Puedo leerlo en mi celular, tablet o computadora?",
    a: "Sí, el archivo PDF es compatible con cualquier dispositivo. Puedes leerlo donde quieras, cuando quieras.",
  },
  {
    q: "¿Cuándo lo recibo?",
    a: "Inmediatamente después de tu compra. Recibirás un enlace de descarga y también lo enviaremos a tu correo electrónico.",
  },
  {
    q: "¿Necesito experiencia previa?",
    a: "No, es una guía accesible para principiantes. Las recetas vienen con cantidades exactas y pasos claros que cualquiera puede seguir.",
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Tarjeta de crédito, débito, PayPal, Apple Pay, Google Pay y Mercado Pago.",
  },
  {
    q: "¿Qué pasa si tengo problemas para descargar?",
    a: "No te preocupes, puedes contactarnos y te ayudamos al instante. Nuestro equipo está disponible para asistirte.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-warm-gradient">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-10">
          Preguntas Frecuentes
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-lg border border-border px-5 shadow-card"
            >
              <AccordionTrigger className="text-foreground font-semibold text-left text-sm md:text-base hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
