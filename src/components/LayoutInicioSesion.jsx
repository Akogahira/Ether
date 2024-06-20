import { Outlet, Link } from 'react-router-dom';
import { Main1, Footer2, Nav3 } from './Layout.styles';
import { GoArrowLeft } from 'react-icons/go';

const LayoutInicioSesion = () => {

  const goBack = () => {
    window.history.back();
  };


  return (

    <Main1>
      <Footer2>
        <Nav3>
          <Link to="#" onClick={goBack}>
            <GoArrowLeft />
          </Link>
        </Nav3>
      </Footer2>

      <Outlet />
    </Main1>
  )
};

export default LayoutInicioSesion;

