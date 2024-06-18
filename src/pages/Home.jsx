import {
  ContainerMain,
  CardHome,
  CardHomeImg,
  TagHome,
  TituloConvHome,
  AutorHome,
  CardContainer,
  CardHomeInfo,
  InfoHome,
  TituloHerrHome,
  BotonHome,
  BotonConv,
  TituloHomeGenerico,
} from "../components/Layout.styles";
import { Link } from "react-router-dom";
import { Conver } from "../data/Conversaciones";
import { PiChatCircle } from "react-icons/pi";
import { Tools } from "../data/Herramientas";

const Home = () => {
  return (
    <div>
      <ContainerMain>
        <TituloHomeGenerico>
          <h2>Únete a estas conversaciones</h2>
        </TituloHomeGenerico>
        <CardContainer>
          {Conver.map((convh, index) => (
            <CardHome key={`${convh.autor}-${index}`}>
              <Link
                to={`/conversacionesp/${convh.id}`} // Enlace dinámico con el ID de la conversación
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <CardHomeInfo>
                  <AutorHome>{convh.autor}</AutorHome>
                  <TituloConvHome>{convh.shortitle}</TituloConvHome>
                  <TagHome>{convh.tag}</TagHome>
                  <InfoHome>
                    <span style={{ padding: "2px" }}>
                      <PiChatCircle size={10} />
                    </span>
                    {convh.comments}
                  </InfoHome>
                </CardHomeInfo>
              </Link>
            </CardHome>
          ))}
        </CardContainer>

        <BotonHome>
          <Link
            to="/conversaciones"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Ver más
          </Link>
        </BotonHome>

        <TituloHomeGenerico>
          <h2>¿Conoces estas herramientas?</h2>
        </TituloHomeGenerico>
        <CardContainer>
          {Tools.map((tool, index) => (
            <CardHome key={`${tool.nombre}-${index}`}>
              <Link
                to={`/herramientaesp/${tool.id}`} // Enlace dinámico con el ID de la herramienta
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <CardHomeImg>
                  <img src={tool.foto} alt={tool.nombre} />
                  <TituloHerrHome>{tool.nombre}</TituloHerrHome>
                </CardHomeImg>
              </Link>
            </CardHome>
          ))}
        </CardContainer>

        <BotonHome>
          <Link
            to="/herramientas"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Ver más
          </Link>
        </BotonHome>

        <TituloHomeGenerico>
          <h2>¿Quieres compartir algo?</h2>
        </TituloHomeGenerico>
        <Link
          to="/subirconversacion"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <BotonConv style={{ margin: "0px" }}>
            Empieza una conversación
          </BotonConv>
        </Link>

        <TituloHomeGenerico>
          <h2>¿Conoces alguna herramienta que te ayude?</h2>
        </TituloHomeGenerico>
        <Link
          to="/subirherramienta"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <BotonConv style={{ margin: "0px" }}>
            Publica una herramienta
          </BotonConv>
        </Link>
      </ContainerMain>
    </div>
  );
};

export default Home;
