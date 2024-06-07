import { ContainerMain } from "../components/Layout.styles";
import {
  Tag,
  CardHerramientaEsp,
  TituloHerramientaEsp,
  TextoSecciones,
  Divider,
  TextFieldConver,
  TextFieldContainer,
  ContainerComentarioA,
  DatosComentIzqA1,
  DatosComentIzqA2,
  DatoComentNameA,
  ComentIzqA,
  DatoComentTimeA,
  DescripcionComentarioA,
} from "../components/Layout.styles";
import { useState } from "react";

const HerramientaEsp = () => {
  const [seccion1Visible, setSeccion1Visible] = useState(true);
  const [seccion2Visible, setSeccion2Visible] = useState(true);

  const toggleSeccion1 = () => {
    setSeccion1Visible(!seccion1Visible);
  };

  const toggleSeccion2 = () => {
    setSeccion2Visible(!seccion2Visible);
  };

  return (
    <ContainerMain>
      <CardHerramientaEsp>
        <TituloHerramientaEsp>Neurohacking</TituloHerramientaEsp>
      </CardHerramientaEsp>

      <Tag style={{ margin: "0 10px 0 0", fontSize: "15px" }}>Filtro 1</Tag>
      <Tag style={{ margin: "0 10px 0 0", fontSize: "15px" }}>Filtro 2</Tag>
      <Tag style={{ margin: "0 10px 0 0", fontSize: "15px" }}>Filtro 3</Tag>

      <TextoSecciones>
        <div
          onClick={toggleSeccion1}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <span>Sección 1</span>
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              marginLeft: "5px",
              transition: "transform 0.3s ease",
              transform: seccion1Visible ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <path d="M7 10L12 15L17 10H7Z" fill="currentColor" />
          </svg>
        </div>
        {seccion1Visible && (
          <p>
            Explicación de la herramienta sección 1. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Nemo facilis ex incidunt amet cum
            temporibus debitis, minus tempora suscipit, animi inventore
            quibusdam ut aliquam porro? Quos aspernatur veritatis quibusdam
            aperiam?
          </p>
        )}

        <div
          onClick={toggleSeccion2}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <span>Sección 2</span>
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              marginLeft: "5px",
              transition: "transform 0.3s ease",
              transform: seccion2Visible ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <path d="M7 10L12 15L17 10H7Z" fill="currentColor" />
          </svg>
        </div>
        {seccion2Visible && (
          <p>
            Explicación de la herramienta sección 2. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Nemo facilis ex incidunt amet cum
            temporibus debitis, minus tempora suscipit, animi inventore
            quibusdam ut aliquam porro? Quos aspernatur veritatis quibusdam
            aperiam?
          </p>
        )}
      </TextoSecciones>

      <Divider />
      <TextFieldContainer>
        <TextFieldConver></TextFieldConver>
      </TextFieldContainer>

      <ContainerComentarioA>
        <ComentIzqA>
          <DatosComentIzqA1>
            <img src="src/assets/images/Avatar2.png" alt="Icon" />
          </DatosComentIzqA1>

          <DatosComentIzqA2>
            <DatoComentNameA>AlguienUnLol</DatoComentNameA>

            <DatoComentTimeA>6h</DatoComentTimeA>
          </DatosComentIzqA2>
        </ComentIzqA>
      </ContainerComentarioA>

      <DescripcionComentarioA>
        A mi me parece una gilipollez porque blablablablablablabla
      </DescripcionComentarioA>

      <Divider />

      <ContainerComentarioA>
        <ComentIzqA>
          <DatosComentIzqA1>
            <img src="src/assets/images/Avatar5.png" alt="Icon" />
          </DatosComentIzqA1>

          <DatosComentIzqA2>
            <DatoComentNameA>AlguienUnLol2</DatoComentNameA>

            <DatoComentTimeA>4h</DatoComentTimeA>
          </DatosComentIzqA2>
        </ComentIzqA>
      </ContainerComentarioA>

      <DescripcionComentarioA>AAAAAAAAaa aaaaaaaaaa aa</DescripcionComentarioA>
    </ContainerMain>
  );
};

export default HerramientaEsp;
