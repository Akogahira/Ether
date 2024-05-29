import { ContainerMain, CardHome, CardHomeInfo, TagHome, TituloConvHome, AutorHome, CardContainer } from '../components/Layout.styles';
import { Conver } from "../data/Conversaciones";

const Home = () => {

  return (
    <div>
      <ContainerMain>
        <h2>Conversaciones recomendadas</h2>
        <CardContainer>
          {Conver.map(conv => (
            <CardHome key={conv}>
              <CardHomeInfo>
                <AutorHome>{conv.autor}</AutorHome>
                <TituloConvHome>{conv.title}</TituloConvHome>
                <TagHome>{conv.tag}</TagHome>
              </CardHomeInfo>
            </CardHome>
          ))}
        </CardContainer>

        <h2>Herramientas recomendadas</h2>
        <CardContainer>
          <CardHome>
            <CardHomeInfo>
              <img src="src/assets/images/Herramienta1.png" alt="Herramienta 1" />
              <p>Técnicas de respiración</p>
            </CardHomeInfo>
          </CardHome>
          <CardHome>
            <CardHomeInfo>
              <img src="src/assets/images/Herramienta1.png" alt="Herramienta 2" />
              <p>Mindfulness</p>
            </CardHomeInfo>
          </CardHome>
          <CardHome>
            <CardHomeInfo>
              <img src="src/assets/images/Herramienta1.png" alt="Herramienta 3" />
              <p>Gestión del estrés</p>
            </CardHomeInfo>
          </CardHome>
        </CardContainer>
      </ContainerMain>
    </div >
  );
};

export default Home;
