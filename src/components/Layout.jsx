import { Link, useLocation } from 'react-router-dom';
import { HiOutlineUserCircle, HiUserCircle } from "react-icons/hi2";
import { GoSearch } from "react-icons/go";
import { IoHome, IoHomeOutline } from "react-icons/io5";
import { MdForum, MdOutlineForum } from "react-icons/md";
import { IoBookSharp, IoBookOutline } from "react-icons/io5";
import { PiChatCircle, PiChatCircleFill } from "react-icons/pi";
import { Container, Nav, Footer2, Footer, Main, Nav2, Divider } from './Layout.styles';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isConvPage = location.pathname === '/Conversaciones';
  const isHerrPage = location.pathname === '/Herramientas';
  const isChatPage = location.pathname === '/Chat';
  const isPerfilPage = location.pathname === '/Perfil';
  const isChatEspPage = location.pathname === '/ChatEsp';
  const isSubirHerrPage = location.pathname === '/SubirHerr';
  const isSubirConvPage = location.pathname === '/SubirConv';
  const isConvEspPage = location.pathname === '/ConversacionEsp';
  const isHerrEspPage = location.pathname === '/HerramientaEsp';

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
      default:
        return "Página";
    }
  };

  return (
    <Container>
      <Footer2>
        <Nav2>
          <Link to="/Perfil">
            {isPerfilPage ? <HiUserCircle /> : <HiOutlineUserCircle />}
          </Link>
          <h2>{getPageName()}</h2>
          <Link to="/"><GoSearch /></Link>
        </Nav2>
      </Footer2>

      <Main>{children}</Main>

      <Divider />
      <Footer>
        <Nav>
          <div>
            <Link to="/">
              {isHomePage ? <IoHome /> : <IoHomeOutline />}
            </Link>
            <Link to="/Conversaciones">
              {(isConvPage || isConvEspPage || isSubirConvPage) ? <MdForum /> : <MdOutlineForum />}
            </Link>
            <Link to="/Herramientas">
              {(isHerrPage || isHerrEspPage || isSubirHerrPage) ? <IoBookSharp /> : <IoBookOutline />}
            </Link>
            <Link to="/Chat">
              {(isChatPage || isChatEspPage) ? <PiChatCircleFill /> : <PiChatCircle />}
            </Link>
          </div>
        </Nav>
      </Footer>
    </Container>
  );
};
export default Layout;
