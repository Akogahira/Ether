import { ImUpload } from "react-icons/im";
import { BotonConv, ContainerMain, TextFieldPerfil } from "../components/Layout.styles";

const SubirConv = () => {
  return (
    <ContainerMain>
      <div>
        <h4>Explicación sobre el título de la conversación.</h4>
        <TextFieldPerfil></TextFieldPerfil>
      </div>
      <div>
        <h4>Explicación sobre el título resumido.</h4>
        <TextFieldPerfil></TextFieldPerfil>
      </div>
      <div>
        <h4>Explicación sobre el desarrollo del tema de la conversación.</h4>
        <TextFieldPerfil></TextFieldPerfil>
      </div>
      <div>
        <ImUpload></ImUpload>
        <BotonConv>Añadir filtros</BotonConv>
      </div>
    </ContainerMain>
  );
};

export default SubirConv;
