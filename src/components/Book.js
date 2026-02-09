export default function Book() {
  return (
    <section id="livro" className="py-32 bg-[#F2F2F2]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group" data-aos="zoom-in">
          <div className="bg-[#1A2B3C] h-[500px] flex flex-col items-center justify-center text-white p-12 text-center shadow-[35px_35px_0px_#1A1A1A] relative z-10">
             <i className="fas fa-book-open text-6xl text-[#C5A059] mb-6"></i>
             <h3 className="text-2xl font-playfair tracking-wider mb-4">JURISPRUDÊNCIA SELECIONADA</h3>
             <p className="opacity-70 text-sm">Julgados das turmas recursais da SJPI selecionados por assunto</p>
          </div>
        </div>
        
        <div data-aos="fade-up">
          <h2 className="text-4xl text-[#1A2B3C] font-playfair mb-6">Produção Intelectual</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Obra essencial para advogados que buscam fundamentação técnica de elite. 
            Uma ferramenta indispensável para a prática previdenciária estratégica, consolidando anos de análise de precedentes.
          </p>
          <a href="https://hotmart.com/pt-br/marketplace/produtos/jurisprudencia-selecionada-julgados-das-turmas-recursais-da-justica-federal-do-piaui-selecionados-por-assunto/J97680155O" target="_blank" className="bg-[#1A2B3C] text-white px-8 py-4 rounded-sm font-semibold hover:bg-[#C5A059] transition-colors inline-block">
            Adquirir no Hotmart
          </a>
        </div>
      </div>
    </section>
  );
}