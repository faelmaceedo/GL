const articles = [
  { title: "A Retórica na Fase Recursal", desc: "Como a oratória técnica impacta o resultado em julgamentos previdenciários complexos." },
  { title: "Uniformização de Julgados", desc: "Estratégias processuais baseadas na jurisprudência mais recente da SJPI." },
  { title: "Ética e Justiça", desc: "A importância da formação técnica para a valorização da advocacia previdenciária." }
];

export default function Articles() {
  return (
    <section id="artigos" className="py-32 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl font-playfair text-[#C5A059] mb-4">Artigos & Publicações</h2>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((art, index) => (
            <div key={index} className="bg-white/5 border border-[#C5A059]/20 p-10 hover:border-[#C5A059] transition-all duration-500 group" data-aos="fade-up" data-aos-delay={index * 200}>
              <h3 className="text-xl text-[#C5A059] mb-4 font-playfair">{art.title}</h3>
              <p className="text-gray-400 mb-8 text-sm">{art.desc}</p>
              <a href="https://wa.me/558699751892" className="text-xs tracking-[2px] font-bold uppercase group-hover:text-[#C5A059] transition-colors">Ler Artigo →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}