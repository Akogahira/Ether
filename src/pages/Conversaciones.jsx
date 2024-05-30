import { ContainerMain, ContainerConver, Tag, TituloConv, Divider, BotonConv, InfoConv, ContainerCollapseConv, Collapse } from "../components/Layout.styles";
import { Conver } from "../data/Conversaciones";
import { PiChatCircle } from 'react-icons/pi';

const Conversaciones = () => (
  <div>
    <ContainerMain>
      <BotonConv>Filtros</BotonConv>
      <BotonConv>Empieza una conversación</BotonConv>

      <ContainerConver>
        {Conver.map(conv => (
          <div key={conv}>
            <Divider style={{ margin: '10px 0' }} />
            <Tag>{conv.tag}</Tag>
            <TituloConv>{conv.title}</TituloConv>
            <ContainerCollapseConv>
              <Collapse>
                Ver más
              </Collapse>

              <InfoConv>
                <span style={{ padding: '10px' }}>{conv.time}</span>
                <span style={{ margin: '10px 1px 0px 2px' }}>
                  <PiChatCircle size={11} />
                </span>{conv.comments}</InfoConv>
            </ContainerCollapseConv>

          </div>
        ))}
      </ContainerConver>
    </ContainerMain>

  </div >


)

export default Conversaciones;