import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Componente do seu Header
import NossaHistoria from './pages/NossaHistoria'; // Componente de exemplo
import Info from './pages/Info'; // Componente de exemplo
import Eventos from './pages/Eventos'; // Componente de exemplo
import Lojinha from './pages/Lojinha'; // Componente de exemplo
import Login from './components/Login'; // Componente de exemplo
import Footer from './components/Footer';
import Home from './pages/Home';
import AddEvents from './pages/pageseventos/AddEvents';
import EditEvents from './pages/pageseventos/EditEvents';
import Doe from './components/Doe';
import Acessibilidade from './components/Acessibilidade';
import Pix from './components/Pix';



function App() {
  return (
    <>
      <Router>
        {/* O Header precisa estar dentro do Router */}
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nossahistoria" element={<NossaHistoria />} />
          <Route path="/info" element={<Info />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/lojinha" element={<Lojinha />} />
          <Route path="/pix" element={<Pix />} /> 
          <Route path="/addEve" element={<AddEvents />} />
          <Route path="/editEve/:id" element={<EditEvents />} />
          <Route path="/doe" element={<Doe />} />
          <Route path="/acessibilidade" element={<Acessibilidade />} />

        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
