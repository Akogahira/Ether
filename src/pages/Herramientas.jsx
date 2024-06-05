import { ContainerMain, BotonConv, Divider, ContainerHerrFiltro, ContainerHerr, CardHerr, CardHerrInfo, IntroPageHerr } from '../components/Layout.styles';
import { Link } from 'react-router-dom';

const Herramientas = () => (
  <div>
    <ContainerMain>
      <IntroPageHerr>¿Conoces alguna herramienta que no encuetras aquí? ¡Compártela!</IntroPageHerr>
      <Link to="/SubirHerr" style={{ textDecoration: 'none', color: 'inherit' }}>
        <BotonConv>Publica una herramienta</BotonConv>
      </Link>
      <Divider />

      <ContainerHerrFiltro>
        <BotonConv>Todas</BotonConv>
        <BotonConv>Oficiales</BotonConv>
        <BotonConv>Comunidad</BotonConv>
      </ContainerHerrFiltro>
      <ContainerHerr>
        <CardHerr>
          <Link to="/HerramientaEsp" style={{ textDecoration: 'none', color: 'inherit' }}>
            <CardHerrInfo>
              <img src="src\assets\images\Herramienta1.png" alt="" />
              <p>Neurohacking</p>
            </CardHerrInfo>
          </Link>
        </CardHerr>
        <CardHerr>
          <CardHerrInfo>
            <img src="src\assets\images\Herramienta2.png" alt="" />
            <p>Técnicas de respiración</p>
          </CardHerrInfo>
        </CardHerr>
        <CardHerr>
          <CardHerrInfo>
            <img src="src\assets\images\Herramienta3.png" alt="" />
            <p>Música</p>
          </CardHerrInfo>
        </CardHerr>
        <CardHerr>
          <CardHerrInfo>
            <img src="src\assets\images\Herramienta4.png" alt="" />
            <p>Journaling</p>
          </CardHerrInfo>
        </CardHerr>
        <CardHerr>
          <CardHerrInfo>
            <img src="src\assets\images\Herramienta5.png" alt="" />
            <p>Diario de gratitud</p>
          </CardHerrInfo>
        </CardHerr>
        <CardHerr>
          <CardHerrInfo>
            <img src="src\assets\images\Herramienta6.png" alt="" />
            <p>Terapia Cognitivo Conductual</p>
          </CardHerrInfo>
        </CardHerr>
        <CardHerr>
          <CardHerrInfo>
            <img src="src\assets\images\Herramienta5.png" alt="" />
            <p>Hoponopono</p>
          </CardHerrInfo>
        </CardHerr>
        <CardHerr>
          <CardHerrInfo>
            <img src="src\assets\images\Herramienta8.png" alt="" />
            <p>Terapia</p>
          </CardHerrInfo>
        </CardHerr>
        <CardHerr>
          <CardHerrInfo>
            <img src="src\assets\images\Herramienta7.png" alt="" />
            <p>Descansos digitales</p>
          </CardHerrInfo>
        </CardHerr>

      </ContainerHerr>


    </ContainerMain>
  </div >


)

export default Herramientas;