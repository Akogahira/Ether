import { BotonConv, MainInicio, ContainerInicio, ContainerInicioSesion, TextFieldInicioSesion, TextFieldContainerInicio, CheckboxContainer } from '../components/Layout.styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Inicio = () => {
  const [politicaAceptada, setPoliticaAceptada] = useState(false);

  const handlePoliticaChange = () => {
    setPoliticaAceptada(!politicaAceptada);
  };

  return (
    <MainInicio>
      <ContainerInicio>
        <h2>¿No nos han presentado?</h2>
        <ContainerInicioSesion>
          <TextFieldContainerInicio>
            <p>¿Cómo te conocerán los demás?</p><TextFieldInicioSesion defaultValue={"Nombre de usuario"}></TextFieldInicioSesion>
          </TextFieldContainerInicio>
          <TextFieldContainerInicio>
            <p>Email</p><TextFieldInicioSesion defaultValue={"Ejemplo@gmail.com"}></TextFieldInicioSesion>
          </TextFieldContainerInicio>
          <TextFieldContainerInicio>
            <p>Elige una contraseña segura</p><TextFieldInicioSesion defaultValue={"Contraseña"}></TextFieldInicioSesion>
          </TextFieldContainerInicio>
          <TextFieldContainerInicio>
            <p>Repite tu contraseña</p> <TextFieldInicioSesion defaultValue={"Contraseña"}></TextFieldInicioSesion>
          </TextFieldContainerInicio>
          <CheckboxContainer>
            <input type="checkbox" id="politica" checked={politicaAceptada} onChange={handlePoliticaChange} />
            <label htmlFor="politica">Acepto la política de privacidad</label>
          </CheckboxContainer>
        </ContainerInicioSesion>
        <BotonConv disabled={!politicaAceptada}><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Registrarse</Link ></BotonConv>
      </ContainerInicio>
    </MainInicio >
  );
};

export default Inicio;
