import CountdownTimer from "./CountdownTimer";

const FinalCTA = () => {
  return (
    <section id="comprar" className="bg-hero text-primary-foreground py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-4">
          ¿Listo para preparar café como un <span className="text-gradient">profesional</span>?
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
          No dejes pasar esta oferta. Más de 2,400 personas ya están disfrutando de La Biblia del Café.
        </p>

        <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-8 mb-8">
          <p className="text-sm text-primary-foreground/60 mb-4">⏰ Esta oferta expira en:</p>
          <CountdownTimer />

          <div className="my-6 flex items-center justify-center gap-3">
            <span className="text-xl line-through text-primary-foreground/40">$40.00 USD</span>
            <span className="text-5xl font-black text-primary font-display">$19.00 USD</span>
          </div>

          <p className="text-sm text-primary-foreground/60 mb-6">
            ✅ +300 recetas • ✅ 8 bonos gratis • ✅ Garantía 30 días • ✅ Entrega inmediata
          </p>

          <a
            href="#"
            className="inline-block bg-cta-gradient text-primary-foreground font-bold text-xl px-12 py-5 rounded-lg shadow-cta animate-pulse-glow hover:scale-105 transition-transform w-full max-w-md"
          >
            🛒 ¡SÍ, LO QUIERO AHORA!
          </a>

          <p className="text-xs text-primary-foreground/40 mt-4">
            Compra 100% segura • Pago con tarjeta, PayPal, Apple Pay
          </p>
        </div>

        <p className="text-sm text-primary-foreground/50">
          57 personas están viendo esta oferta ahora mismo
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
