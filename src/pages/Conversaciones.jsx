import { ContainerMain, ContainerConver, Tag, TituloConv, Divider, Boton, InfoConv } from "../components/Layout.styles";
import { Conver } from "../data/Conversaciones";

const Conversaciones = () => (
  <div>
    <ContainerMain>
      <Boton>Filtros</Boton>
      <Boton>Empieza una conversación</Boton>

      <ContainerConver>
        {Conver.map(conv => (
          <div key={conv}>
            <Divider />
            <Tag>{conv.tag}</Tag>
            <TituloConv>{conv.title}</TituloConv>
            <InfoConv>{conv.comments}</InfoConv>
          </div>
        ))}
      </ContainerConver>
    </ContainerMain>

  </div >


)

export default Conversaciones;