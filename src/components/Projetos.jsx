export default function PortfolioOferta() {
  const cards = [
    {
      titulo: 'Valor do Portfólio',
      conteudo: 'R$ 700',
    },
    {
      titulo: 'O que você recebe',
      conteudo: (
        <>
          <ul>
            <li>Página Home</li>
            <li>Quem Somos</li>
            <li>Galeria com 15 fotos</li>
            <li>Contato com direcionamento para WhatsApp</li>
            <li>Site dinâmico, feito com React e Vite</li>
            <li>Visualização otimizada para Web e Mobile</li>
            <li>Ligação com domínio próprio</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <section id="portfolio-oferta" style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '30px', fontSize: '2rem', color: '#ff5722' }}>Quer um Portifólio?</h2>
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
              color: '#808080',              // letra mais clara que #1e1e2e
              fontWeight: '600',
              textAlign: 'left'
            }}
          >
            <h3 style={{ marginBottom: '15px', fontSize: '1.5rem', color: '#ff5722' }}>{titulo}</h3>
            <div style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>{conteudo}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
