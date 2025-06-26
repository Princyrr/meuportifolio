export default function Seusite() {
  const cards = [
    {
      titulo: 'Valor do Site Profissional',
      conteudo: 'R$ 700',
    },
    {
      titulo: 'O que está incluso',
      conteudo: (
        <ul>
          <li>Home moderna e personalizada</li>
          <li>Página "Quem Somos"</li>
          <li>Galeria com até 15 fotos</li>
          <li>Página de Contato com link direto pro WhatsApp</li>
          <li>Site dinâmico feito com React + Vite</li>
          <li>Responsivo: Web e Mobile</li>
          <li>Conexão com domínio (ex: www.seunome.com ou .br)</li>
        </ul>
      )
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      background: 'linear-gradient(135deg, #1e1e2e, #3a3a5a)', 
      color: '#ddd' 
    }}>
      <section
        id="seusite"
        style={{ 
          flexGrow: 1,  // ocupa o máximo possível
          padding: '120px 20px 40px', 
          textAlign: 'center',
        }}
      >
        <h2 style={{ marginBottom: '30px', fontSize: '2rem', color: '#ff5722' }}>
          Crie seu site comigo
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          {cards.map(({ titulo, conteudo }, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255, 152, 0, 0.1)',
                border: '2px solid #ff5722',
                borderRadius: '12px',
                padding: '20px',
                width: '280px',
                boxShadow: '0 4px 10px rgba(255, 87, 34, 0.3)',
                color: '#ddd',
                fontWeight: '600',
                textAlign: 'left'
              }}
            >
              <h3 style={{ marginBottom: '15px', fontSize: '1.5rem', color: '#ff5722' }}>{titulo}</h3>
              <div style={{ fontSize: '1rem', lineHeight: '1.5' }}>{conteudo}</div>
            </div>
          ))}
        </div>
      </section>
      <footer style={{
        textAlign: 'center',
        padding: '20px',
        background: 'rgba(46, 46, 62, 0.9)',
        fontSize: '0.9rem',
      }}>
        © 2025 Meu Portfólio - Todos os direitos reservados
      </footer>
    </div>
  );
}
