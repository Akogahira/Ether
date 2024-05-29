import { ContainerMain, CardHome, CardHomeInfo, TagHome, InfoConvHome, TituloConvHome } from '../components/Layout.styles';
import { Conver } from "../data/Conversaciones";

const Home = () => {

  return (
    <div>
      <ContainerMain>
        <h2>Conversaciones recomendadas</h2>
        {Conver.map(conv => (
          <CardHome key={conv}>
            <CardHomeInfo>
              <TagHome>{conv.tag}</TagHome>
              <TituloConvHome>{conv.title}</TituloConvHome>
              <InfoConvHome>{conv.comments}</InfoConvHome>
            </CardHomeInfo>
          </CardHome>
        ))}y
      </ContainerMain >

      <ContainerMain>
        <h2>Herramientas recomendadas</h2>
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
      </ContainerMain>
    </div >
  );
};

export default Home;
