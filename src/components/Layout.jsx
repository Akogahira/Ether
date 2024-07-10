import { Link, useLocation, Outlet } from "react-router-dom";
import { HiOutlineUserCircle, HiUserCircle } from "react-icons/hi2";
import { BiSearchAlt2, BiSolidSearchAlt2 } from "react-icons/bi";
import { IoHome, IoHomeOutline } from "react-icons/io5";
import { MdForum, MdOutlineForum } from "react-icons/md";
import { IoBookSharp, IoBookOutline } from "react-icons/io5";
import { PiChatCircle, PiChatCircleFill } from "react-icons/pi";
import {
  Container,
  Nav,
  Footer2,
  Footer,
  Main,
  Nav2,
  Divider,
} from "./Layout.styles";

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const pageNames = {
    "/home": "Inicio",
    "/conversaciones": "Conversaciones",
    "/herramientas": "Herramientas",
    "/chat": "Chat",
    "/perfil": "Perfil",
    "/chatpriv": "Username",
    "/subirherramienta": "Publicar herramienta",
    "/subirconversacion": "Subir conversación",
    "/buscador": "Búsqueda"
  };

  const getPageName = () => {
    if (currentPath.startsWith("/conversacionesp/")) return "Conversación";
    if (currentPath.startsWith("/herramientaesp/")) return "Herramienta";
    return pageNames[currentPath] || "Página";
  };

  return (
    <Container>
      <Footer2>
        <Nav2>
          <Link to="/perfil">
            {currentPath === "/perfil" ? <HiUserCircle /> : <HiOutlineUserCircle />}
          </Link>
          <h2>{getPageName()}</h2>
          <Link to="/buscador">
            {currentPath === "/buscador" ? <BiSolidSearchAlt2 /> : <BiSearchAlt2 />}
          </Link>
        </Nav2>
      </Footer2>

      <Main>
        <Outlet />
      </Main>

      <Divider />
      <Footer>
        <Nav>
          <div>
            <Link to="/home">
              {currentPath === "/home" ? <IoHome /> : <IoHomeOutline />}
            </Link>
            <Link to="/conversaciones">
              {currentPath === "/conversaciones" || currentPath.startsWith("/conversacionesp/") || currentPath === "/subirconversacion" ? (
                <MdForum />
              ) : (
                <MdOutlineForum />
              )}
            </Link>
            <Link to="/herramientas">
              {currentPath === "/herramientas" || currentPath.startsWith("/herramientaesp/") || currentPath === "/subirherramienta" ? (
                <IoBookSharp />
              ) : (
                <IoBookOutline />
              )}
            </Link>
            <Link to="/chat">
              {currentPath === "/chat" || currentPath === "/chatpriv" ? (
                <PiChatCircleFill />
              ) : (
                <PiChatCircle />
              )}
            </Link>
          </div>
        </Nav>
      </Footer>
    </Container>
  );
};

export default Layout;
