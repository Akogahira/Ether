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
          <CardHome>
            <CardHomeImg>
              <img
                src="src/assets/images/Herramienta1.png"
                alt="Herramienta 1"
              />
              <TituloHerrHome>Neurohacking</TituloHerrHome>
            </CardHomeImg>
          </CardHome>
          <CardHome>
            <CardHomeImg>
              <img
                src="src/assets/images/Herramienta2.png"
                alt="Herramienta 2"
              />
              <TituloHerrHome>Técnicas de respiración</TituloHerrHome>
            </CardHomeImg>
          </CardHome>
          <CardHome>
            <CardHomeImg>
              <img
                src="src/assets/images/Herramienta3.png"
                alt="Herramienta 3"
              />
              <TituloHerrHome>Música</TituloHerrHome>
            </CardHomeImg>
          </CardHome>
          <CardHome>
            <CardHomeImg>
              <img
                src="src/assets/images/Herramienta4.png"
                alt="Herramienta 4"
              />
              <TituloHerrHome>Journaling</TituloHerrHome>
            </CardHomeImg>
          </CardHome>
          <CardHome>
            <CardHomeImg>
              <img
                src="src/assets/images/Herramienta6.png"
                alt="Herramienta 5"
              />
              <TituloHerrHome>Terapia Cognitivo Conductual</TituloHerrHome>
            </CardHomeImg>
          </CardHome>
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
