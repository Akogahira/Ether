import styled from "styled-components";

// --main-black: #373737;
// --main - semiblack: #737273;
// --page - title - color:#4d4c4d;
// --card - color: #dad1ef;
// --icon - color: #beb1dc;
// --main - background: #fffeef;

//360px x 760px

//Layout inicio

export const Main1 = styled.div`
  padding: 20px;
  margin: 0 auto;
  width: 320px;
  height: 760px;
  background-color: #dad1ef;
`;

//Página Inicio

export const MainInicio = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 76vh;
  text-align: center;
`;

export const ContainerInicio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2, p {
    color: #4d4c4d;
  }
`;

export const ContainerInicioSesion = styled.div`
  margin-bottom: 20px;
`;

export const TextFieldInicioSesion = styled.textarea`
  padding: 5px 12px;
  border-radius: 100px;
  background-color: white;
  color: #737273;
  font-weight: normal;
  font-size: 14px;
  height: 20px;
  width: 230px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  margin: 10px 0 10px 0;
  justify-content: center;
  align-items: center;
`;

export const TextFieldContainerInicio = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  flex-direction: column;
  p {
    margin: 5px 0 0 0;
  }
`;

export const PassRestart = styled.p`
  text-align: right;
  font-size: 13px;
  margin-top: 0px;
  color: #737273;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  label {
    font-size: 12px;
    color: #737273;
  }

  input[type="checkbox"] {
    margin-right: 5px;
    border: 1px solid #737273; /* Bordes transparentes */
    border-radius: 3px; /* Bordes redondeados */
    width: 11px;
    height: 11px;
    appearance: none;
  }

  //CAMBIAR: ver cómo cambiar la apariencia de esto
  input[type="checkbox"]:checked {
    border: 1px solid #737273;
    border-radius: 3px;
    background-color: #dad1ef;
  }
`;


export const ErrorMessage = styled.p`
  font-size: 14px;
  margin-top: 5px;
  color: red;
`;

export const SuccessMessage = styled.p`
  font-size: 14px;
  margin-top: 5px;
  color: green;
`;

// 00. Estilos generales (botones, MainContainer, divider...)

export const ContainerMain = styled.div`
position: relative;
  margin: 0 auto;
  width: 95%;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  h2 {
    font-weight: normal;
    font-size: 21px;
  }
`;

export const Main = styled.div`
  margin: 0 auto;
  width: 340px;
  min-height: 650px;
  min-height: 650px;
  color: #4d4c4d;
  padding-bottom: 70px;
`;

export const Container = styled.div`
  padding: 10px;
  margin: 0 auto;
  width: 340px;
  background-color: #fffeef;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

export const Divider = styled.hr`
  border: 0;
  height: 0.5px;
  background: gray;
  margin: 10px 0;
`;

//01. ESTILOS BARRA NAVEGACIÓN
export const Divider2 = styled.hr`
  border: 0;
  height: 1px;
  background: darkslategray;
  width: 100%;
`;

/// Arriba
export const Footer2 = styled.footer`
  color: #4d4c4d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
`;

export const Nav2 = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  h2 {
    font-size: 22px;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #beb1dc;
    border-radius: 0.5rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const Nav3 = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
      align-items: left;
    justify-content: left;
  a {
    text-decoration: none;
    color: #beb1dc;
    border-radius: 0.5rem;
    padding: 0.5rem 0 0 0;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

/// Abajo
export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: calc(100% - 20px);
  max-width: 340px;
  height: 70px;
  background-color: white;
  padding: 0 10px;
  border-top: 1px solid grey;
`;

export const Nav = styled.nav`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0;
    margin: 0;
    gap: 1.5rem;
    a {
      text-decoration: none;
      color: #beb1dc;
      border-radius: 0.5rem;
      padding: 0.5rem;
      transition: background-color 0.3s;
      display: flex;
      align-items: center;
      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;

//PÁGINAS:
//PÁGINA 01. HOME

export const TituloHomeGenerico = styled.div`
  max-width: 310px;
  h2 {
    font-size: 19px;
    font-weight: normal;
  }
`;

///Cards padre
export const CardContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  flex-wrap: nowrap;
  width: 105%;
  position: relative;
  box-sizing: border-box;
  scroll-snap-type: x mandatory;
`;

///Cards hijo
export const CardHome = styled.div`
  border-radius: 15px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
  background-color: #dad1ef;
  min-height: 170px;
  max-height: 220px;
  min-width: 120px;
  max-width: 120px;
  margin: 0 10px 20px 0;
  scroll-snap-align: start;
`;

///CONVERSACIONES - Cards info interior
export const CardHomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 10px;
`;

///CONVERSACIONES - Indicador de N comentarios
export const InfoHome = styled.span`
  font-size: 11px;
  text-align: right;
  border-radius: 5px;
`;

///CONVERSACIONES - Indicador User
export const AutorHome = styled.span`
  margin: 0;
  font-weight: normal;
  font-size: 12px;
  color: #737273;
`;

///CONVERSACIONES - Titulo conversación
export const TituloConvHome = styled.h4`
  padding: 0px;
  margin-top: 5px;
  margin-bottom: 2px;
  font-size: 15px;
  font-weight: normal;
  line-height: 1.3;
`;

///CONVERSACIONES - Tag filtro
export const TagHome = styled.span`
  padding: 2px 5px;
  margin: 5px 0 5px 0;
  font-weight: normal;
  font-size: 12px;
  background-color: white;
  border-radius: 15px;
  max-width: 75px;
  text-align: center;
  color: #737273;
`;

///HERRAMIENTAS - Cards info interior
export const CardHomeImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 10px;

  img {
    max-width: 90%;
  }
  p {
    text-align: left;
    font-size: 15px;
    line-height: 1.1;
  }
`;

///HERRAMIENTAS - Titulo herramienta
export const TituloHerrHome = styled.h4`
  padding: 0px;
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: normal;
  line-height: 1.1;
`;

///Botón Ver más
export const BotonHome = styled.button`
  justify-content: right;
  text-align: right;
  padding: 5px 10px;
  margin: 5px 2px;
  background-color: inherit;
  border: 1px solid darkslategray;
  border-radius: 25px;
  font-weight: normal;
  font-size: 15px;
  color: darkslategray;
  text-decoration: none;
`;

///Fin estilos Home

//Estilos específicos:
//PÁGINA 02. CONVERSACIONES


export const BotonConv = styled.button`
  display: inline-block;
  padding: 5px 10px;
  margin: 5px 2px;
  border-radius: 25px;
  font-weight: normal;
  font-size: 16px;
  border: none;
  cursor: pointer;
  background-color: #9689b3;
  color: white;
  &.active {
    background-color: #beb1dc;
  }
`;



//Container filtros (desplegable)
export const ContainerFiltros = styled.div`

`;

///Container hijo de cada conversación (el padre es ContainerMain)
export const ContainerConver = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

///Titulo conversaciones
export const TituloConv = styled.h4`
  padding: 5px 0px 0px 0px;
  margin: 7px 0;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.2;
  color: #4d4c4d;
`;

export const DescripcionConvGeneral = styled.div`
  padding: 5px 0px 0px 0px;
  margin: 0 0 15px 0;
  font-size: 15px;
  font-weight: normal;
  line-height: 1.2;
  color: #4d4c4d;
`;

export const ContainerCollapseConv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3px;
`;

export const Collapse = styled.span`
  display: inline-block;
  font-size: 13px;
  color: #737273;
`;

///Indicador N Comentarios
export const InfoConv = styled.span`
  font-size: 13px;
  text-align: right;
  border-radius: 5px;
  justify-content: right;
`;

///Indicador Filtros
export const Tag = styled.span`
  padding: 5px 8px;
  font-weight: normal;
  font-size: 13px;
  background-color: #ab9cce;
  border-radius: 15px;
  text-align: center;
  color: white;
`;

//2.1 CONVERSACIÓN ESPECÍFICA

//(Aún no creado)

///Container "Tarjeta" de usuario
export const ContainerConverEsp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0px;
`;

///Container de izq + der (padre)
export const UserIzq = styled.div`
  display: flex;
  align-items: center;
`;

///Container izq con el Avatar
export const DatosUserIzq = styled.div`
  img {
    width: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }
`;

///Container izq con el nombre y la hora
export const DatosUserIzq2 = styled.div`
  display: flex;
  flex-direction: column;
`;

///Username/nombre
export const DatoUserName = styled.div`
  margin: 0;
  font-weight: 500;
  font-size: 15px;
  color: #373737;
`;

///Time/hora
export const DatoUserTime = styled.div`
  margin: 0;
  font-weight: 500;
  font-size: 15px;
  color: #373737;
  line-height: 1.1;
  margin-top: 6px;
`;

//Filtros
export const TagConver = styled.span`
  padding: 3px 8px;
  font-weight: normal;
  font-size: 14px;
  background-color: #ab9cce;
  border-radius: 15px;
  text-align: center;
  color: white;
  max-width: 100px;
  margin: 10px 0 10px 0;
`;

export const TituloConvEsp = styled.div`
  padding: 5px 0px 0px 0px;
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: normal;
  line-height: 1.3;
  color: #373737;
`;

export const DescripcionConvEsp = styled.div`
  padding: 5px 0px 0px 0px;
  margin: 0 0 15px 0;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.3;
  color: #373737;
`;

///--------------
///Container TextField
export const TextFieldContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0 10px 0 0;
  }
`;

///TextField
export const TextFieldConver = styled.textarea`
  padding: 5px 12px;
  border-radius: 100px;
  background-color: white;
  color: #4d4c4d;
  font-weight: normal;
  font-size: 16px;
  height: 20px;
  width: 95%;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

///COMENTARIOS
///

///Container "Tarjeta" de usuario (COMENTARIO)
export const ContainerComentarioA = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0 0 0;
`;

///Container de izq + der (padre) (COMENTARIO)
export const ComentIzqA = styled.div`
  display: flex;
  align-items: center;
`;

///Container izq con el Avatar (COMENTARIO)
export const DatosComentIzqA1 = styled.div`
  img {
    width: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }
`;

///Container izq con el nombre y la hora (COMENTARIO)
export const DatosComentIzqA2 = styled.div`
  display: flex;
  flex-direction: column;
`;

///Username/nombre (COMENTARIO)
export const DatoComentNameA = styled.div`
  margin: 0;
  font-weight: normal;
  font-size: 14px;
  color: #373737;
`;

///Time/hora (COMENTARIO)
export const DatoComentTimeA = styled.div`
  margin: 0;
  font-weight: normal;
  font-size: 14px;
  color: #373737;
  line-height: 1.1;
  margin-top: 4px;
`;

///Texto Comentario (COMENTARIO)
export const DescripcionComentarioA = styled.div`
  padding: 5px 0px 0px 0px;
  margin: 0 0 10px 21%;
  font-size: 15px;
  font-weight: normal;
  line-height: 1.2;
  color: #373737;
`;

///Fin estilos Conversaciones

// PÁGINA 03. HERRAMIENTAS

///Intro
export const IntroPageHerr = styled.h4`
  text-align: left;
  font-size: 17px;
  font-weight: normal;
  line-height: 1.1;
  margin: 10px 0px 10px 0px;
`;

///Container filtros (Todas - Oficiales - Comunidad)
export const ContainerHerrFiltro = styled.div`
  padding: 2px;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-around;
`;

///Container Padre de las Cards
export const ContainerHerr = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

///Hijo Cards
export const CardHerr = styled.div`
  border-radius: 15px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
  background-color: #dad1ef;
  border-radius: 10px;
  width: calc(32%);
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

///Info Cards
export const CardHerrInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 10px;

  img {
    max-width: 99%;
  }
  p {
    text-align: left;
    font-size: 15px;
    line-height: 1.1;
  }
`;

///3.1 HERRAMIENTA ESPECÍFICA

export const CardHerramientaEsp = styled.div`
  background-size: 140%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #dad1ef;
  border-radius: 18px;
  padding: 20px;
  margin-bottom: 15px;
  height: 150px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
`;

export const TituloHerramientaEsp = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin: 80px 0 0 0;
  color: whitesmoke;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
`;

///Texto Secciones
export const TextoSecciones = styled.div`
  margin: 20px 5px 0 0;
  h3 {
    font-weight: normal;
    font-size: 18px;
    margin: 5px 0px 5px 0px;
  }
`;

//Sección de comentarios cogida de ConversacionEsp

// PÁGINA 04. CHATS

///Container general
export const ContainerChats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0px;
  img {
    width: 42px;
    border-radius: 50%;
    margin-right: 20px;
  }
`;

///Container 1: Datos izquierda (avatar, nombre y mensaje)
export const ChatsIzq = styled.div`
  display: flex;
  align-items: center;
`;

///Container 1.1: Avatar
export const DatosIzq1 = styled.div``;

///Container 1.2: Nombre y mensaje
export const DatosIzq2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChatUser = styled.div`
  margin: 0;
  font-weight: 500;
  font-size: 12px;
  color: #373737;
`;

export const ChatMsg = styled.div`
  margin: 0;
  font-weight: normal;
  font-size: 16px;
  color: #373737;
  line-height: 1.1;
  margin-top: 6px;
`;

///Container 2: Datos derecha (fecha y hora)
export const ChatsDer = styled.div`
  text-align: right;
  margin-left: auto;
`;

export const ChatFecha = styled.div`
  font-size: 13px;
  color: #737273;
`;

export const ChatHora = styled.div`
  font-size: 13px;
  color: #737273;
`;

export const ContainerDivider = styled.div`
  display: flex;
  flex-direction: column;
`;

////CHAT ESPECÍFICO

export const NombreUserChat = styled.h3`
  font-size: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
`;

export const ChatEspFecha = styled.div`
  font-size: 13px;
  color: #737273;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const User1Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: flex-start;
  width: 100%;
`;

export const User1Img = styled.div`
  img {
    width: 45px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const User1Contenido = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

export const User1Msg = styled.div`
  margin: 0;
  font-weight: normal;
  font-size: 16px;
  color: #373737;
  line-height: 1.1;
  max-width: 260px;
`;

export const User1Time = styled.div`
  font-size: 13px;
  color: #737273;
  margin-top: 5px;
`;

//User 2
export const User2Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: flex-end;
`;

export const User2Img = styled.div`
  img {
    width: 45px;
    border-radius: 50%;
    margin-left: 10px;
  }
`;

export const User2Contenido = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-left: 10px;
`;

export const User2Msg = styled.div`
  margin: 0;
  font-weight: normal;
  font-size: 16px;
  color: #373737;
  line-height: 1.1;
  max-width: 260px;
`;

export const User2Time = styled.div`
  font-size: 13px;
  color: #737273;
  margin-top: 5px;
`;

///Barra escribir

export const ChatInputContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 360px;
  background-color: none;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  bottom: 70px;
  left: 0px;
`;

export const ChatInputTextarea = styled.textarea`
  flex: 1;
  resize: none;
  margin-right: 10px;
  padding: 5px 12px;
  border-radius: 100px;
  background-color: white;
  color: #4d4c4d;
  font-weight: normal;
  font-size: 16px;
  height: 20px;
  width: 120px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

export const SendButton = styled.button`
  border-radius: 4px;
  display: inline-block;
  padding: 5px 10px;
  margin: 5px 2px;
  border-radius: 25px;
  font-weight: normal;
  font-size: 16px;
  border: none;
  background-color: #beb1dc;
  color: white;
`;

// PÁGINA 05. PERFIL


///Container de avatar
export const Avatar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 60%;
    border-radius: 50%;
    border: 1px solid darkslategray;
    margin-bottom: 20px;
  }
`;

// Componente para la flecha anterior
export const FlechaAnterior = styled.button`
  font-size: 13px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: black;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 1;
`;

// Componente para la flecha siguiente
export const FlechaSiguiente = styled.button`
  font-size: 13px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: black;
  position: absolute;
  top: 50%;
  right: 10px;
    transform: translateY(-50%);
  z-index: 1;
`;



///Container de botón de Editar avatar
export const BotonPerfil = styled.button`
  display: inline-block;
  padding: 5px 10px;
  background-color: #9689b3;
  border-radius: 25px;
  font-weight: normal;
  font-size: 17px;
  color: white;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

///TextField o TextArea del nombre de usuario
export const TextFieldPerfil = styled.textarea`
  padding: 5px 12px;
  border-radius: 100px;
  background-color: white;
  color: #4d4c4d;
  font-weight: normal;
  font-size: 16px;
  height: 20px;
  width: 120px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

///Titulos H2 y H4 de los ajustes de perfil
export const AjustesPerfil = styled.div`
  h2 {
    margin: 20px 0 10px 0;
  }
  h4 {
    font-size: 16px;
    font-weight: normal;
    margin: 5px 0;
    color: #4d4c4d;
  }
`;

///Container de los H4 + Switches
export const ContainerSwitches = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

//PÁGINA 6. SUBIR CONVERSACION
export const TextFieldSubirConv = styled.textarea`
  padding: 5px 12px;
  border-radius: 100px;
  background-color: white;
  color: #4d4c4d;
  font-weight: normal;
  font-size: 16px;
  height: 20px;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  margin: 10px 0 10px 0;
`;

export const TextFieldSubirConvGrande = styled.textarea`
  padding: 5px 12px;
  border-radius: 20px;
  background-color: white;
  color: #4d4c4d;
  font-weight: normal;
  font-size: 16px;
  height: 100px;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  margin: 10px 0 10px 0;
`;

export const BotonesSubirConv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const BotonSubirConv = styled.button`
  display: inline-block;
  padding: 5px 10px;
  margin: 10px 0;
  width: 120px;
  background-color: #9689b3;
  border-radius: 25px;
  font-weight: normal;
  font-size: 16px;
  color: white;
`;

///BUSQUEDA
export const BusquedaHerramientas = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const ResultHerr = styled.div`
  display: flex;
  padding: 6px 10px;
  font-weight: normal;
  font-size: 14px;
  background-color: #ab9cce;
  border-radius: 20px;
  text-align: center;
  color: white;
  max-width: 90px;
  margin: 2px 5px 10px 0;
`;


//OLE

// Estilos para el pop-up de filtros
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

// Estilos para el pop-up de filtros
export const PopupContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250px;
  transform: translate(-50%, -50%);
  background-color: #fffeff;
  padding: 20px;
  border: 1px solid #737273;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  z-index: 2;
  h2 {
    margin-top: 2px;
  }
`;
export const BotonCerrar = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #737273;
`;

//
export const ConverInputContainer = styled.div`
  width: 100%;
  background-color: none;
  padding: 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;