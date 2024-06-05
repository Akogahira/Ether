import { ContainerMain, BotonSubirConv, TextFieldContainer, TextFieldSubirConv, TextFieldSubirConvGrande, BotonesSubirConv, TituloConvHome } from '../components/Layout.styles';
import { ImPlus } from 'react-icons/im';

const SubirHerr = () => {
  return (
    <ContainerMain>
      <div>
        <TituloConvHome>Explicación sobre el título de la herramienta.</TituloConvHome>
        <TextFieldContainer>
          <TextFieldSubirConv></TextFieldSubirConv>
        </TextFieldContainer>
      </div>
      <div>
        <TituloConvHome>Explicación sobre el desarrollo de la herramienta.</TituloConvHome>
        <TextFieldContainer>
          <p>1.</p><TextFieldSubirConv></TextFieldSubirConv>
        </TextFieldContainer>
        <TextFieldContainer>
          <TextFieldSubirConvGrande></TextFieldSubirConvGrande>
        </TextFieldContainer>
      </div>

      <BotonesSubirConv>
        <div><ImPlus ></ImPlus > Añadir sección </div>
        <BotonSubirConv>Añadir filtros</BotonSubirConv>
      </BotonesSubirConv>
    </ContainerMain>
  );
};

export default SubirHerr;
