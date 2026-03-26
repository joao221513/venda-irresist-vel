import { Star } from "lucide-react";

const testimonials = [
  { name: "Julián T.", country: "COL", stars: 5, text: "No sabía que me podía quedar tan rico jaja" },
  { name: "Clara V.", country: "ES", stars: 5, text: "Qué pasada, fácil y riquísimo todo" },
  { name: "Andrés V.", country: "USA", stars: 5, text: "Sí valía la pena el precio, trae un montón de tips buenísimos" },
  { name: "Sofía R.", country: "MX", stars: 5, text: "Lo amé, super sencillo y me encanta la explicación de las cafeteras" },
  { name: "Camilo J.", country: "COL", stars: 5, text: "Qué delicia parce, muy fácil de hacer 😋" },
  { name: "Ana L.", country: "USA", stars: 5, text: "Está brutal la cantidad de información, muuuy recomendado" },
  { name: "Valeria R.", country: "MX", stars: 5, text: "Tenía miedo de perder mi dinero jaja pero llegó el link al instante y todo bien 😍" },
  { name: "Kevin R.", country: "ES", stars: 5, text: "Aquí para los que dudan si es estafa, recibido y todo bien" },
  { name: "Teresa C.", country: "ES", stars: 5, text: "Muy top, la sección de matcha 😋" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Lo que dicen nuestros clientes
          </h2>
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-bold text-foreground">4.8/5</span>
          </div>
          <p className="text-muted-foreground text-sm">Basado en 21 reseñas verificadas</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-background rounded-lg p-5 shadow-card border border-border">
              <div className="flex mb-2">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground text-sm mb-3 italic">"{t.text}"</p>
              <p className="text-xs font-semibold text-muted-foreground">
                {t.name} · {t.country}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
