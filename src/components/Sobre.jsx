import Eu from '../assets/eu.png';

export default function Sobre() {
  return (
    <div id="sobre-div">
      <div className="div1">
        <img src={Eu} alt="Foto de Priscila Ramonna" />
      </div>
      <div className="div2">
        <h3>Priscila Ramonna</h3>
        <h4>Desenvolvedora Web Fullstack</h4>
        <p className="sobr">
          Minha jornada começou com HTML, CSS e JavaScript. Hoje sou formada em Sistemas para Internet pela faculdade Senac, onde aprofundei meus conhecimentos.  
        </p>
        <p className="sobr">
          Tenho experiência em desenvolvimento web e mobile usando React, React Native e Expo.  
        </p>
        <p className="sobr">
          Já trabalhei em projetos que envolvem diversas tecnologias, como Node.js, Firebase, Vite, Netlify, MongoDB, MySQL, entre outras.  
        </p>
        <p className="sobr">
          Busco transformar ideias em soluções digitais funcionais, com foco em usabilidade e performance, tanto para web quanto para dispositivos móveis.
        </p>
      </div>
    </div>
  );
}
