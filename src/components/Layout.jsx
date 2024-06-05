import { Link, useLocation } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";
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
      default:
        return "Página";
    }
  };

  return (
    <Container>
      <Footer2>
        <Nav2>
          <Link to="/Perfil"><RxAvatar /></Link>
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
              {isConvPage ? <MdForum /> : <MdOutlineForum />}
            </Link>
            <Link to="/Herramientas">
              {isHerrPage ? <IoBookSharp /> : <IoBookOutline />}
            </Link>
            <Link to="/Chat">
              {isChatPage ? <PiChatCircleFill /> : <PiChatCircle />}
            </Link>
          </div>
        </Nav>
      </Footer>
    </Container>
  );
};
export default Layout;
