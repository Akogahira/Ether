import { ContainerMain, ContainerConverEsp, Divider, ContainerDivider, TagConver, TituloConvEsp, TextFieldConver, UserIzq, DatosUserIzq, DatosUserIzq2, DatoUserName, DatoUserTime, DescripcionConvEsp, TextFieldContainer, ContainerComentarioA, DatosComentIzqA1, DatosComentIzqA2, DatoComentNameA, ComentIzqA, DatoComentTimeA, DescripcionComentarioA } from '../components/Layout.styles';
import { Conver } from "../data/Conversaciones";

const ConversacionEsp = () => {

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
    </div>
  );
};
export default ConversacionEsp;
