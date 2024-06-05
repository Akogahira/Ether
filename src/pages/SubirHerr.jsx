import { ContainerMain, BotonConv, TextFieldPerfil } from '../components/Layout.styles';

const SubirHerr = () => {
  return (
    <ContainerMain>
      <div>
        <h4>Explicación sobre el título de la herramienta.</h4>
        <TextFieldPerfil></TextFieldPerfil>
      </div>
      <div>
        <h4>Explicación sobre el desarrollo de la herramienta.</h4>
        <TextFieldPerfil></TextFieldPerfil>
      </div>
      <div>
        <h4>Explicación sobre el desarrollo del tema de la conversación.</h4>
        1. <TextFieldPerfil></TextFieldPerfil>
        <TextFieldPerfil></TextFieldPerfil>
      </div>
      <div>
        <BotonConv>Añadir sección</BotonConv>
        <BotonConv>Añadir filtros</BotonConv>
      </div>
    </ContainerMain>
  );
};

export default SubirHerr;
