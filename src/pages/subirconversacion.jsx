import { ImUpload } from "react-icons/im";
import {
  BotonSubirConv,
  ContainerMain,
  TextFieldContainer,
  TextFieldSubirConv,
  TextFieldSubirConvGrande,
  BotonesSubirConv,
  TituloConvHome,
} from "../components/Layout.styles";

const SubirConv = () => {
  return (
    <ContainerMain>
      <div>
        <TituloConvHome>
          Explicación sobre el título de la conversación.
        </TituloConvHome>
        <TextFieldContainer>
          <TextFieldSubirConv></TextFieldSubirConv>
        </TextFieldContainer>
      </div>
      <div>
        <TituloConvHome>Explicación sobre el título resumido.</TituloConvHome>
        <TextFieldContainer>
          <TextFieldSubirConvGrande></TextFieldSubirConvGrande>
        </TextFieldContainer>
      </div>
      <div>
        <TituloConvHome>
          Explicación sobre el desarrollo del tema de la conversación.
        </TituloConvHome>
        <TextFieldContainer>
          <TextFieldSubirConvGrande></TextFieldSubirConvGrande>
        </TextFieldContainer>
      </div>

      <BotonesSubirConv>
        <div>
          <ImUpload></ImUpload> Subir imagen
        </div>
        <BotonSubirConv>Añadir filtros</BotonSubirConv>
      </BotonesSubirConv>

      <BotonesSubirConv style={{ display: "flex", alignItems: "flex-end" }}>
        <BotonSubirConv>Enviar</BotonSubirConv>
      </BotonesSubirConv>
    </ContainerMain>
  );
};

export default SubirConv;
