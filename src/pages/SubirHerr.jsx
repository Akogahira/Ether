import { useState } from 'react';
import { ContainerMain, BotonSubirConv, TextFieldContainer, TextFieldSubirConv, TextFieldSubirConvGrande, BotonesSubirConv, TituloConvHome } from '../components/Layout.styles';
import { ImPlus } from 'react-icons/im';

const SubirHerr = () => {
  const [seccionCount, setSeccionCount] = useState(1); // Estado para el contador de secciones

  const agregarSeccion = () => {
    setSeccionCount(seccionCount + 1); // Incrementar el contador de secciones
  };

  return (
    <ContainerMain>
      <div>
        <TituloConvHome>Escribe el título de la herramienta.</TituloConvHome>
        <TextFieldContainer>
          <TextFieldSubirConv></TextFieldSubirConv>
        </TextFieldContainer>
      </div>

      <TituloConvHome>Explicación sobre el desarrollo de la herramienta.</TituloConvHome>
      {[...Array(seccionCount)].map((_, index) => (
        <div key={index}>
          <TextFieldContainer>
            <p>{index + 1}.</p><TextFieldSubirConv></TextFieldSubirConv>
          </TextFieldContainer>
          <TextFieldContainer>
            <TextFieldSubirConvGrande></TextFieldSubirConvGrande>
          </TextFieldContainer>
        </div>
      ))}

      <BotonesSubirConv>
        <div onClick={agregarSeccion}><ImPlus></ImPlus> Añadir sección</div>
        <BotonSubirConv>Añadir filtros</BotonSubirConv>
      </BotonesSubirConv>
    </ContainerMain>
  );
};

export default SubirHerr;
