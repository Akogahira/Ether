import { useState } from "react";
import {
  ContainerMain,
  Avatar,
  BotonPerfil,
  TextFieldPerfil,
  AjustesPerfil,
  FlechaAnterior,
  FlechaSiguiente,
  ContainerSwitches
} from "../components/Layout.styles";
import Switch from "react-ios-switch";

const Perfil = () => {
  const [checkedEsconderPerfil, setCheckedEsconderPerfil] = useState(false);
  const [checkedMensajesPrivados, setCheckedMensajesPrivados] = useState(false);
  const [checkedNotificaciones, setCheckedNotificaciones] = useState(false);
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [mostrarFlechas, setMostrarFlechas] = useState(false);
  const [editandoPerfil, setEditandoPerfil] = useState(false);

  const avatares = [
    "static/images/Avatar1.png",
    "static/images/Avatar2.png",
    "static/images/Avatar3.png",
    "static/images/Avatar4.png",
    "static/images/Avatar5.png",
    "static/images/Avatar6.png",
    "static/images/Avatar7.png",
    "static/images/Avatar8.png",
    "static/images/Avatar9.png",
    "static/images/Avatar10.png",
  ];

  const handleChangeEsconderPerfil = (nextChecked) => {
    setCheckedEsconderPerfil(nextChecked);
  };

  const handleChangeMensajesPrivados = (nextChecked) => {
    setCheckedMensajesPrivados(nextChecked);
  };

  const handleChangeNotificaciones = (nextChecked) => {
    setCheckedNotificaciones(nextChecked);
  };

  const handleCambiarAvatarSiguiente = () => {
    const newIndex = (avatarIndex + 1) % avatares.length;
    setAvatarIndex(newIndex);
  };

  const handleCambiarAvatarAnterior = () => {
    const newIndex = (avatarIndex - 1 + avatares.length) % avatares.length;
    setAvatarIndex(newIndex);
  };

  const handleEditarPerfil = () => {
    setEditandoPerfil(!editandoPerfil);
    setMostrarFlechas(!editandoPerfil);
  };

  return (
    <div>
      <ContainerMain>
        <Avatar>
          {mostrarFlechas && (
            <FlechaAnterior onClick={handleCambiarAvatarAnterior}>&lt;</FlechaAnterior>
          )}
          <img src={avatares[avatarIndex]} alt="Avatar" />
          {mostrarFlechas && (
            <FlechaSiguiente onClick={handleCambiarAvatarSiguiente}>&gt;</FlechaSiguiente>
          )}
          <BotonPerfil onClick={handleEditarPerfil}>
            {editandoPerfil ? "Guardar" : "Cambiar avatar"}
          </BotonPerfil>
        </Avatar>

        <AjustesPerfil>
          <h2>Nombre de usuario</h2>
          <TextFieldPerfil
            defaultValue={"Akogahira"}
            id="nombreUsuario"
            name="nombreUsuario"
          />

          <h2>Privacidad</h2>
          <ContainerSwitches>
            <h4>Esconder mi perfil</h4>
            <Switch
              checked={checkedEsconderPerfil}
              onChange={handleChangeEsconderPerfil}
              onColor="#dad1ef"
              id="esconderPerfil"
              name="esconderPerfil"
            />
          </ContainerSwitches>

          <ContainerSwitches>
            <h4>Permitir mensajes privados</h4>
            <Switch
              checked={checkedMensajesPrivados}
              onChange={handleChangeMensajesPrivados}
              onColor="#dad1ef"
              id="mensajesPrivados"
              name="mensajesPrivados"
            />
          </ContainerSwitches>

          <h2>Notificaciones</h2>
          <ContainerSwitches>
            <h4>Desactivar notificaciones</h4>
            <Switch
              checked={checkedNotificaciones}
              onChange={handleChangeNotificaciones}
              onColor="#dad1ef"
              id="notificaciones"
              name="notificaciones"
            />
          </ContainerSwitches>
          <h2>Idioma</h2>
          <ContainerSwitches>
            <h4>Cambiar idioma</h4>
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "black",
              }}
              id="cambiarIdioma"
              name="cambiarIdioma"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </ContainerSwitches>
        </AjustesPerfil>
      </ContainerMain>
    </div>
  );
};

export default Perfil;
