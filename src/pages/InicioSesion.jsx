import { BotonConv, MainInicio, ContainerInicio, ContainerInicioSesion, TextFieldInicioSesion, TextFieldContainerInicio, PassRestart } from '../components/Layout.styles';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <MainInicio>
      <ContainerInicio>
        <h2>¿Ya nos conocemos?</h2>

        <ContainerInicioSesion>
          <TextFieldContainerInicio>
            <p>¿Cuál era tu nombre?</p><TextFieldInicioSesion defaultValue={"Email"}></TextFieldInicioSesion>
          </TextFieldContainerInicio>
          <TextFieldContainerInicio>
            <p>¿Y tu contraseña?</p><TextFieldInicioSesion defaultValue={"Contraseña"}></TextFieldInicioSesion>
          </TextFieldContainerInicio>
          <PassRestart>¿No recuerdas alguno de tus datos?</PassRestart>
        </ContainerInicioSesion>


        <BotonConv><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Iniciar sesión</Link ></BotonConv>
      </ContainerInicio>
    </MainInicio>
  );
};

export default Inicio;
