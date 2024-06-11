import { useState } from "react";
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
  const [mensaje, setMensaje] = useState("");
  const [comentarios, setComentarios] = useState([
    { autor: "AlguienUnLol", time: "6h", mensaje: "Primer comentario de prueba", avatar: "src/assets/images/Avatar4.png" },
    { autor: "AlguienUnLol2", time: "4h", mensaje: "Segundo comentario de prueba", avatar: "src/assets/images/Avatar5.png" },
  ]);

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
        avatar: "src/assets/images/Avatar2.png", // Cambia AvatarTu.png por la imagen que desees para el avatar del usuario actual
      };
      setComentarios([...comentarios, newComment]);
      setMensaje("");
    }
  };

  return (
    <div>
      <ContainerMain>
        <ContainerDivider key={`${Conver[0].autor}-${Conver[0].time}-0`}>
          <ContainerConverEsp>
            <UserIzq>
              <DatosUserIzq>
                <img src={Conver[0].img} alt="Icon" />
              </DatosUserIzq>
              <DatosUserIzq2>
                <DatoUserName>{Conver[0].autor}</DatoUserName>
                <DatoUserTime>{Conver[0].time}</DatoUserTime>
              </DatosUserIzq2>
            </UserIzq>
          </ContainerConverEsp>

          <TagConver>{Conver[0].tag}</TagConver>

          <TituloConvEsp>{Conver[0].title}</TituloConvEsp>
          <DescripcionConvEsp>{Conver[0].descripcion}</DescripcionConvEsp>

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
            <Divider />
          </div>
        ))}
      </ContainerMain>
    </div>
  );
};

export default ConversacionEsp;
