import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Conversaciones from './pages/Conversaciones';
import Herramientas from './pages/Herramientas';
import Chat from './pages/Chat';
import Perfil from './pages/Perfil';
import Home from './pages/Home';
import Inicio from './pages/Inicio';
import HerramientaEsp from './pages/HerramientaEsp';
import ConversacionEsp from './pages/ConversacionEsp';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Conversaciones" element={<Conversaciones />} />
        <Route path="/Herramientas" element={<Herramientas />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/ConversacionEsp" element={<ConversacionEsp />} />
        <Route path="/HerramientaEsp" element={<HerramientaEsp />} />
      </Routes>
    </Layout>

  </Router >
);

export default App;
