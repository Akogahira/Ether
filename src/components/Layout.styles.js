import styled from 'styled-components';

//Estilos Barra Navegación

export const Divider2 = styled.hr`
  border: 0;
  height: 1px;
  background: darkslategray;
  width: 100%;
`;

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


// 00. Estilos generales (botones, maincontainer, divider...)

export const ContainerMain = styled.div`
  margin: 0 auto;
  max-width: 360px;
  min-height: 560px;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    h2 {
      font-weight: normal;
      font-size: 21px;
    }

    :root {
      --main-black: #373737;
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


//Estilos específicos:
//PÁGINA 01. HOME

export const CardContainer = styled.div`
  overflow-x: auto;
  display: flex;
  flex-wrap: nowrap; 
  width: 105.6%;
`;

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

export const CardHomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 10px;

`;

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

export const InfoHome = styled.span`
  font-size: 10px;
  text-align: right;
  border-radius: 5px;
`;

export const AutorHome = styled.span`
  margin: 0;
  font-weight: normal;
  font-size: 12px;
    color: #737273;
`;

export const TituloConvHome = styled.h4`
  padding: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: 540;
  line-height: 1.3;
`;

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

export const InfoConvHome = styled.span`
  font-size: 10px;
  align-items: right;
  border-radius: 5px;
  min-width: 150px;
`;

export const TituloHerrHome = styled.h4`
  padding: 0px;
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: 540;
  line-height: 1.1;
`;
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


//Estilos específicos:
//PÁGINA 02. CONVERSACIONES

export const ContainerConver = styled.div`
  padding: 2px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const TituloConv = styled.h4`
  padding: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: normal;
`;

export const InfoConv = styled.span`
  font-size: 10px;
  text-align: right;
  border-radius: 5px;
`;

export const Tag = styled.span`
  display: inline-block;
  padding: 4px 10px;
  margin: 5px 0;
  background-color: white;
  border: 0.2px solid darkslategray;
  border-radius: 15px;
  font-weight: normal;
  font-size: 11px;
`;

//2.1 CONVERSACIÓN ESPECÍFICA

export const Autor = styled.h2`
  padding: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 17px;
`;

// PÁGINA 03. HERRAMIENTAS
export const ContainerHerrFiltro = styled.div`
  padding: 2px;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-around;
`;

export const ContainerHerr = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const CardHerr = styled.div`
  border: 0.2px solid darkslategray;
  border-radius: 10px;
  height: 160px;
  width: calc(30%);
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardHerrInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 90%;
  }
  
  p {
    text-align: left;
    font-size: 14px;
    margin-left: 10%;
    line-height: 1.1;
  }
`;
