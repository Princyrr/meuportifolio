import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Seusite from './pages/seusite';
import Contato from './pages/Contato';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seu-site" element={<Seusite />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
