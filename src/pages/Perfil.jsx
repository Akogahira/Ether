import { ContainerMain, Avatar, BotonPerfil, TextFieldPerfil, AjustesPerfil } from '../components/Layout.styles';

const Perfil = () => (
  <div>
    <ContainerMain>
      <Avatar>
        <img src='src\assets\images\Avatar2.png'></img>
        <BotonPerfil> Editar avatar </BotonPerfil>
      </Avatar>

      <AjustesPerfil>
        <h2>Nombre de usuario</h2>
        <TextFieldPerfil defaultValue={"Akogahira"}></TextFieldPerfil>

        <h2>Privacidad</h2>
        <h4>
          Esconder mi perfil
        </h4>
        <div>
          <switch></switch>
        </div>

        <h4>
          Permitir mensajes privados
        </h4>
        <div>
          <switch></switch>
        </div>

        <h2>Notificaciones</h2>
        <h4>
          Desactivar notificaciones
        </h4>
        <div>
          <switch></switch>
        </div>

        <h2>idioma</h2>
        <div>
          <h4>
            Cambiar idioma
          </h4>
          <div>
            <button></button>
          </div>
        </div>

      </AjustesPerfil>
    </ContainerMain>
  </div>


)

export default Perfil;