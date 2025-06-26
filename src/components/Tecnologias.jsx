import html from '../assets/html.png';
import css from '../assets/css3.png';
import js from '../assets/javascript.webp';
import node from '../assets/nodejs.png';
import react from '../assets/react.png';
import mysql from '../assets/mysql.webp';
import wp from '../assets/wordpress.png';
import xampp from '../assets/XAMPP.webp';
import mongo from '../assets/mongodb.webp';
import firebase from '../assets/Firebase-Logo.png';
import netlify from '../assets/netlify.png';
import vite from '../assets/vite.png';
import expo from '../assets/expo.png';
import reactnative from '../assets/Reactnative.png';
import figma from '../assets/figma.png'; 
import typescript from '../assets/typescript.webp'; // <-- novo import


export default function Tecnologias() {
  const tecnologias = [
    html, css, js, node, react, mysql, wp, xampp, mongo,
    firebase, netlify, vite, expo, reactnative, figma , typescript
  ];

  return (
    <div id="tecnologias">
      <h2>Tecnologias</h2>
      <div className="tech-icons">
        {tecnologias.map((src, i) => (
          <img key={i} src={src} alt={`Tecnologia ${i}`} />
        ))}
      </div>
    </div>
  );
}
