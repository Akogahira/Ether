import { useState } from "react";
import { Link } from "react-router-dom";
import { ContainerMain, ContainerConver, Tag, TituloConv, Divider, BotonConv, InfoConv, ContainerCollapseConv, Collapse, DescripcionConvEsp } from '../components/Layout.styles';
import { Conver } from "../data/Conversaciones";
import { PiChatCircle } from "react-icons/pi";
import { IoChevronDown, IoChevronUp } from "react-icons/io5"; // Importamos las flechas

const Conversaciones = () => {
  const [showDescriptions, setShowDescriptions] = useState(Array(Conver.length).fill(false));

  const toggleDescription = (index) => {
    const newShowDescriptions = [...showDescriptions];
    newShowDescriptions[index] = !newShowDescriptions[index];
    setShowDescriptions(newShowDescriptions);
  };

  return (
    <div>
      <ContainerMain>
        <BotonConv>Filtros</BotonConv>
        <Link
          to="/subirconversacion"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <BotonConv>Empieza una conversación</BotonConv>
        </Link>
        <ContainerConver>
          {Conver.map((conv, index) => (
            <div key={conv}>
              <Divider style={{ margin: "10px 0" }} />
              <Tag>{conv.tag}</Tag>
              <Link to="/conversacionesp" style={{ textDecoration: "none" }}>
                <TituloConv>{conv.title}</TituloConv>
                {showDescriptions[index] && <DescripcionConvEsp>{conv.descripcion}</DescripcionConvEsp>}
              </Link>
              <ContainerCollapseConv>
                <Collapse onClick={() => toggleDescription(index)} style={{ display: "flex", alignItems: "center", marginTop: "2px" }}>
                  <span>{showDescriptions[index] ? "Ver menos" : "Ver más"}</span>
                  {showDescriptions[index] ? (
                    <IoChevronUp style={{ marginLeft: "5px" }} />
                  ) : (
                    <IoChevronDown style={{ marginLeft: "5px" }} />
                  )}
                </Collapse>

                <InfoConv>
                  <span style={{ padding: "10px" }}>{conv.time}</span>
                  <span style={{ margin: "10px 1px 0px 2px" }}>
                    <PiChatCircle size={11} />
                  </span>
                  {conv.comments}
                </InfoConv>
              </ContainerCollapseConv>
            </div>
          ))}
        </ContainerConver>
      </ContainerMain>
    </div>
  );
};

export default Conversaciones;
