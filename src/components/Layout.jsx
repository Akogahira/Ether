import { Link, useLocation } from "react-router-dom";
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

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isConvPage = location.pathname === "/conversaciones";
  const isHerrPage = location.pathname === "/herramientas";
  const isChatPage = location.pathname === "/chat";
  const isPerfilPage = location.pathname === "/perfil";
  const isChatEspPage = location.pathname === "/chatpriv";
  const isSubirHerrPage = location.pathname === "/subirherramienta";
  const isSubirConvPage = location.pathname === "/subirconversacion";
  const isConvEspPage = location.pathname === "/conversacionesp";
  const isHerrEspPage = location.pathname === "/herramientaesp";
  const isBuscarPage = location.pathname === "/buscador";

  const getPageName = () => {
    switch (true) {
      case isHomePage:
        return "Inicio";
      case isConvPage:
        return "Conversaciones";
      case isHerrPage:
        return "Herramientas";
      case isChatPage:
        return "Chat";
      case isPerfilPage:
        return "Perfil";
      case isChatEspPage:
        return "Username";
      case isHerrEspPage:
        return "Herramienta";
      case isConvEspPage:
        return "Conversación";
      case isSubirConvPage:
        return "Subir conversación";
      case isSubirHerrPage:
        return "Publicar herramienta";
      case isBuscarPage:
        return "Búsqueda";
      default:
        return "Página";
    }
  };

  return (
    <Container>
      <Footer2>
        <Nav2>
          <Link to="/perfil">
            {isPerfilPage ? <HiUserCircle /> : <HiOutlineUserCircle />}
          </Link>
          <h2>{getPageName()}</h2>
          <Link to="/buscador">
            {isBuscarPage ? <BiSolidSearchAlt2 /> : <BiSearchAlt2 />}
          </Link>
        </Nav2>
      </Footer2>

      <Main>{children}</Main>

      <Divider />
      <Footer>
        <Nav>
          <div>
            <Link to="/">{isHomePage ? <IoHome /> : <IoHomeOutline />}</Link>
            <Link to="/conversaciones">
              {isConvPage || isConvEspPage || isSubirConvPage ? (
                <MdForum />
              ) : (
                <MdOutlineForum />
              )}
            </Link>
            <Link to="/herramientas">
              {isHerrPage || isHerrEspPage || isSubirHerrPage ? (
                <IoBookSharp />
              ) : (
                <IoBookOutline />
              )}
            </Link>
            <Link to="/chat">
              {isChatPage || isChatEspPage ? (
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
