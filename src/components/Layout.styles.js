import styled from 'styled-components';

//Estilos Barra Navegación

export const Divider2 = styled.hr`
  border: 0;
  height: 1px;
  background: darkslategray;
  width: 100%;
`;

export const Footer2 = styled.footer`
  color: darkslategray;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
`;

export const Nav2 = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: darkslategray;
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
  color: darkslategray;
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
      color: darkslategray;
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
  }
`;


// 00. Estilos generales (botones, maincontainer, divider...)

export const ContainerMain = styled.div`
  margin: 0 auto;
  max-width: 360px;
`;

export const Main = styled.div`
  padding: 10px;
  margin: 0 auto;
  max-width: 360px;
  color: darkslategray;
`;

export const Container = styled.div`
  padding: 10px;
  margin: 0 auto;
  width: 360px;
   background-color: beige;
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
  color: darkslategray;
`;


//Estilos específicos:
//PÁGINA 01. HOME

export const CardContainer = styled.div`
  overflow-x: auto;
  display: flex;
  flex-wrap: nowrap; 
`;

export const CardHome = styled.div`
  border: 0.2px solid darkslategray;
  border-radius: 10px;
  height: 185px;
  min-width: 120px;
  max-width: 120px;
  margin: 10px;
`;

export const CardHomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  img {
    max-width: 90%;
  }
`;

export const AutorHome = styled.span`
  margin: 0;
  font-weight: normal;
  font-size: 10px;
`;

export const TituloConvHome = styled.h4`
  padding: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: normal;
`;

export const TagHome = styled.span`
  padding: 4px 2px;
  margin: 5px 0;
  font-weight: normal;
  font-size: 11px;
`;

export const InfoConvHome = styled.span`
  font-size: 10px;
  align-items: right;
  border-radius: 5px;
  min-width: 150px;
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
  align-items: right;
  border-radius: 5px;
  min-width: 150px;
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
