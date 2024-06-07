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
} from "../components/Layout.styles";

/* Añadir <NombreUserChat>BPDJASJKK</NombreUserChat> si no se va a "automatizar" el nombre que aparece*/

const ChatEsp = () => (
  <div>
    <ContainerMain>
      <ChatEspFecha>30/05</ChatEspFecha>

      <User1Container>
        <User1Img>
          <img src="src/assets/images/Avatar4.png" alt="Icon" />
        </User1Img>
        <User1Contenido>
          <User1Msg>Las putas ruffles qué caras están</User1Msg>
          <User1Time>17:30</User1Time>
        </User1Contenido>
      </User1Container>

      <User2Container>
        <User2Contenido>
          <User2Msg>Pues el maxibon flipas 3 euros ayer en el chino</User2Msg>
          <User2Time>18:13</User2Time>
        </User2Contenido>
        <User2Img>
          <img src="src/assets/images/Avatar2.png" alt="Icon" />
        </User2Img>
      </User2Container>
    </ContainerMain>
  </div>
);

export default ChatEsp;
