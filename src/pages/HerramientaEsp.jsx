import { useState } from "react";
import {
  ContainerMain,
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
  SendButton
} from "../components/Layout.styles";

const HerramientaEsp = () => {
  const [seccion1Visible, setSeccion1Visible] = useState(true);
  const [seccion2Visible, setSeccion2Visible] = useState(true);
  const [mensaje, setMensaje] = useState("");
  const [comentarios, setComentarios] = useState([
    { autor: "AlguienUnLol", time: "6h", mensaje: "Primer comentario de prueba", avatar: "src/assets/images/Avatar4.png" },
    { autor: "AlguienUnLol2", time: "4h", mensaje: "Segundo comentario de prueba", avatar: "src/assets/images/Avatar5.png" },
  ]);

  const toggleSeccion1 = () => {
    setSeccion1Visible(!seccion1Visible);
  };

  const toggleSeccion2 = () => {
    setSeccion2Visible(!seccion2Visible);
  };

  const getTimeDifference = (date) => {
    const now = new Date();
    const messageDate = new Date(date);
    const diff = now - messageDate;

    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);

    if (hours > 0) {
      return `hace ${hours} hora${hours > 1 ? "s" : ""}`;
    } else {
      return `hace ${minutes} minuto${minutes > 1 ? "s" : ""}`;
    }
  };

  const handleSendMessage = () => {
    if (mensaje.trim() !== "") {
      const newComment = {
        autor: "Tu",
        time: new Date().getTime(), // Marcamos el tiempo actual en milisegundos
        mensaje: mensaje,
        avatar: "src/assets/images/Avatar2.png", // Cambia AvatarTu.png por la imagen que desees para el avatar del usuario actual
      };
      setComentarios([...comentarios, newComment]);
      setMensaje("");
    }
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
        <TextFieldConver
          placeholder="Escribe tu comentario aquí..."
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <SendButton onClick={handleSendMessage}>Enviar</SendButton>
      </TextFieldContainer>

      {comentarios.map((comentario, index) => (
        <div key={index}>
          <ContainerComentarioA>
            <ComentIzqA>
              <DatosComentIzqA1>
                <img src={comentario.avatar} alt="Icon" />
              </DatosComentIzqA1>
              <DatosComentIzqA2>
                <DatoComentNameA>{comentario.autor}</DatoComentNameA>
                <DatoComentTimeA>{comentario.autor === "Tu" ? getTimeDifference(comentario.time) : comentario.time}</DatoComentTimeA>
              </DatosComentIzqA2>
            </ComentIzqA>
          </ContainerComentarioA>
          <DescripcionComentarioA>{comentario.mensaje}</DescripcionComentarioA>
          <Divider />
        </div>
      ))}
    </ContainerMain>
  );
};

export default HerramientaEsp;

