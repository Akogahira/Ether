import {
  ContainerMain,
  BotonConv,
  Divider,
  ContainerHerrFiltro,
  ContainerHerr,
  CardHerr,
  CardHerrInfo,
  IntroPageHerr,
} from "../components/Layout.styles";
import { Link } from "react-router-dom";
import { useState } from "react";

const Herramientas = () => {
  const [filtro, setFiltro] = useState("todas");
  const handleFiltroChange = (filtroSeleccionado) => {
    setFiltro(filtroSeleccionado);
  };

  return (
    <div>
      <ContainerMain>
        <IntroPageHerr>
          ¿Conoces alguna herramienta que no encuetras aquí? ¡Compártela!
        </IntroPageHerr>
        <Link
          to="/herramientaesp"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <BotonConv>Publica una herramienta</BotonConv>
        </Link>
        <Divider />

        <ContainerHerrFiltro>
          <BotonConv onClick={() => handleFiltroChange("todas")}>
            Todas
          </BotonConv>
          <BotonConv onClick={() => handleFiltroChange("oficiales")}>
            Oficiales
          </BotonConv>
          <BotonConv onClick={() => handleFiltroChange("comunidad")}>
            Comunidad
          </BotonConv>
        </ContainerHerrFiltro>
        <ContainerHerr>
          <CardHerr
            style={{
              display:
                filtro === "todas" || filtro === "oficiales" ? "block" : "none",
            }}
          >
            <Link
              to="/HerramientaEsp"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <CardHerrInfo>
                <img src="src\assets\images\Herramienta1.png" alt="" />
                <p>Neurohacking</p>
              </CardHerrInfo>
            </Link>
          </CardHerr>
          <CardHerr
            style={{
              display:
                filtro === "todas" ||
                  (filtro === "oficiales" && filtro !== "comunidad")
                  ? "block"
                  : "none",
            }}
          >
            <CardHerrInfo>
              <img src="src\assets\images\Herramienta2.png" alt="" />
              <p>Técnicas de respiración</p>
            </CardHerrInfo>
          </CardHerr>
          <CardHerr
            style={{
              display:
                filtro === "todas" ||
                  (filtro === "oficiales" && filtro !== "comunidad")
                  ? "block"
                  : "none",
            }}
          >
            <CardHerrInfo>
              <img src="src\assets\images\Herramienta3.png" alt="" />
              <p>Música</p>
            </CardHerrInfo>
          </CardHerr>
          <CardHerr
            style={{
              display:
                filtro === "todas" ||
                  (filtro === "oficiales" && filtro !== "comunidad")
                  ? "block"
                  : "none",
            }}
          >
            <CardHerrInfo>
              <img src="src\assets\images\Herramienta4.png" alt="" />
              <p>Journaling</p>
            </CardHerrInfo>
          </CardHerr>
          <CardHerr
            style={{
              display:
                filtro === "todas" ||
                  (filtro === "comunidad" && filtro !== "oficiales")
                  ? "block"
                  : "none",
            }}
          >
            <CardHerrInfo>
              <img src="src\assets\images\Herramienta5.png" alt="" />
              <p>Diario de gratitud</p>
            </CardHerrInfo>
          </CardHerr>
          <CardHerr
            style={{
              display:
                filtro === "todas" ||
                  (filtro === "oficiales" && filtro !== "comunidad")
                  ? "block"
                  : "none",
            }}
          >
            <CardHerrInfo>
              <img src="src\assets\images\Herramienta6.png" alt="" />
              <p>Terapia Cognitivo Conductual</p>
            </CardHerrInfo>
          </CardHerr>
          <CardHerr
            style={{
              display:
                filtro === "todas" ||
                  (filtro === "comunidad" && filtro !== "oficiales")
                  ? "block"
                  : "none",
            }}
          >
            <CardHerrInfo>
              <img src="src\assets\images\Herramienta5.png" alt="" />
              <p>Hoponopono</p>
            </CardHerrInfo>
          </CardHerr>
          <CardHerr
            style={{
              display:
                filtro === "todas" ||
                  (filtro === "oficiales" && filtro !== "comunidad")
                  ? "block"
                  : "none",
            }}
          >
            <CardHerrInfo>
              <img src="src\assets\images\Herramienta8.png" alt="" />
              <p>Terapia</p>
            </CardHerrInfo>
          </CardHerr>
          <CardHerr
            style={{
              display:
                filtro === "todas" ||
                  (filtro === "oficiales" && filtro !== "comunidad")
                  ? "block"
                  : "none",
            }}
          >
            <CardHerrInfo>
              <img src="src\assets\images\Herramienta7.png" alt="" />
              <p>Descansos digitales</p>
            </CardHerrInfo>
          </CardHerr>
          <CardHerr
            style={{
              display:
                filtro === "todas" ||
                  (filtro === "comunidad" && filtro !== "oficiales")
                  ? "block"
                  : "none",
            }}
          >
            <CardHerrInfo>
              <img src="src\assets\images\Herramienta5.png" alt="" />
              <p>Otros</p>
            </CardHerrInfo>
          </CardHerr>
        </ContainerHerr>
      </ContainerMain>
    </div>
  );
};

export default Herramientas;
