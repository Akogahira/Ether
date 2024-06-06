import { ContainerMain, Divider, Tag, TagConver, TextFieldContainer, TextFieldConver, TituloConvEsp, TituloHomeGenerico, BusquedaHerramientas, ResultHerr } from '../components/Layout.styles';

const SubirHerr = () => {
  return (
    <ContainerMain>
      <TextFieldContainer>
        <TextFieldConver></TextFieldConver>
      </TextFieldContainer>

      <TituloHomeGenerico><h2>Resultado de conversaciones</h2></TituloHomeGenerico>

      <div>
        <div>
          <TagConver style={{ marginRight: '6px' }}>Filtro 1</TagConver><Tag>Filtro 2</Tag>
        </div>
        <div>
          <TituloConvEsp style={{ marginTop: '6px' }}>¿Opinión del journaling como herramienta?</TituloConvEsp>
        </div>
      </div>

      <Divider></Divider>
      <div>
        <div>
          <TagConver style={{ marginRight: '6px' }}>Filtro 1</TagConver><Tag>Filtro 2</Tag>
        </div>
        <div>
          <TituloConvEsp style={{ marginTop: '6px' }}>¿Opinión del League of Legends como herramienta?</TituloConvEsp>
        </div>
      </div>

      <Divider></Divider>


      <TituloHomeGenerico><h2>Resultado de herramientas</h2></TituloHomeGenerico>

      <BusquedaHerramientas>
        <ResultHerr>
          Herramienta 1
        </ResultHerr>
        <ResultHerr>
          Herramienta 2
        </ResultHerr>
        <ResultHerr>
          Herramienta 3
        </ResultHerr>
        <ResultHerr>
          Herramienta 4
        </ResultHerr>
      </BusquedaHerramientas>

    </ContainerMain>

  );
};

export default SubirHerr;
