import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Conversaciones from '../pages/Conversaciones';
import Herramientas from '../pages/Herramientas';
import Chat from '../pages/Chat';
import Layout from '../components/Layout';
import Perfil from '../pages/Perfil';

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Conversaciones" element={<Conversaciones />} />
        <Route path="/Herramientas" element={<Herramientas />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Perfil" element={<Perfil />} />

      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;