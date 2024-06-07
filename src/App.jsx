import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
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
} from "./pages";

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inicioapp" element={<Inicio />} />
        <Route path="/conversaciones" element={<Conversaciones />} />
        <Route path="/herramientas" element={<Herramientas />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/conversacionesp" element={<ConversacionEsp />} />
        <Route path="/herramientaesp" element={<HerramientaEsp />} />
        <Route path="/subirconversacion" element={<SubirConv />} />
        <Route path="/subirherramienta" element={<SubirHerr />} />
        <Route path="/chatpriv" element={<ChatEsp />} />
        <Route path="/iniciosesion" element={<InicioSesion />} />
        <Route path="/inicioregistro" element={<InicioRegistro />} />
        <Route path="/buscador" element={<Busqueda />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
