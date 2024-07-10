import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  ContainerMain,
  ContainerConverEsp,
  Divider,
  ContainerDivider,
  TagConver,
  TituloConvEsp,
  UserIzq,
  DatosUserIzq,
  DatosUserIzq2,
  DatoUserName,
  DatoUserTime,
  DescripcionConvEsp,
  ContainerComentarioA,
  DatosComentIzqA1,
  DatosComentIzqA2,
  DatoComentNameA,
  ComentIzqA,
  DatoComentTimeA,
  DescripcionComentarioA,
  ChatInputTextarea,
  SendButton,
  ConverInputContainer,
} from "../components/Layout.styles";
import { Conver } from "../data/Conversaciones";

const ConversacionEsp = () => {
  const { id } = useParams();
  const conversation = Conver.find(conv => conv.id === parseInt(id));

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
        avatar: "/static/images/Avatar2.png",
      };
      setComentarios([...comentarios, newComment]);
      setMensaje("");
    }
  };

  if (!conversation) {
    return <div>Conversación no encontrada</div>;
  }

  return (
    <ContainerMain>
      <ContainerDivider key={`${conversation.autor}-${conversation.time}-0`}>
        <ContainerConverEsp>
          <UserIzq>
            <DatosUserIzq>
              <img src={conversation.img} alt="Icon" />
            </DatosUserIzq>
            <DatosUserIzq2>
              <DatoUserName>{conversation.autor}</DatoUserName>
              <DatoUserTime>{conversation.time}</DatoUserTime>
            </DatosUserIzq2>
          </UserIzq>
        </ContainerConverEsp>

        <TagConver>{conversation.tag}</TagConver>

        <TituloConvEsp>{conversation.title}</TituloConvEsp>
        <DescripcionConvEsp>{conversation.descripcion}</DescripcionConvEsp>

        <Divider />
      </ContainerDivider>

      <ConverInputContainer>
        <ChatInputTextarea
          placeholder="Escribe tu mensaje aquí..."
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <SendButton onClick={handleSendMessage}>Enviar</SendButton>
      </ConverInputContainer>

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
        </div>
      ))}
    </ContainerMain>
  );
};

export default ConversacionEsp;
