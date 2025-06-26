import { useState } from 'react';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarParaWhatsApp = (e) => {
    e.preventDefault();
    const numero = '5581988115840';
    const texto = `Olá, me chamo *${nome}*. Assunto: *${assunto}*.\n\n${mensagem}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  return (
    <div id="contato" className="contato-container">
      <h2>Entre em Contato</h2>
      <form onSubmit={enviarParaWhatsApp} className="formulario">
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Assunto"
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
          required
        />
        <textarea
          placeholder="Digite sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        ></textarea>
        <button type="submit">Enviar para WhatsApp</button>
      </form>
    </div>
  );
}
