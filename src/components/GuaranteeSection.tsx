import guaranteeBadge from "@/assets/guarantee-badge.png";

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-warm-gradient">
      <div className="max-w-3xl mx-auto text-center">
        <img
          src={guaranteeBadge}
          alt="Garantía de 30 días"
          className="mx-auto w-32 h-32 mb-6"
          loading="lazy"
          width={128}
          height={128}
        />
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Garantía de Confianza de 30 Días
        </h2>
        <p className="text-muted-foreground text-lg mb-4 max-w-xl mx-auto">
          Si no te gusta, te devolvemos tu dinero. <strong>Sin preguntas incómodas. Sin procesos complicados. Sin letras pequeñas.</strong>
        </p>
        <p className="text-foreground font-semibold">
          Tienes 30 días para explorar <em>La Biblia del Café</em> con total tranquilidad. Si no te convence, te devolvemos el 100%.
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
