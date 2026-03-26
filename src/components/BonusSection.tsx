import bonusImg from "@/assets/bonuses-collection.png";

const bonuses = [
  { num: 1, title: "Recetario Mixología con Café", desc: "50 cócteles elegantes con café" },
  { num: 2, title: "Recetario Mixología con Té", desc: "50 bebidas aromáticas y refrescantes" },
  { num: 3, title: "Recetario de Matcha", desc: "30 recetas de energía verde y bienestar" },
  { num: 4, title: "Recetario de Postres", desc: "50 postres naturales y equilibrados" },
  { num: 5, title: "Recetario de Galletas", desc: "25 galletas caseras irresistibles" },
  { num: 6, title: "Recetario de Barritas", desc: "25 barritas energéticas naturales" },
  { num: 7, title: "Recetario de Batidos", desc: "30 batidos gourmet y saludables" },
  { num: 8, title: "Recetario de Jarabes", desc: "10 jarabes naturales para realzar tu café" },
];

const BonusSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-2">
          🎁 8 Bonos Premium <span className="text-gradient">GRATIS</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Valorados en más de $120 — Hoy los llevas sin costo adicional
        </p>

        <div className="flex justify-center mb-10">
          <img
            src={bonusImg}
            alt="Colección de 8 bonos premium"
            className="max-w-lg w-full"
            loading="lazy"
            width={600}
            height={350}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {bonuses.map((b) => (
            <div key={b.num} className="flex items-start gap-3 bg-secondary/50 rounded-lg p-4 border border-border">
              <span className="shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                {b.num}
              </span>
              <div>
                <h3 className="font-bold text-foreground text-sm">{b.title}</h3>
                <p className="text-muted-foreground text-xs">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
