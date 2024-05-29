import { Link } from 'react-router-dom';
import { FaHome, FaComments, FaTools, FaCommentsDollar } from 'react-icons/fa';
import { Container, Nav, Footer2, Footer, Main, Nav2, Divider2 } from './Layout.styles';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
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
          <Link to="/"><FaHome /></Link>
          <Link to="/Conversaciones"><FaComments /></Link>
          <Link to="/Herramientas"><FaTools /></Link>
          <Link to="/Chat"><FaCommentsDollar /></Link>
        </div>
      </Nav>
    </Footer>
  </Container>
);

export default Layout;
