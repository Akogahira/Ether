import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Conversaciones from "../pages/conversaciones";
import Herramientas from "../pages/herramientas";
import Chat from "../pages/chat";
import Layout from "../components/Layout";
import Perfil from "../pages/perfil";

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
