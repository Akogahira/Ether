import { useState } from "react";
import { useParams } from "react-router-dom";
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
  SendButton,
} from "../components/Layout.styles";
import { Tools } from "../data/Herramientas"; // Asegúrate de importar los datos de herramientas

const HerramientaEsp = () => {
  const { id } = useParams();
  const toolId = parseInt(id);
  const herramienta = Tools.find((tool) => tool.id === toolId);

  const [secciones, setSecciones] = useState(herramienta ? herramienta.secciones : []);

  const toggleSeccion = (index) => {
    const updatedSecciones = [...secciones];
    updatedSecciones[index].visible = !updatedSecciones[index].visible;
    setSecciones(updatedSecciones);
  };

  const [mensaje, setMensaje] = useState("");
  const [comentarios, setComentarios] = useState([]);

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
        time: new Date().toISOString(),
        mensaje: mensaje,
        avatar: "/src/assets/images/Avatar2.png",
      };
      setComentarios([...comentarios, newComment]);
      setMensaje("");
    }
  };

  if (!herramienta) {
    return <div>Herramienta no encontrada</div>;
  }

  return (
    <ContainerMain>
      <CardHerramientaEsp style={{ backgroundImage: `url(${herramienta.foto})` }}>
        <TituloHerramientaEsp>{herramienta.nombre}</TituloHerramientaEsp>
      </CardHerramientaEsp>

      <Tag style={{ margin: "0 10px 0 0", fontSize: "15px" }}>{herramienta.tags}</Tag>
      <Tag style={{ margin: "0 10px 0 0", fontSize: "15px" }}>{herramienta.tipo}</Tag>

      <TextoSecciones>
        {secciones.map((seccion, index) => (
          <div key={index}>
            <div
              onClick={() => toggleSeccion(index)}
              style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
            >
              <h3>{seccion.titulo}</h3>
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  marginLeft: "5px",
                  transition: "transform 0.3s ease",
                  transform: seccion.visible ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path d="M7 10L12 15L17 10H7Z" fill="currentColor" />
              </svg>
            </div>
            {seccion.visible && (
              <p key={index}>
                {seccion.contenido}
              </p>
            )}
          </div>
        ))}
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
