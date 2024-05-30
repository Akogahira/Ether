import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { IoBookSharp, IoBookOutline, IoHomeOutline, IoHome } from "react-icons/io5";
import { PiChatCircle, PiChatCircleFill } from "react-icons/pi";
import { MdForum, MdOutlineForum } from "react-icons/md";
import { Container, Nav, Footer2, Footer, Main, Nav2, Divider2 } from './Layout.styles';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isConvPage = location.pathname === '/Conversaciones';
  const isHerrPage = location.pathname === '/Herramientas';
  const isChatPage = location.pathname === '/Chat';

  return (
    <Container>
      <Footer2>
        <Nav2>
          <Link to="/Perfil"><FaHome /></Link>
          <h2>Página</h2>
          <Link to="/Perfil"><FaHome /></Link>
        </Nav2>
      </Footer2>

      <Main>{children}</Main>

      <Divider2 />
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
