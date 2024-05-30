import { ChatsIzq, ContainerChats, ContainerMain, DatosIzq2, DatosIzq1, Divider, ChatsDer, ContainerDivider } from '../components/Layout.styles';
import { ChatsPriv } from '../data/Chats';

const Chat = () => (
  <div>
    <ContainerMain>
      {ChatsPriv.map(xat => (
        <ContainerDivider key={xat}>
          <ContainerChats>
            <ChatsIzq>
              <DatosIzq1>
                <img src="src\assets\images\Avatar1.png" alt="" />
              </DatosIzq1>
              <DatosIzq2>
                <div>
                  {xat.user}
                </div>
                <div>
                  {xat.msg}
                </div>
              </DatosIzq2>
            </ChatsIzq>
            <ChatsDer>
              <div>
                {xat.fecha}
              </div>
              <div>
                {xat.hora}
              </div>
            </ChatsDer>

          </ContainerChats>
          <Divider />
        </ContainerDivider>
      ))};


    </ContainerMain>

  </div>


)

export default Chat;