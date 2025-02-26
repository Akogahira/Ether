import React, { useState } from "react";
import {
  ContainerMain,
  ChatEspFecha,
  User1Contenido,
  User1Img,
  User1Msg,
  User1Time,
  User1Container,
  User2Container,
  User2Img,
  User2Msg,
  User2Contenido,
  User2Time,
  ChatInputContainer,
  ChatInputTextarea,
  SendButton,
} from "../components/Layout.styles";

const ChatEsp = () => {
  const [messages, setMessages] = useState([
    {
      user: "user2",
      content: "¿Has probado la meditación para reducir el estrés?",
      time: "17:30",
    },
    {
      user: "user1",
      content: "A mi no me suele funcionar, lo volveré a probar.",
      time: "18:13",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMessages = [
        ...messages,
        {
          user: "user1",
          content: newMessage,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ];
      setMessages(newMessages);
      setNewMessage("");
    }
  };

  return (
    <div>
      <ContainerMain>
        <ChatEspFecha>30/05</ChatEspFecha>

        {messages.map((message, index) => (
          <React.Fragment key={`${message.user}-${index}`}>
            {message.user === "user2" ? (
              <User1Container>
                <User1Img>
                  <img src="static/images/Avatar4.png" alt="Icon" />
                </User1Img>
                <User1Contenido>
                  <User1Msg>{message.content}</User1Msg>
                  <User1Time>{message.time}</User1Time>
                </User1Contenido>
              </User1Container>
            ) : (
              <User2Container>
                <User2Contenido>
                  <User2Msg>{message.content}</User2Msg>
                  <User2Time>{message.time}</User2Time>
                </User2Contenido>
                <User2Img>
                  <img src="static/images/Avatar2.png" alt="Icon" />
                </User2Img>
              </User2Container>
            )}
          </React.Fragment>
        ))}

        <ChatInputContainer>
          <ChatInputTextarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Escribe tu mensaje aquí..."
          />
          <SendButton onClick={handleSendMessage}>Enviar</SendButton>
        </ChatInputContainer>
      </ContainerMain>
    </div>
  );
};

export default ChatEsp;
