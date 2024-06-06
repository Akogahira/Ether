import { BotonConv, MainInicio, ContainerInicio } from "../components/Layout.styles";
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <MainInicio>
      <ContainerInicio>
        <h2>¿Ya nos conocemos?</h2>
        <Link to="/InicioSesion" style={{ textDecoration: 'none', color: 'inherit' }}>
          <BotonConv>Iniciar sesión</BotonConv></Link >

        <h2>¿Todavía no?</h2>
        <Link to="/InicioRegistro" style={{ textDecoration: 'none', color: 'inherit' }}>
          <BotonConv>Registrarse</BotonConv></Link >
      </ContainerInicio>
    </MainInicio>
  );
};

export default Inicio;
