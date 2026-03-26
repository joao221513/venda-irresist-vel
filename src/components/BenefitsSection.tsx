import { Coffee, BookOpen, ChefHat, Sparkles, Clock, Smartphone } from "lucide-react";

const benefits = [
  { icon: Coffee, title: "+300 recetas exclusivas", desc: "Café, té, matcha, cócteles, postres y mucho más" },
  { icon: BookOpen, title: "Guía completa de métodos", desc: "Aprende cada método de extracción paso a paso" },
  { icon: ChefHat, title: "Nivel barista en casa", desc: "Prepara bebidas de cafetería profesional" },
  { icon: Sparkles, title: "8 bonos premium gratis", desc: "Recetarios adicionales valorados en +$120" },
  { icon: Clock, title: "Acceso inmediato", desc: "Descarga al instante después de tu compra" },
  { icon: Smartphone, title: "Lee donde quieras", desc: "Compatible con celular, tablet y computadora" },
];

const BenefitsSection = () => {
  return (
    <section className="bg-warm-gradient py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          ¿Qué vas a recibir?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Todo lo que necesitas para convertirte en un experto del café, desde tu propia cocina.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-6 shadow-card hover:shadow-lg transition-shadow border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-1">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
