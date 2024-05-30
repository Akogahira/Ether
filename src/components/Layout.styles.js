import styled from 'styled-components';

// --main-black: #373737;
// --main - semiblack: #737273;
// --page - title - color:#4d4c4d;
// --card - color: #dad1ef;
// --icon - color: #beb1dc;
// --main - background: #fffeef;

// 00. Estilos generales (botones, MainContainer, divider...)

export const ContainerMain = styled.div`
  margin: 0 auto;
  max-width: 360px;
  min-height: 560px;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    h2 {
      font-weight: normal;
      font-size: 21px;
    }
`;

export const Main = styled.div`
  padding: 10px;
  margin: 0 auto;
  max-width: 360px;
  color: #4d4c4d;
`;

export const Container = styled.div`
  padding: 10px;
  margin: 0 auto;
  width: 360px;
  background-color: #fffeef;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

export const Divider = styled.hr`
  border: 0;
  height: 0.5px;
  background: gray;
  margin: 10px 0;
`;

export const Boton = styled.button`
  display: inline-block;
  padding: 5px 10px;
  margin: 5px 2px;
  background-color: white;
  border: 1px solid darkslategray;
  border-radius: 25px;
  font-weight: normal;
  font-size: 15px;
  color: #4d4c4d;
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
    transition: background-color 0.3s;
    display: flex;
    align-items: center;

    &:hover {
      color: pink;
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

/// Abajo 
export const Footer = styled.footer`
  color: #4d4c4d;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
      &:hover {
        color: paleturquoise;
      }
      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;

//PÁGINAS:
//PÁGINA 01. HOME

///Cards padre
export const CardContainer = styled.div`
  overflow-x: auto;
  display: flex;
  flex-wrap: nowrap; 
  width: 105.6%;
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
  margin: 0 10px 30px 0;
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
  font-size: 10px;
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
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: 540;
  line-height: 1.3;
`;

///CONVERSACIONES - Tag filtro
export const TagHome = styled.span`
  padding: 2px 5px;
  margin: 2px 0 2px 0;
  font-weight: normal;
  font-size: 12px;
  background-color: white;
  border-radius: 15px;
  width: 40px;
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
  font-weight: 540;
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

///Container hijo de cada conversación (el padre es ContainerMain)
export const ContainerConver = styled.div`
  padding: 2px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

///Titulo conversaciones
export const TituloConv = styled.h4`
  padding: 5px 0px 0px 0px;
  margin-top: 6px;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: 540;
  line-height: 1.2;
`;

///Indicador N Comentarios
export const InfoConv = styled.span`
  font-size: 10px;
  text-align: right;
  border-radius: 5px;
`;

///Indicador Filtros
export const Tag = styled.span`
  padding: 5px 8px;
  font-weight: normal;
  font-size: 14px;
  background-color: #ab9cce;
  border-radius: 15px;
  text-align: center;
  color: white;
`;


//2.1 CONVERSACIÓN ESPECÍFICA

//(Aún no creado)
export const Autor = styled.h2`
  padding: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 17px;
`;

///Fin estilos Conversaciones

// PÁGINA 03. HERRAMIENTAS

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
  flex-wrap: wrap;
  justify-content: space-between;
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
