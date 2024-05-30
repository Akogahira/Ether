import { ContainerMain, CardHome, CardHomeImg, TagHome, TituloConvHome, AutorHome, CardContainer, CardHomeInfo, InfoHome, TituloHerrHome, BotonHome } from '../components/Layout.styles';
import { Link } from 'react-router-dom';
import { Conver } from "../data/Conversaciones";

const Home = () => {

  return (
    <div>
      <ContainerMain>
        <h2>Únete a estas conversaciones</h2>
        <CardContainer>
          {Conver.map(conv => (
            <CardHome key={conv}>
              <CardHomeInfo>
                <AutorHome>{conv.autor}</AutorHome>
                <TituloConvHome>{conv.shortitle}</TituloConvHome>
                <TagHome>{conv.tag}</TagHome>
                <InfoHome>{conv.comments}</InfoHome>
              </CardHomeInfo>
            </CardHome>
          ))}
        </CardContainer>

        <BotonHome><Link to="/Conversaciones" style={{ textDecoration: 'none', color: 'inherit' }}>Ver más</Link ></BotonHome>


        <h2>¿Conoces estas herramientas?</h2>

        <CardContainer>
          <CardHome>
            <CardHomeImg>
              <img src="src/assets/images/Herramienta1.png" alt="Herramienta 1" />
              <TituloHerrHome>Neurohacking</TituloHerrHome>
            </CardHomeImg>
          </CardHome>
          <CardHome>
            <CardHomeImg>
              <img src="src/assets/images/Herramienta2.png" alt="Herramienta 2" />
              <TituloHerrHome>Técnicas de respiración</TituloHerrHome>
            </CardHomeImg>
          </CardHome>
          <CardHome>
            <CardHomeImg>
              <img src="src/assets/images/Herramienta3.png" alt="Herramienta 3" />
              <TituloHerrHome>Música</TituloHerrHome>
            </CardHomeImg>
          </CardHome>
          <CardHome>
            <CardHomeImg>
              <img src="src/assets/images/Herramienta4.png" alt="Herramienta 4" />
              <TituloHerrHome>Journaling</TituloHerrHome>
            </CardHomeImg>
          </CardHome>
          <CardHome>
            <CardHomeImg>
              <img src="src/assets/images/Herramienta6.png" alt="Herramienta 5" />
              <TituloHerrHome>Terapia Cognitivo Conductual</TituloHerrHome>
            </CardHomeImg>
          </CardHome>
        </CardContainer>

        <BotonHome><Link to="/Herramientas" style={{ textDecoration: 'none', color: 'inherit' }}>Ver más</Link ></BotonHome>
      </ContainerMain>
    </div >
  );
};

export default Home;
