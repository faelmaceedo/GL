export default function About() {
  return (
    <section id="sobre" style={{ backgroundColor: 'var(--navy)', padding: '120px 0', color: 'white' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
        
        <div 
          style={{ 
            height: '600px', 
            background: "url('https://hotmart.s3.amazonaws.com/profile_pictures/894ecbfc-c36b-455e-a5c9-fc6e9ca583ec/WhatsAppImage20250121at211302.jpeg?w=920') center/cover no-repeat",
            borderRadius: '4px',
            boxShadow: '25px 25px 0px var(--gold)'
          }}
          data-aos="fade-right"
        ></div>

        <div data-aos="fade-left">
          <h2 style={{ color: 'var(--gold)', fontSize: '3rem', marginBottom: '20px' }}>Guilherme De Sousa Leão</h2>
          <p style={{ marginBottom: '20px', fontSize: '1.1rem', opacity: '0.9' }}>
            Renomado professor e especialista, diretor da AAP-PI e pilar da Legale Educacional.
          </p>
          <p style={{ marginBottom: '40px', fontSize: '1.1rem', opacity: '0.9' }}>
            Com <strong>mais de 1.000 sustentações orais</strong> realizadas em tribunais de todo o Brasil, Guilherme une o rigor acadêmico à prática incisiva.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderLeft: '4px solid var(--gold)' }}>
              <i className="fas fa-gavel" style={{ color: 'var(--gold)', marginBottom: '10px' }}></i>
              <strong style={{ display: 'block', fontSize: '1.2rem' }}>+1.000</strong>
              <span style={{ fontSize: '0.8rem', opacity: '0.6' }}>Sustentações</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderLeft: '4px solid var(--gold)' }}>
              <i className="fas fa-graduation-cap" style={{ color: 'var(--gold)', marginBottom: '10px' }}></i>
              <strong style={{ display: 'block', fontSize: '1.2rem' }}>Professor</strong>
              <span style={{ fontSize: '0.8rem', opacity: '0.6' }}>Pós-Graduação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}