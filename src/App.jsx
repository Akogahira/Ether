import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import LayoutInicio from './components/LayoutInicio';
import LayoutExtra from './components/LayoutExtra';
import LayoutInicioSesion from './components/LayoutInicioSesion';
import {
  Conversaciones,
  Herramientas,
  Chat,
  Perfil,
  Home,
  Inicio,
  HerramientaEsp,
  ConversacionEsp,
  SubirConv,
  SubirHerr,
  ChatEsp,
  InicioSesion,
  InicioRegistro,
  Busqueda,
} from './pages';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <Router>
    <ScrollToTop />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/conversaciones" element={<Conversaciones />} />
        <Route path="/herramientas" element={<Herramientas />} />
        <Route path="/chat" element={<Chat />} />
      </Route>

      <Route element={<LayoutExtra />}>
        <Route path="/subirconversacion" element={<SubirConv />} />
        <Route path="/subirherramienta" element={<SubirHerr />} />
        <Route path="/chatpriv" element={<ChatEsp />} />
        <Route path="/buscador" element={<Busqueda />} />
        <Route path="/conversacionesp/:id" element={<ConversacionEsp />} />
        <Route path="/herramientaesp/:id" element={<HerramientaEsp />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>

      <Route element={<LayoutInicio />}>
        <Route path="/" element={<Inicio />} />
      </Route>

      <Route element={<LayoutInicioSesion />}>
        <Route path="/iniciosesion" element={<InicioSesion />} />
        <Route path="/inicioregistro" element={<InicioRegistro />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
