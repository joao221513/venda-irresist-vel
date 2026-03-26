import heroProduct from "@/assets/hero-product.jpg";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section className="bg-hero text-primary-foreground py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
          <span className="text-sm font-semibold text-primary">🔥 OFERTA POR TIEMPO LIMITADO — 50% OFF</span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black leading-tight mb-4">
          En 7 días vas a dominar el arte de preparar{" "}
          <span className="text-gradient">bebidas profesionales</span>{" "}
          desde tu cocina.
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 font-body">
          +300 recetas exclusivas de café, té, postres y más. Todo lo que necesitas para impresionar, emprender o simplemente disfrutar como un experto.
        </p>

        <div className="mb-8">
          <img
            src={heroProduct}
            alt="La Biblia del Café - Guía Definitiva"
            className="mx-auto max-w-md w-full animate-float"
            width={600}
            height={400}
          />
        </div>

        <div className="mb-6">
          <p className="text-sm text-primary-foreground/60 mb-1">Tu lugar está reservado por</p>
          <CountdownTimer />
        </div>

        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-xl line-through text-primary-foreground/40">$40.00 USD</span>
            <span className="text-4xl font-black text-primary font-display">$19.00 USD</span>
          </div>
          <span className="text-sm text-primary-foreground/60">⚡ ¡Últimos <strong>3 cupos</strong> en oferta!</span>
        </div>

        <a
          href="#comprar"
          className="inline-block bg-cta-gradient text-primary-foreground font-bold text-lg md:text-xl px-10 py-4 rounded-lg shadow-cta animate-pulse-glow hover:scale-105 transition-transform"
        >
          🛒 COMPRAR AHORA — 50% OFF
        </a>

        <p className="text-xs text-primary-foreground/40 mt-4">+2,442 descargas • Entrega digital inmediata</p>
      </div>
    </section>
  );
};

export default HeroSection;
