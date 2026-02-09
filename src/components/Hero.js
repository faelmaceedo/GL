export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A2B3C]/90 to-[#1A1A1A]/95 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1569407228235-9a744831a150?q=80&w=1470&auto=format&fit=crop" 
          className="w-full h-full object-cover"
          alt="Tribunal de Justiça"
        />
      </div>
      
      <div className="container relative z-20 px-6" data-aos="fade-up">
        <h1 className="text-5xl md:text-7xl font-playfair mb-6">A Excelência da Defesa na Tribuna</h1>
        <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-10 opacity-90">
          Estratégia técnica e oratória de elite para tribunais. A voz de quem já realizou mais de 1.000 sustentações orais em todo o país.
        </p>
        <a href="https://wa.me/558699751892" className="inline-block bg-[#C5A059] text-white px-12 py-5 rounded-sm font-bold tracking-widest uppercase hover:bg-transparent hover:border-[#C5A059] border border-[#C5A059] transition-all duration-500">
          Consultoria Especializada
        </a>
      </div>
    </section>
  );
}