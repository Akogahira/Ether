import { ContainerMain, Avatar, BotonPerfil, TextFieldPerfil, AjustesPerfil, ContainerSwitches } from '../components/Layout.styles';
import Switch from 'react-ios-switch';
import { useState } from 'react';

const Perfil = () => {

  const [checkedEsconderPerfil, setCheckedEsconderPerfil] = useState(false);
  const [checkedMensajesPrivados, setCheckedMensajesPrivados] = useState(false);
  const [checkedNotificaciones, setCheckedNotificaciones] = useState(false);

  const handleChangeEsconderPerfil = (nextChecked) => {
    setCheckedEsconderPerfil(nextChecked);
  }

  const handleChangeMensajesPrivados = (nextChecked) => {
    setCheckedMensajesPrivados(nextChecked);
  }

  const handleChangeNotificaciones = (nextChecked) => {
    setCheckedNotificaciones(nextChecked);
  }

  return (
    < div >
      <ContainerMain>
        <Avatar>
          <img src='src\assets\images\Avatar2.png'></img>
          <BotonPerfil> Editar avatar </BotonPerfil>
        </Avatar>

        <AjustesPerfil>
          <h2>Nombre de usuario</h2>
          <TextFieldPerfil defaultValue={"Akogahira"}></TextFieldPerfil>


          <h2>Privacidad</h2>
          <ContainerSwitches>
            <h4>
              Esconder mi perfil
            </h4>
            <Switch checked={checkedEsconderPerfil}
              onChange={handleChangeEsconderPerfil} onColor="#dad1ef" />
          </ContainerSwitches>

          <ContainerSwitches>
            <h4>
              Permitir mensajes privados
            </h4>
            <Switch checked={checkedMensajesPrivados}
              onChange={handleChangeMensajesPrivados} onColor="#dad1ef" />
          </ContainerSwitches>

          <h2>Notificaciones</h2>
          <ContainerSwitches>
            <h4>
              Desactivar notificaciones
            </h4>
            <Switch checked={checkedNotificaciones}
              onChange={handleChangeNotificaciones} onColor="#dad1ef" />
          </ContainerSwitches>
          <h2>Idioma</h2>
          <ContainerSwitches>
            <h4>
              Cambiar idioma
            </h4>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'black' }}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="currentColor" />
              </svg>
            </button>
          </ContainerSwitches>

        </AjustesPerfil>
      </ContainerMain>
    </div >

  )
};

export default Perfil;