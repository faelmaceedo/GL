'use client'
import { useEffect } from 'react';
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1150, easing: 'ease-in-out-quad', once: true, offset: 120 });
  }, []);

  return (
    <>
      {/* HEADER */}
      <header style={{ padding: '18px 0', borderBottom: '1px solid rgba(0,0,0,0.08)', position: 'sticky', top: 0, background: 'rgba(255,255,255,0.98)', zIndex: 1000, backdropFilter: 'blur(10px)' }}>
        <div className="container">
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="#" className="logo">GL</a>
            <div className="nav-links">
              <a href="#sobre" className="nav-link">Sobre</a>
              <a href="#livro" className="nav-link">O Livro</a>
              <a href="#artigos" className="nav-link">Artigos</a>
              <a href="https://wa.me/558699751892" target="_blank" className="nav-link" style={{ color: '#C5A059' }}>Contato</a>
            </div>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container" data-aos="fade-up">
          <h1 style={{ fontSize: '3.8rem', marginBottom: '25px', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>A Excelência da Defesa na Tribuna</h1>
          <p style={{ fontSize: '1.3rem', maxWidth: '850px', margin: '0 auto 45px', fontWeight: '300' }}>
            Estratégia técnica e oratória de elite para tribunais. A voz de quem já realizou mais de 1.000 sustentações orais em todo o país.
          </p>
          <a href="https://wa.me/558699751892" target="_blank" className="btn">Consultoria Especializada</a>
        </div>
      </section>

      {/* SOBRE COM BOXES DA IMAGEM image_936f40.png */}
      <section id="sobre" style={{ padding: '130px 0', backgroundColor: '#1A2B3C', color: '#FFFFFF' }}>
        <div className="container">
          <div className="sobre-grid">
            <div className="sobre-img" data-aos="fade-right" data-aos-delay="200"></div>
            <div className="sobre-text" data-aos="fade-left" data-aos-delay="300">
              <h2 style={{ fontSize: '3rem', marginBottom: '15px', color: '#C5A059' }}>Guilherme De Sousa Leão</h2>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '400', marginBottom: '30px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '2px' }}>Referência em Direito Previdenciário</h3>
              <p style={{ marginBottom: '25px', textAlign: 'justify' }}>
                Renomado professor e especialista, Guilherme De Sousa Leão é diretor da Associação dos Advogados Previdenciaristas do Piauí e pilar do corpo docente da Legale Educacional.
              </p>
              <p style={{ marginBottom: '25px', textAlign: 'justify' }}>
                Sua trajetória é marcada por <strong>mais de 1.000 sustentações orais realizadas</strong>, unindo o rigor acadêmico à prática incisiva nos tribunais de todo o Brasil.
              </p>

              <div className="conquistas-grid">
                <div className="conquista-item" data-aos="fade-up" data-aos-delay="400">
                  <i className="fas fa-gavel"></i>
                  <strong>+1.000 Sustentações</strong>
                </div>
                <div className="conquista-item" data-aos="fade-up" data-aos-delay="500">
                  <i className="fas fa-graduation-cap"></i>
                  <strong>Professor de Pós</strong>
                </div>
                <div className="conquista-item" data-aos="fade-up" data-aos-delay="600">
                  <i className="fas fa-users"></i>
                  <strong>Diretor AAP-PI</strong>
                </div>
                <div className="conquista-item" data-aos="fade-up" data-aos-delay="700">
                  <i className="fas fa-shield-alt"></i>
                  <strong>Especialista</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVRO */}
      <section id="livro" style={{ padding: '130px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '70px', alignItems: 'center' }}>
          <div style={{ background: '#1A2B3C', height: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', boxShadow: '35px 35px 0px #1A1A1A', textAlign: 'center', padding: '40px' }} data-aos="zoom-in">
            <i className="fas fa-book-open" style={{ fontSize: '65px', marginBottom: '20px', color: '#C5A059' }}></i>
            <h3 style={{ color: 'white' }}>JURISPRUDÊNCIA SELECIONADA</h3>
            <p style={{ padding: '0 20px', opacity: 0.8, color: 'white' }}>Turmas Recursais da SJPI selecionados por assunto</p>
          </div>
          <div data-aos="fade-up">
            <h2 style={{ fontSize: '2.8rem', color: '#1A2B3C', marginBottom: '25px' }}>Produção Intelectual</h2>
            <p style={{ marginBottom: '25px' }}>Obra essencial para advogados que buscam fundamentação técnica de elite. Uma ferramenta indispensável para a prática previdenciária estratégica.</p>
            <a href="https://hotmart.com/pt-br/marketplace/produtos/jurisprudencia-selecionada-julgados-das-turmas-recursais-da-justica-federal-do-piaui-selecionados-por-assunto/J97680155O" target="_blank" className="btn" style={{ backgroundColor: '#1A2B3C', borderColor: '#1A2B3C' }}>Adquirir no Hotmart</a>
          </div>
        </div>
      </section>

      {/* ARTIGOS CONFORME image_9373a1.png */}
      <section id="artigos" style={{ padding: '140px 0', backgroundColor: '#1A1A1A', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }} data-aos="fade-up">
            <h2 style={{ fontSize: '3rem', color: '#C5A059', position: 'relative', paddingBottom: '20px', display: 'inline-block' }}>
              Artigos & Publicações
              <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '80px', height: '3px', backgroundColor: '#C5A059' }}></div>
            </h2>
          </div>
          
          <div className="grid-articles">
            <div className="article-card" data-aos="fade-up" data-aos-delay="200">
              <h3>A Retórica na Fase Recursal</h3>
              <p>Como a oratória técnica impacta o resultado em julgamentos previdenciários complexos.</p>
              <a href="https://wa.me/558699751892" target="_blank" className="article-link">LER ARTIGO →</a>
            </div>

            <div className="article-card" data-aos="fade-up" data-aos-delay="400">
              <h3>Uniformização de Julgados</h3>
              <p>Estratégias processuais baseadas na jurisprudência mais recente da SJPI.</p>
              <a href="https://wa.me/558699751892" target="_blank" className="article-link">LER ARTIGO →</a>
            </div>

            <div className="article-card" data-aos="fade-up" data-aos-delay="600">
              <h3>Ética e Justiça</h3>
              <p>A importância da formação técnica para a valorização da advocacia previdenciária.</p>
              <a href="https://wa.me/558699751892" target="_blank" className="article-link">LER ARTIGO →</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#000', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="logo" style={{ display: 'inline-block', color: 'white', borderColor: '#C5A059', marginBottom: '30px' }}>GL</div>
        <p style={{ fontSize: '1.1rem' }}>Guilherme De Sousa Leão | Advocacia & Docência</p>
        <p style={{ fontSize: '12px', opacity: 0.5, marginTop: '35px' }}>Teresina, Piauí. © 2026 Todos os direitos reservados.</p>
      </footer>

      <a href="https://wa.me/558699751892" className="whatsapp-float" target="_blank">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}