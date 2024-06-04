import { ContainerMain, Avatar, BotonPerfil } from '../components/Layout.styles';

const Perfil = () => (
  <div>
    <ContainerMain>
      <Avatar>
        <img src='src\assets\images\Avatar2.png'></img>
        <BotonPerfil> Editar avatar </BotonPerfil>
      </Avatar>
      <h2>Perfil de usuario</h2>

      <h2>Ajustes</h2>
    </ContainerMain>
  </div>


)

export default Perfil;