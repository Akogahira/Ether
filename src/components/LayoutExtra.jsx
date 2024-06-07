import { Link, useLocation, Outlet } from "react-router-dom";
import { IoHome, IoHomeOutline } from "react-icons/io5";
import { MdForum, MdOutlineForum } from "react-icons/md";
import { IoBookSharp, IoBookOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import { PiChatCircle, PiChatCircleFill } from "react-icons/pi";
import {
  Container,
  Nav,
  Footer2,
  Footer,
  Main,
  Nav3,
  Divider,
} from "./Layout.styles";

const LayoutExtra = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isConvPage = location.pathname === "/conversaciones";
  const isHerrPage = location.pathname === "/herramientas";
  const isChatPage = location.pathname === "/chat";
  const isChatEspPage = location.pathname === "/chatpriv";
  const isSubirHerrPage = location.pathname === "/subirherramienta";
  const isSubirConvPage = location.pathname === "/subirconversacion";
  const isConvEspPage = location.pathname === "/conversacionesp";
  const isHerrEspPage = location.pathname === "/herramientaesp";

  const goBack = () => {
    window.history.back();
  };

  return (
    <Container>
      <Footer2>
        <Nav3>
          <Link to="#" onClick={goBack}>
            <GoArrowLeft />
          </Link>
        </Nav3>
      </Footer2>

      <Main>
        <Outlet /> {/* Aquí se renderizarán las rutas hijas */}
      </Main>

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

export default LayoutExtra;
