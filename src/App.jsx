import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Conversaciones from './pages/Conversaciones';
import Herramientas from './pages/Herramientas';
import Chat from './pages/Chat';
import Perfil from './pages/Perfil';
import Home from './pages/Home';
import ConversacionEsp from './pages/ConversacionEsp';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route
          path="/" element={<Inicio />}
        />
        <Route path="/Home" element={<Home />} />
        <Route path="/Conversaciones" element={<Conversaciones />} />
        <Route path="/Herramientas" element={<Herramientas />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/ConversacionEsp" element={<ConversacionEsp />} />
      </Routes>
    </Layout>

  </Router >
);

export default App;
