import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuAtivo, setMenuAtivo] = useState(false);

  // Função para fechar o menu ao clicar em um link
  const handleClickLink = () => {
    setMenuAtivo(false);
  };

  return (
    <header>
      <h1 className="logoo">Meu Portfólio</h1>
      <div className="menu-toggle" onClick={() => setMenuAtivo(!menuAtivo)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={menuAtivo ? 'active' : ''}>
        <ul>
          <li><Link to="/" onClick={handleClickLink}>Home</Link></li>
          <li><Link to="/seu-site" onClick={handleClickLink}>Criar seu site</Link></li>
          <li><Link to="/contato" onClick={handleClickLink}>Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}
