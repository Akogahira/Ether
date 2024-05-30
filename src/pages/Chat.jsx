import { ChatsIzq, ContainerChats, ContainerMain, DatosIzq2, DatosIzq1, Divider, ChatsDer, ContainerDivider, ChatUser, ChatMsg, ChatFecha, ChatHora } from '../components/Layout.styles';
import { ChatsPriv } from '../data/Chats';

const MAX_LENGTH = 50;

const truncateMessage = (msg) => {
  if (msg.length > MAX_LENGTH) {
    return msg.substring(0, MAX_LENGTH) + "...";
  }
  return msg;
};

const Chat = () => (
  <div>
    <ContainerMain>
      {ChatsPriv.map(xat => (
        <ContainerDivider key={xat}>
          <ContainerChats>
            <ChatsIzq>
              <DatosIzq1>
                <img src={xat.img} alt="Icon" />
              </DatosIzq1>
              <DatosIzq2>
                <ChatUser>
                  {xat.user}
                </ChatUser>
                <ChatMsg>
                  {truncateMessage(xat.msg)}
                </ChatMsg>
              </DatosIzq2>
            </ChatsIzq>
            <ChatsDer>
              <ChatFecha>
                {xat.fecha}
              </ChatFecha>
              <ChatHora>
                {xat.hora}
              </ChatHora>
            </ChatsDer>

          </ContainerChats>
          <Divider />
        </ContainerDivider>
      ))}


    </ContainerMain>

  </div>


)

export default Chat;