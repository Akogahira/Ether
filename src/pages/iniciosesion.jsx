import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BotonConv,
  MainInicio,
  ContainerInicio,
  ContainerInicioSesion,
  TextFieldInicioSesion,
  TextFieldContainerInicio,
  PassRestart,
} from '../components/Layout.styles';

const Inicio = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'pass') {
      console.log('Inicio de sesión exitoso');
      navigate('/home');
    } else {
      setError('Credenciales incorrectas');
      console.error('Error de login');
    }
  };

  return (
    <MainInicio>
      <ContainerInicio>
        <h2>¿Ya nos conocemos?</h2>

        <ContainerInicioSesion>
          <form onSubmit={handleSubmit}>
            <TextFieldContainerInicio>
              <p>¿Cuál era tu nombre?</p>
              <TextFieldInicioSesion
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
            </TextFieldContainerInicio>
            <TextFieldContainerInicio>
              <p>¿Y tu contraseña?</p>
              <TextFieldInicioSesion
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </TextFieldContainerInicio>
            <PassRestart>¿No recuerdas alguno de tus datos?</PassRestart>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <BotonConv type="submit">
              Iniciar sesión
            </BotonConv>
          </form>
        </ContainerInicioSesion>
      </ContainerInicio>
    </MainInicio>
  );
};

export default Inicio;
