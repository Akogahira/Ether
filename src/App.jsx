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
import SubirConv from './pages/SubirConv';
import SubirHerr from './pages/SubirHerr';
import ChatEsp from './pages/ChatEsp';

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
        <Route path="/SubirConv" element={<SubirConv />} />
        <Route path="/SubirHerr" element={<SubirHerr />} />
        <Route path="/ChatEsp" element={<ChatEsp />} />

      </Routes>
    </Layout>

  </Router >
);

export default App;
